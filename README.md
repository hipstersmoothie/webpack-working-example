# It Works!

This repo shows how webpack correctly uses `DefinePlugin` to inject variables into both cjs and esm code.

## Setup

```sh
yarn
yarn build
```

Now view `dist/main.js` and see that `SOME_CONSTANT` has been replaced in the CJS version of the code.

To view it working with ESM code:

1. Open `webpack.config.js`
2. Delete line 25

Now view `dist/main.js` and see that `SOME_CONSTANT` has been replaced in the ESM version of the code.
