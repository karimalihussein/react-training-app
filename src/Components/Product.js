import React from "react";
import ProductProfile from "./ProductProfile";
import styles from "../styles/product.module.css";

const Product = ({ name, description, price }) => {
  return (
    <div className={styles.product}>
      <ProductProfile name={name} description={description} key={name} />
      <h3 className={styles.price}>${price}</h3>
    </div>
  );
};

export default Product;
