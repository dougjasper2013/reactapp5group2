"use client";

import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {

  const router = useRouter();

  const addToCart = () => {

    // GET OLD CART
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    // ADD NEW PRODUCT
    existingCart.push(product);

    // SAVE TO LOCAL STORAGE
    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    // GO TO CART PAGE
    router.push("/cart");
  };

  return (

    <div className="card">

      <p className="new-tag">NEW</p>

      <h2>{product.name}</h2>

      <div className="image-box">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="colors">

        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      <div className="bottom-row">

        <p className="price">
          From ${product.price}
        </p>

        <button onClick={addToCart}>
          Buy
        </button>

      </div>

    </div>

  );
}
