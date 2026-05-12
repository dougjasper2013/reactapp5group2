import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main className="home-page">
      <section className="products-hero">
        <div className="products-hero-content">
          <img
            src="/logo.png"
            alt="Gadget Genie Logo"
            className="banner-logo"
          />

          <p className="hero-description">
            Discover premium gadgets, smartphones, gaming accessories, laptops,
            and modern tech products.
          </p>
        </div>
      </section>

      <h1 className="hero-title">
        All models. <span>Take your pick.</span>
      </h1>

      <ProductList />
    </main>
  );
}
