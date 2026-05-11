"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1199,
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: 1999,
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 299,
  },
  {
    id: 4,
    name: "Apple Watch",
    price: 499,
  },
];

export default function CartPage() {

  const [cartItems, setCartItems] = useState<any[]>([]);

  // Add to Cart
  const addToCart = (product: any) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Increase Quantity
  const increaseQuantity = (id: number) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id: number) => {

    setCartItems(
      cartItems.map((item) =>
        item.quantity > 1 && item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id: number) => {

    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Gadget Genie Cart
      </h1>

      {/* Products */}
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {products.map((product) => (

          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "10px 14px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <>
          {cartItems.map((item) => (

            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "20px",
              }}
            >
              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
                style={{
                  marginRight: "10px",
                }}
              >
                +
              </button>

              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
                style={{
                  marginRight: "10px",
                }}
              >
                -
              </button>

              <button
                onClick={() =>
                  removeItem(item.id)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${totalPrice}</h2>
        </>
      )}
    </main>
  );
}