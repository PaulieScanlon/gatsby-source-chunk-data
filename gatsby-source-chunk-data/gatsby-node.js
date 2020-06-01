const fs = require("fs");
// const path = require('path')

exports.onCreateNode = ({ actions }, options) => {
  const { createNode } = actions;
  const { source } = options;

  const data = JSON.parse(fs.readFileSync(source));

  //   data.map((obj) => {
  //     const { id, first_name, last_name, email } = obj;
  //     createNode({
  //       id: `${id}`,
  //       name: `${first_name} ${last_name}`,
  //       email: email,
  //       parent: null,
  //       children: [],
  //       internal: {
  //         type: `yotpo`,
  //         contentDigest: "data",
  //       },
  //     });
  //   });

  data.forEach((obj) => {
    const { id, first_name, last_name, email } = obj;
    createNode({
      id: `${id}`,
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
};

// {
//     allYotpo {
//       nodes {
//         id
//         name
//         email
//       }
//     }
//   }
