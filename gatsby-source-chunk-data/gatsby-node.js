const fs = require("fs");
const _ = require("lodash");

exports.onPreBuild = ({}, options) => {
  const { source, name, pageSize } = options;

  const PAGE_SIZE = pageSize || 100;

  const data = JSON.parse(fs.readFileSync(source));

  let chunks = _.chunk(data, PAGE_SIZE);

  chunks.forEach((chunk, index) => {
    const chunkNumber = index + 1;
    fs.writeFileSync(
      `public/static/${name}-data-${chunkNumber}.json`,
      `${JSON.stringify(chunk)}`,
      () => {}
    );
  });

  fs.writeFileSync(
    `public/static/${name}-config.json`,
    `{"length": ${chunks.length}}`,
    () => {}
  );
};

exports.onCreateNode = ({ actions }, options) => {
  const { createNode, createPage } = actions;
  const { source, template, pageSize } = options;

  const PAGE_SIZE = pageSize || 100;

  const data = JSON.parse(fs.readFileSync(source));

  let chunks = _.chunk(data, PAGE_SIZE);

  data.forEach((obj) => {
    const { id, first_name, last_name, email } = obj;
    createNode({
      id: `yotpo-${id}`,
      name: `${first_name} ${last_name}`,
      email: email,
      parent: null,
      children: [],
      internal: {
        type: `yotpo`,
        contentDigest: "data",
      },
    });
  });

  chunks.forEach((_, index) => {
    const pageNumber = index + 1;
    createPage({
      path: `yotpo/${pageNumber}`,
      component: template,
      context: {
        skip: PAGE_SIZE * index,
        limit: PAGE_SIZE,
        pageNumber: pageNumber,
        pages: chunks.map((_, index) => {
          const number = index + 1;
          return {
            pageNumber: number,
            link: `/yotpo/${number}`,
            isCurrent: number === pageNumber ? true : false,
          };
        }),
      },
    });
  });
};
