export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Contact Gadget Genie</h1>

        <p style={{ marginBottom: "20px" }}>
          Have questions? Send us a message.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            style={inputStyle}
          />

          <button style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#2563eb",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};