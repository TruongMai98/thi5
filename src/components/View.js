import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const View = () => {
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

  // const handleDelete = (id) => {
  //     axios
  //       .delete(`${PRODUCT_MANAGEMENT_API}/products/${id}`)
  //       .then((res) => {
  //         alert(res.status);
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   };

//   const handleDelete = (event) => {
//     event.preventDefault();
//     if (productId) {
//       axios
//         .delete(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
//         .then((res) => {
//           alert(`Remove product ${JSON.stringify(res.data)} successfully!!!`);
//           window.location.href = "/";
//         })
//         .catch((err) => {
//           throw err;
//         });
//     }
//   };
  return (
    <>
      <h1>View </h1>
      <Link to="/">
        <Button variant="warning">Back to list</Button>
      </Link>
      <form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          {/* <input name="name" value={products.name || ""} onChange={handleChangeProduct}/> */}
          {/* { console.log("🚀 ~ file: ListDetail.js:51 ~ ListDetail ~ products.name", products.name)} */}
          <Form.Text> {products.name}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Prices</Form.Label>
          {/* <input name="price" value={products.price || ""} onChange={handleChangeProduct}/> */}
          <Form.Text> {products.price}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          {/* <input name="stock" value={products.stock || ""} onChange={handleChangeProduct} /> */}
          <Form.Text> {products.stock}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          {/* <input name="description" value={products.description || ""} onChange={handleChangeProduct} /> */}
          <Form.Text> {products.description}</Form.Text>
        </Form.Group>
        
      </form>
    </>
  );
};
export default View;
