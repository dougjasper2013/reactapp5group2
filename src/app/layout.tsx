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

      </body>

    </html>

  );
}