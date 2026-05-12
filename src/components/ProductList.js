"use client";

import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { addItemToCart } from "../lib/cartStorage";

export default function ProductList() {
  const addToCart = (product) => {
    addItemToCart(product);
    alert(`${product.name} added to cart`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
}
