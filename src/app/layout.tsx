import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Gadget Genie Store",
  description: "Tech Gadget Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        {/* NAVBAR */}

        <Navbar />

        {/* PAGE CONTENT */}

        {children}
        

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <h3>About us</h3>

          <p>
            Gadget Genie is your modern tech store for premium gadgets,
            smart devices, and accessories.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>

        </div>

        <div className="footer-box">

          <h3>Company</h3>

          <a href="#">Wishlist</a>
          <a href="#">Cart</a>
          <a href="#">About Us</a>

        </div>

        <div className="footer-box">

          <h3>Newsletter</h3>

          <input
            type="email"
            placeholder="Enter your email"
          />

        </div>

      </div>

    </footer>

      </body>

    </html>

  );
}