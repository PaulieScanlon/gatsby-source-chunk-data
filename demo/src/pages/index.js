import React, { useState, useEffect } from "react";
import axios from "axios";

// This is the name of the defined in `gatsby-config.js`
const NAME = "chunk";

const IndexPage = () => {
  const [config, setConfig] = useState([]);
  const [data, setData] = useState();
  const [currentChunk, setCurrentChunk] = useState(1);

  useEffect(() => {
    axios.get(`/static/${NAME}-config.json`).then((res) => {
      setConfig([...new Array(res.data.length)]);
    });
  }, []);

  useEffect(() => {
    axios.get(`/static/${NAME}-data-${currentChunk}.json`).then((res) => {
      setData(res.data);
    });
  }, [currentChunk]);

  return (
    <div>
      <h1>{`Index Page | ${currentChunk}`}</h1>
      <pre
        style={{
          height: 400,
          overflow: "auto",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      {config.map((_, index) => {
        const chunkNumber = index + 1;
        return (
          <button
            disabled={chunkNumber === currentChunk}
            key={chunkNumber}
            onClick={() => setCurrentChunk(chunkNumber)}
          >
            {chunkNumber}
          </button>
        );
      })}
    </div>
  );
};

export default IndexPage;
