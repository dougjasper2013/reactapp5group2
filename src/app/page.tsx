import ProductList from "../components/ProductList";

import Link from "next/link";

export default function HomeHero() {
  return (
    <>
      {/* HERO BANNER */}

      <section className="hero-banner">

        <div className="hero-left">

          <span className="hero-tag">NEW ARRIVAL</span>

          <h1>Watch Wearable Device</h1>

          <p>
            Discover our latest smart gadgets and tech innovations.
          </p>

          <Link href="/products">
            <button>Shop Now</button>
          </Link>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop"
            alt="Smart Watch"
          />

        </div>

      </section>



      {/* TOP BANNERS */}

      <section className="top-banner-section">

        <div className="top-banner-card purple">

          <div>

            <p>UP TO 75% OFF!</p>

            <h2>Unbeatable Discounts</h2>

            <Link href="/products">
              Shop Now →
            </Link>

          </div>

          <img
            src="https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000&auto=format&fit=crop"
            alt="Speaker"
          />

        </div>



        <div className="top-banner-card blue">

          <div>

            <p>Hurry Up! On Sale</p>

            <h2>Massive Fashion Sale</h2>

            <Link href="/products">
              Shop Now →
            </Link>

          </div>

          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Laptop"
          />

        </div>

      </section>



      {/* BEST SELLING */}

      <section className="best-selling">

        <div className="section-title">

          <h2>Best Selling Products</h2>

          <Link href="/products">
            View All →
          </Link>

        </div>

        <div className="best-selling-grid">

          <div className="big-sale-card">

            <div className="big-sale-content">

              <h3>Hot Collection</h3>

              <p>
                Premium gadgets and smart devices
              </p>

              <Link href="/products">
                Shop Now →
              </Link>

            </div>

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop"
              alt="Phone"
            />

          </div>



          <div className="small-product-card">

            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop"
              alt="Watch"
            />

            <h4>Apple Watch</h4>

            <p>$499</p>

            <Link href="/products">
              Buy Now
            </Link>

          </div>



          <div className="small-product-card">

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
              alt="Headphones"
            />

            <h4>Sony Headphones</h4>

            <p>$299</p>

            <Link href="/products">
              Buy Now
            </Link>

          </div>



          <div className="small-product-card">

  <img
    src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Headphones"
  />

  <h4>Sony Headphones</h4>

  <p>$299</p>

  <Link href="/products">
    Buy Now
  </Link>

</div>
            
        </div>

      </section>



      {/* SPECIAL DISCOUNT */}

      <section className="discount-banner">

        <h2>Special Discount</h2>

        <p>Up to 50% OFF on selected gadgets</p>

        <Link href="/products">
          <button>Shop Deals</button>
        </Link>

      </section>



      

    </>
  );
}