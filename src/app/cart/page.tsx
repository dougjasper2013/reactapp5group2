"use client";

import { useState } from "react";

export default function CartPage() {

  // Products List
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 1200,
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1800,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 400,
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: 250,
    },
  ];

  // Cart State
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
        item.id === id && item.quantity > 1
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
    <div style={{ padding: "30px" }}>

      <h1>Gadget Genie Cart</h1>

      {/* Products Section */}
      <h2>Products</h2>

      {products.map((product) => (

        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>Price: ${product.price}</p>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}

      {/* Cart Section */}
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
                marginBottom: "20px",
                borderRadius: "10px",
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
    </div>
  );
}