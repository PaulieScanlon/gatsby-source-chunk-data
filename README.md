# gatsby-source-chunk-data

Test plugin to chunk data sourced from fake object. Demo is the application, `gatsby-source-chunk-data` is the plugin.

See `source` options in `demo/gatsby.config.js`

## Get Started

Install deps then spin up the app.

```sh
yarn develop
```

## Pages

Each _chunk_ from the source data is now a page eg: `http://localhost:8000/yotpo/1`

This probably won't work in the main application but it's a start and i was just playing around with how we can use dynamic values in a GraphQL query, eg via the `pageQuery` and `pageContext` vars => `skip` & `limit`
