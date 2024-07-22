import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const addProduct = () => {
    if (name && price && category && company) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/add-product`, {
          name,
          price,
          category,
          company,
          userId: JSON.parse(localStorage.getItem("user")),
        })
        .then((res) => {
          alert(`${res.data.name} added successfully`);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="SignUp">
      <h1>Add Product</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {error && !name && (
        <span className="error">Please enter a valid name</span>
      )}
      <input
        type="text"
        className="inputBox"
        placeholder="enter price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      {error && !price && (
        <span className="error">Please enter a valid price</span>
      )}
      <input
        type="text"
        className="inputBox"
        placeholder="enter category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      {error && !category && (
        <span className="error">Please enter a valid category</span>
      )}
      <input
        type="text"
        className="inputBox"
        placeholder="enter company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      {error && !company && (
        <span className="error">Please enter a valid company</span>
      )}
      <button className="Button" onClick={addProduct}>
        Add product
      </button>
    </div>
  );
};

export default AddProduct;
