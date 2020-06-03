import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        <li>
          <Link to="/product-abc">Product ABC</Link>
        </li>
        <li>
          <Link to="/product-def">Product DEF</Link>
        </li>
        <li>
          <Link to="/product-ghi">Product GHI</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
