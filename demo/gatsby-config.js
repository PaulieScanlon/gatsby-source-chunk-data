module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-chunk-data`,
      options: {
        src: `${__dirname}/src/data/data-products.json`,
        chunkSize: 10,
        out: "public/static/reviews",
      },
    },
  ],
};
