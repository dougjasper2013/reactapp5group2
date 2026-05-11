"use client";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 1999,
    image: "/macbook-air.jpg"
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 4,
    name: "Apple Watch",
    price: 499,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
  },
  {
    id: 5,
    name: "Gaming Keyboard",
    price: 149,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 89,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 129,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
  },
  {
    id: 8,
    name: "Canon Camera",
    price: 899,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    id: 9,
    name: "Samsung Galaxy S24",
    price: 1099,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
  },
  {
    id: 10,
    name: "iPad Air",
    price: 799,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
  },
  {
    id: 11,
    name: "Dell Monitor",
    price: 349,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  },
  {
    id: 12,
    name: "Mechanical Keyboard",
    price: 159,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  },
  {
    id: 13,
    name: "VR Headset",
    price: 599,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500",
  },
  {
    id: 14,
    name: "Drone Camera",
    price: 999,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
  },
  {
    id: 15,
    name: "Smart TV",
    price: 1499,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
  },
  {
    id: 16,
    name: "Wireless Earbuds",
    price: 199,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
  },
  {
    id: 17,
    name: "PlayStation 5",
    price: 699,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
  },
  {
    id: 18,
    name: "Xbox Series X",
    price: 649,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=500",
  },
  {
    id: 19,
    name: "Smart Home Hub",
    price: 249,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
  },
  {
    id: 20,
    name: "Portable SSD",
    price: 179,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
  },
];

export default function ProductList() {
  const addToCart = (product) => {
    alert(product.name + " added to cart");
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
}