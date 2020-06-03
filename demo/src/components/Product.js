import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

const DATA_PATH = `/static/reviews`;

const Product = ({ id }) => {
  const [status, setStatus] = useState({
    error: false,
  });
  const [config, setConfig] = useState({
    chunks: [],
    chunkLength: 0,
    chunkSize: 0,
    chunkTotal: 0,
  });
  const [data, setData] = useState();
  const [currentChunk, setCurrentChunk] = useState(0);

  useEffect(() => {
    axios.get(`${DATA_PATH}/${id}/config.json`).then((res) => {
      if (typeof res.data !== "object") {
        setStatus({ error: true });
      } else {
        setConfig({
          chunks: [...new Array(res.data.chunkLength)],
          chunkLength: res.data.chunkLength,
          chunkSize: res.data.chunkSize,
          chunkTotal: res.data.chunkTotal,
        });
      }
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${DATA_PATH}/${id}/${currentChunk}.json`).then((res) => {
      if (typeof res.data !== "object") {
        setStatus({ error: true });
      } else {
        setData(res.data);
      }
    });
  }, [id, currentChunk]);

  return (
    <div>
      {status.error ? (
        <div>
          Error:
          <div>
            Run <pre style={{ display: "inline" }}>yarn build</pre> at least
            once
          </div>
        </div>
      ) : (
        <pre
          style={{
            height: 400,
            overflow: "auto",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <div>
        {!status.error && (
          <Fragment>
            <h5>{`Chunks per page: ${config.chunkSize} | Total chunks ${config.chunkLength} | Total results ${config.chunkTotal}`}</h5>
            {config.chunks.map((_, index) => {
              return (
                <button
                  disabled={index === currentChunk}
                  key={index}
                  onClick={() => setCurrentChunk(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Product;
