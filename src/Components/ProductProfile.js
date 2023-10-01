import React from "react";

const ProductProfile = ({ name, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default ProductProfile;
