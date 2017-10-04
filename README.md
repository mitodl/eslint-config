# MITODL eslint configuration

This is our preferred configuration for `eslint`. To use it:

```
yarn add eslint-config-mitodl
```

and then change your `.eslintrc` to have:

```
{
  "extends": "eslint-config-mitodl"
}
```

This package has several peer dependencies (eslint plugins for react and
flow, prettier, etc) so make sure you satisfy those! Once you do you
should be in linting heaven.

## JavaScript style

This is an opinionated setup. It enforces a number of things which
`prettier` and `eslint --fix` can automatically fix, like:

- no semicolons
- no `let` where `const` will do
- always align values in object literal declarations
- spaces in parentheses and around operators (like `+`, `=`, etc)

as well as a lot of specific things related to our standard tooling (e.g.
disallowing the `.only` method on mocha tests).

However, there are a number of style guidelines we try to adhere to which
there aren't, as yet, any rules in `eslint` for. This README seems as good
a place as any to write them down, so here we go:

### import order

We prefer to import things at the very top of a file in a few sections.
These should be separated by a blank line, and in the following order:

- external dependencies
- our own react components
- our own library functions (i.e. things other than react components)
- flow types

here's an example:

```js
// @flow
import React from "react"
import DocumentTitle from "react-document-title"
import R from "ramda"

import Card from "../components/Card"
import { myGreatComponent } from "../components/SoGreat"

import { libraryFunctions } from "../lib/someLib"
import { actions } from "../actions"

import type { LibType } from "../flow/libTypes"
```

not

```js
// @flow
import React from "react"
import DocumentTitle from "react-document-title"
import R from "ramda"

import Card from "../components/Card"
import { actions } from "../actions"
import { myGreatComponent } from "../components/SoGreat"
import type { LibType } from "../flow/libTypes"
import { libraryFunctions } from "../lib/someLib"
```

ordering them this way just makes it easier to find and change imports
when you need to, and makes it visually easier to scan.

### prefer functional components where possible

If you are writing a simple component which just takes props and renders
UI, and you don't need to use lifecycle methods or `this.state`, you can
often put a little bit less code on the page by writing your component as
a pure function instead of an ES6 class.

So prefer this:

```js
export const SimpleComponent = ({ name }) => (
  <div className="simple-component">
    { name }
  </div>
)
```

to this:

```js
export class SimpleComponent extends React.Component {
  render () {
    const { name } = this.props
    return (
      <div className="simple-component">
        { name }
      </div>
    )
  }
}
```

However, if you need to use lifecycle methods or `this.state` you will
need to use a class-based component.

### prefer async / await syntax

