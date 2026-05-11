import ProductList from "../components/ProductList";

export default function Home() {

  return (

    <main className="home-page">

      {/* HERO BANNER */}

      <section className="products-hero">

        <div className="products-hero-content">

          {/* LOGO */}

          <img
            src="/logo.png"
            alt="Gadget Genie Logo"
            className="banner-logo"
          />

          {/* SMALL TEXT */}

          
          {/* DESCRIPTION */}

          <p className="hero-description">
            Discover premium gadgets, smartphones,
            gaming accessories, laptops, and modern
            tech products.
          </p>

        </div>

      </section>

      {/* TITLE */}

      <h1 className="hero-title">
        All models. <span>Take your pick.</span>
      </h1>

      {/* PRODUCTS */}

      <ProductList />

    </main>

  );
}