import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const List = () => {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${PRODUCT_MANAGEMENT_API}/products`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <h1>Products list</h1>
      <Link to="/create">
        <Button variant="primary">Add new product</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Prices</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Link to={`/edit/${product.id}`}>
                  <Button variant="success">Edit</Button>
                </Link>
                <Link to={`/delete/${product.id}`}>
                  <Button variant="danger">Delete</Button>
                </Link>
                <Link to={`/view/${product.id}`}>
                  <Button variant="info">View</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default List;