The [async function
expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
is a nice bit of syntactic sugar that we have in JS now. It basically lets
you write async code (using Promises) in a way that looks synchronous. It
ends up being a lot more readable usually.

So we prefer this:

```js
export const fetchUserInfo = async (userID: string) => {
  const response = await fetch(`/users/${userID}`)
  const json = await response.json()
  return json
}
```

to something like this:


```js
export const fetchUserInfo = (userID: string) => {
  return fetch(`/users/${userID}`).then(response => {
    return response.json()
  })
}
```

If you need to `.catch` an async action which can fail you can use a `try
/ catch` to achieve the same thing in an async function:

```js
export const fetchUserInfo = async (userID: string) => {
  try {
    const response = await fetch(`/users/${userID}`)
    const json = await response.json()
    return json
  } catch (e) {
    alert('OH NO!')
  }
}
```

### keep render small, put it at the bottom

The render function should ideally just pull props out of `this.props` and
then return JSX. However, often we need to do a little bit of data
processing, even in a purely presentational component, such as pulling
a few props out of an object, setting up callbacks, etc. It's best to
write a few small helper functions which do this work and keep excess code
out of the render function. So we prefer something like:

(warning: pseudocode ahead!)

```js
const DEFAULT_IMAGE = '/img/puppies.jpg'

class ProfileImage extends React.Component {
  updateProfileImage = async (image: Image) => {
    const { dispatch } = this.props
    dispatch(actions.updateProfileImage(image))
  }

  getUsersProfileImage = () => {
    const { username, profileImages } = this.props
    return R.propOr(DEFAULT_IMAGE, username, profileImages)
  }

  render () {
    return (
      <div className="profile-image">
        <img src={this.getUsersProfileImage()} />
        <button onClick={this.updateProfileImage}>
          UPDATE!!!!
        </button>
      </div>
    )
  }
}
```

to something like:

```js
const DEFAULT_IMAGE = '/img/puppies.jpg'

class ProfileImage extends React.Component {
  render () {
    const {
      dispatch,
      username,
      profileImages
    } = this.props

    const profileImage = R.propOr(DEFAULT_IMAGE, username, profileImages)

    const updateProfileImage = (image: Image) => {
      const { dispatch } = this.props
      dispatch(actions.updateProfileImage(image))
    }

    return (
      <div className="profile-image">
        <img src={profileImage} />
        <button onClick={updateProfileImage}
          UPDATE!!!!
        </button>
      </div>
    )
  }
}
```

This is obviously a bit of a trivial example, but in cases where we have
dozens of hundreds of lines of helper code that needs to be run before we
can return any JSX, pulling things out into simple, well-named helper
methods can be a huge clarity win.

Also, the `render` method should always be the last method defined in
a class.

### prefer functional code

If something can be written as a series of small, composable functions, do
so!

### Use container components for pages when it makes sense

We generally follow the [standard react / redux
pattern](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
of separating presentational and container components.

How that plays out is we generally use a container component for each
logical 'page' in our SPAs. This container handles fetching any data from
the backend that the page needs to display its UI, binds any callbacks for
making calls to the backend, etc. The container renders its UI by passing
props down to presentational components, which don't have explicit
knowledge about where the data is coming from or what the callbacks they
are handed do. This simplifies testing the presentational parts of the UI,
since they can be tested using enzyme, sinon, and our factories in
a straightforward way. When we have pages that hit several APIs, bind
a few dozen callbacks, and need to render many different components, this
is a big help.

However, there are cases when the 'one container per page' pattern can
break down a little. Consider the case of the 'profile image' component
[in
micromasters](https://github.com/mitodl/micromasters/blob/master/static/js/containers/ProfileImage.js).
We wanted to have a small component, in several places in the app, which
showed the user's profile image and, on the user's own profile and
dashboard, provided a means to upload a new profile image. This component
needed to appear on several different pages, and we wanted the same
functionality everywhere.

This presents a challenge to the container component pattern. To get the
functionality we wanted in the 'strict' container pattern we would need to
bind the same 'updateProfileImage' type callback on every page where we
wanted to show the profile image and allow the user to update it. This
would lead to potentially subtle bugs, if the implementation in one
container component drifted slightly from another, if a developer were
unaware of the implementation details when adding the component to a new
page, etc. So in this case what makes sense is to have the `ProfileImage`
component be a container itself, which is self-contained and gets mounted
in several places.

It's a judgment call where to draw the line on this sort of thing, but in
general we should stick to the 'one container per page' guideline where it
makes sense, and directly connect small components to the store where it
makes sense. There's no real penalty to having many container components
connected to the store, so this is mainly a guideline for enforcing some
boundaries on how we write this kind of code and how it gets laid out.

### stick to a standard directory layout

We generally use something like the following:

```
static/js
├── actions    # redux actions
├── components # presentational components
├── containers # container components
├── data       # any static data
├── entry      # all webpack entry scripts
├── factories  # factories and fixtures for tests
├── flow       # flow declaration files
├── lib        # library files
├── reducers   # redux reducers
├── store      # redux store config
└── util       # utility functions
```


Each of these might have subdirectories for e.g. all of the components
relating to a particular feature, or libraries that logically group
together (in `/lib`). 

### library code vs helper methods

In general if you're writing a series of helper functions for a React
component, and you begin to even suspect that they might be useful
elsewhere they probably belong in a library in `/lib`. A few examples of
things that are good candidates for pulling out into a library:

- validation code
- functions for parsing or generating URLs
- API functions
- functions for displaying prices, dates, or other specialized values

Really anything which is going to be implemented as a small collection of
pure functions is a good candidate! Pulling things out into `/lib`
encourages writing pure functions, encourages good testing procedures, and
encourages separating data processing logic from the actual UI code.
