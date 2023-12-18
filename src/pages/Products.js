import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p1", title: "Product 2" },
  { id: "p1", title: "Product 3" },
  { id: "p1", title: "Product 4" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id} id={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
