import React from "react";
import { Link, graphql } from "gatsby";

const YotpoTemplate = ({ data, pageContext }) => {
  const { pageNumber, pages } = pageContext || {};
  return (
    <div>
      <h1>{`YotpoTemplate | ${pageNumber}`}</h1>
      <pre
        style={{
          height: 400,
          overflow: "auto",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      {pages.map((page, index) => {
        const { pageNumber, link, isCurrent } = page;
        return (
          <Link key={index} to={link}>
            <button disabled={isCurrent}>{pageNumber}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default YotpoTemplate;

export const pageQuery = graphql`
  query($skip: Int, $limit: Int) {
    allYotpo(skip: $skip, limit: $limit) {
      nodes {
        id
        name
        email
      }
    }
  }
`;
