import React, { useState } from "react";

const CreateProductPage = () => {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });

  const addProduct = () => {
    console.log(product);
  };

  return (
    <div className="flex m-auto w-[50vw] flex-col gap-4 justify-center ">
      <input
        type="text"
        onChange={(e) => {
          setProduct({ ...product, name: e.target.value });
        }}
        value={product.name}
        placeholder="Product name..."
        name="name"
        id="name"
      />
      <input
        type="text"
        onChange={(e) => {
          setProduct({ ...product, price: e.target.value });
        }}
        value={product.price}
        placeholder="Product price..."
        name="price"
        id="price"
      />
      <input
        onChange={(e) => {
          setProduct({ ...product, image: e.target.value });
        }}
        value={product.image}
        type="text"
        placeholder="Image url"
        name="image"
        id="image"
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default CreateProductPage;
