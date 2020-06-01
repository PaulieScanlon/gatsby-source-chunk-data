module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-chunk-data`,
      options: {
        source: `${__dirname}/src/data/data.json`,
      },
    },
  ],
};
