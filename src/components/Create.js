import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Create = () => {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  // const BOOK_MANAGEMENT_API = "https://my.api.mockaroo.com/books?key=32960f40"
  const { productId } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    if (productId) {
      axios
        .get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [productId]);

  const handleChangeProduct = (event) => {
    setProducts({
      ...products,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    axios.post(`${PRODUCT_MANAGEMENT_API}/products`, products).then((res) => {
      alert(`Create product ${JSON.stringify(res.data)} successfully!!!`);
    });
    window.location.href = "/create";
  };

  return (
    <>
      <h1>Create </h1>
      <Link to="/">
        <Button variant="warning">Back to list</Button>
      </Link>
      <form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={products.name || ""}
            onChange={handleChangeProduct}
          />
          {/* { console.log("🚀 ~ file: ListDetail.js:51 ~ ListDetail ~ products.name", products.name)} */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Prices</Form.Label>
          <Form.Control
            name="price"
            value={products.price || ""}
            onChange={handleChangeProduct}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            name="stock"
            value={products.stock || ""}
            onChange={handleChangeProduct}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={products.description || ""}
            onChange={handleChangeProduct}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </form>
    </>
  );
};
export default Create;
