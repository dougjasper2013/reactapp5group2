"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { addItemToCart } from "../lib/cartStorage";

export default function ProductList() {
  const [notice, setNotice] = useState("");

  const addToCart = (product) => {
    addItemToCart(product);
    setNotice(`${product.name} added to cart`);
  };

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 4500);
    return () => window.clearTimeout(timer);
  }, [notice]);

  return (
    <div>
      {notice ? (
        <p
          style={{
            margin: "0 0 12px",
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #bbf7d0",
            background: "#f0fdf4",
            color: "#166534",
            fontWeight: 600,
          }}
        >
          {notice}
        </p>
      ) : null}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
