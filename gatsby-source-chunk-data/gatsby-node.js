const fs = require("fs");
const _ = require("lodash");

exports.onPreBuild = ({}, options) => {
  const { src, out, chunkSize } = options;

  const CHUNK_SIZE = chunkSize || 100;

  const srcData = JSON.parse(fs.readFileSync(src));

  // Write / name a dir by product id  + config and data by chunk size
  Object.keys(srcData).forEach((productId) => {
    let chunks = _.chunk(srcData[productId], CHUNK_SIZE);
    let chunkPath = `${out}/${productId}`;
    fs.mkdir(chunkPath, { recursive: true }, (err) => {
      if (err) throw err;

      // Write a config to store the chuunk length per product id
      fs.writeFileSync(
        `${chunkPath}/config.json`,
        `{"chunkLength": ${chunks.length}, "chunkSize" : ${CHUNK_SIZE}, "chunkTotal": ${srcData[productId].length}}`,
        (err) => {
          if (err) throw err;
        }
      );

      // Write the json that contains the chunked data
      chunks.forEach((chunk, index) => {
        fs.writeFileSync(
          `${chunkPath}/${index}.json`,
          `${JSON.stringify(chunk)}`,
          (err) => {
            if (err) throw err;
          }
        );
      });
    });
  });
};
