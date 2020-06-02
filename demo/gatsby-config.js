module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-chunk-data`,
      options: {
        /** Only required for page query */
        template: `${__dirname}/src/templates/YotpoTemplate.js`,
        // --
        source: `${__dirname}/src/data/data.json`,
        // source: `${__dirname}/src/data/data-short.json`,
        pageSize: 100,
        name: "chunk",
      },
    },
  ],
};
