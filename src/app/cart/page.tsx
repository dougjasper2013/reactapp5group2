"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "../../data/products";
import { readCart, addItemToCart, updateCartQuantity, removeCartItem } from "../../lib/cartStorage";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    setCartItems(readCart());
  }, []);

  const addToCart = (product: any) => {
    setCartItems(addItemToCart(product));
  };

  const increaseQuantity = (id: number) => {
    setCartItems(updateCartQuantity(id, 1));
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(updateCartQuantity(id, -1));
  };

  const removeItem = (id: number) => {
    setCartItems(removeCartItem(id));
  };

  const totalPrice = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#f3efe9",
            borderRadius: "28px",
            padding: "50px",
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#555",
            }}
          >
            GADGET GENIE
          </p>

          <h1
            style={{
              fontSize: "60px",
              marginBottom: "20px",
              color: "#111",
            }}
          >
            Shopping Cart
          </h1>

          <p
            style={{
              maxWidth: "600px",
              lineHeight: "1.7",
              color: "#555",
              fontSize: "18px",
            }}
          >
            Review your selected gadgets, update quantities, and manage your shopping cart easily.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f3efe9",
              borderRadius: "28px",
              padding: "30px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "25px",
                color: "#111",
              }}
            >
              Products
            </h2>

            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #d6d0c7",
                  borderRadius: "18px",
                  padding: "18px",
                  marginBottom: "18px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "14px",
                    }}
                  />

                  <div>
                    <h3
                      style={{
                        marginBottom: "8px",
                        color: "#111",
                      }}
                    >
                      {product.name}
                    </h3>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        maxWidth: "220px",
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#111",
                    }}
                  >
                    ${product.price}
                  </p>

                  <button onClick={() => addToCart(product)} style={blackButton}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#f3efe9",
              borderRadius: "28px",
              padding: "30px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "25px",
                color: "#111",
              }}
            >
              Cart Items
            </h2>

            {cartItems.length === 0 ? (
              <p style={{ color: "#555" }}>Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      border: "1px solid #d6d0c7",
                      borderRadius: "18px",
                      padding: "18px",
                      marginBottom: "18px",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "75px",
                          height: "75px",
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />

                      <div>
                        <h3
                          style={{
                            marginBottom: "8px",
                            color: "#111",
                          }}
                        >
                          {item.name}
                        </h3>

                        <p style={{ color: "#555" }}>${item.price}</p>
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "12px",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button onClick={() => decreaseQuantity(item.id)} style={quantityButton}>
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)} style={quantityButton}>
                          +
                        </button>
                      </div>

                      <button onClick={() => removeItem(item.id)} style={blackButton}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    backgroundColor: "black",
                    borderRadius: "20px",
                    padding: "25px",
                    marginTop: "30px",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "14px",
                  }}
                >
                  <div>
                    <h2 style={{ marginBottom: "10px" }}>Total</h2>
                    <p style={{ color: "#ccc", fontSize: "14px" }}>
                      Taxes and shipping calculated at checkout.
                    </p>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <h1 style={{ marginBottom: "15px" }}>${totalPrice}</h1>
                    <button style={checkoutButton}>Checkout</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

const blackButton = {
  appearance: "none" as const,
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

const quantityButton = {
  appearance: "none" as const,
  width: "34px",
  height: "34px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "black",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

const checkoutButton = {
  appearance: "none" as const,
  backgroundColor: "white",
  color: "black",
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
};
