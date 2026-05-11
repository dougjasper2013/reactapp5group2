export default function ContactPage() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Contact Gadget Genie
      </h1>

      <p style={{ marginBottom: "30px", color: "gray" }}>
        We'd love to hear from you! Send us your questions,
        feedback, or product inquiries.
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
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="Your Message"
          rows={6}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "40px" }}>
        <h3>Store Information</h3>
        <p>Email: support@gadgetgenie.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: Toronto, Canada</p>
      </div>
    </div>
  );
}