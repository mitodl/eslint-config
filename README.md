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
