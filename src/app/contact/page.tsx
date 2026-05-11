export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#f4f1e8",
          borderRadius: "22px",
          padding: "35px",
        }}
      >
        <p style={{ fontSize: "12px", letterSpacing: "2px", fontWeight: "bold" }}>
          CONTACT GADGET GENIE
        </p>

        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          We’d love to hear from you.
        </h1>

        <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
          Have a question about our gadgets, orders, or returns? Send us a message
          and our team will get back to you soon.
        </p>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "25px auto 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f4f1e8",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2>Send a Message</h2>

          <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <input placeholder="Your Name" style={inputStyle} />
            <input placeholder="Your Email" type="email" style={inputStyle} />
            <textarea placeholder="Your Message" rows={6} style={inputStyle} />

            <button style={buttonStyle}>Send Message</button>
          </form>
        </div>

        <div
          style={{
            backgroundColor: "#f4f1e8",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2>Store Information</h2>
          <p>📧 support@gadgetgenie.com</p>
          <p>📱 (123) 456-7890</p>
          <p>📍 Toronto, Canada</p>

          <h2 style={{ marginTop: "30px" }}>Support Hours</h2>
          <p>Monday - Friday</p>
          <p>9:00 AM - 5:00 PM</p>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #c9c3b5",
  fontSize: "16px",
  backgroundColor: "#fffaf0",
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#111111",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};