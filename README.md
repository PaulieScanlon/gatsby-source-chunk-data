# gatsby-source-chunk-data

Test plugin to chunk data sourced from fake object. `demo` is the application, `gatsby-source-chunk-data` is the plugin.

See `source` options in `demo/gatsby.config.js`

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

Chunks are created by `gatsby-node` in the `onPreBuild` process and are written out to `public/static`. The name assigned can be passed in from `gatsby-config`

`src/page/index.js` is currently loading `chunk-data[num]` and `chunk-config.json`

Each _chunk_ is requested by the client, keeping page load time down.

All _chunks_ are created by the server at build time.

## Pages

Whilst this is a legitimate way to dynamically query with GraphQL it only works at the page level.

Each _chunk_ from the source data is now a page eg: `http://localhost:8000/yotpo/1`

This probably won't work in the main application but it's a start and i was just playing around with how we can use dynamic values in a GraphQL query, eg via the `pageQuery` and `pageContext` vars => `skip` & `limit`
