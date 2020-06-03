# gatsby-source-chunk-data

Test plugin to chunk data sourced from a fake object. `demo` is the application, `gatsby-source-chunk-data` is the plugin.

## Demo

https://gatsby-source-chunk-data.netlify.app/

See options in `demo/gatsby.config.js`

## Get Started

Install deps

```sh
yarn
```

Run the build at least once to create the data chunks

```sh
yarn build
```

Run develop to see the app

```sh
yarn develop
```

## Chunks

Chunks are created by `gatsby-node` in the `onPreBuild` process and are written to the `out` path defined in `gatsby-config`

The current data shape that is required for this to work is as follows.

```javascript
// demo/src/data/data-products.json
{
  "product-abc": [
      ...
  ],
    "product-def": [
      ...
  ],
    "product-ghi": [
      ...
  ]
}

```

All _chunks_ are created by the server at build time.

Each _chunk_ is requested by the client, keeping page load time down.
