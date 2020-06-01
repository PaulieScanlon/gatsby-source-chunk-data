module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-chunk-data`,
      options: {
        source: `${__dirname}/src/data/data.json`,
        template: `${__dirname}/src/templates/YotpoTemplate.js`,
        pageSize: 50,
      },
    },
  ],
};
