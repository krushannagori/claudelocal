import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ₹{p.price} <br />
            {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;