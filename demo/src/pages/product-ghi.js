import React from "react";
import { Link } from "gatsby";
import Product from "../components/Product";

const PRODUCT_ID = "product-ghi";

const ProductGhi = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{PRODUCT_ID}</h1>
      <Product id={PRODUCT_ID} />
    </div>
  );
};

export default ProductGhi;
