"use client";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <p className="new-tag">NEW</p>

      <h2>{product.name}</h2>

      <div className="image-box">
        <img src={product.image} alt={product.name} />
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

        <button onClick={() => addToCart(product)}>
          Buy
        </button>
      </div>
    </div>
  );
}