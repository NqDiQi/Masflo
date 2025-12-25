"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // 👇 AUTO HIDE SAU 5 GIÂY
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <h2>INTERNATIONAL PUMPING SYSTEM – IPS PUMP</h2>

          <p>
            133 Av. Jean Jaurès
            <br />
            75019 Paris – France
          </p>

          <p>
            Tel: +33 175 379 736
            <br />
            Web: <a href="https://www.masflo.com">www.Masflo.com</a>
            <br />
            Email: <a href="mailto:info@masflo.com">info@masflo.com</a>
          </p>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps?q=133%20Av.%20Jean%20Jaurès%2075019%20Paris&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form">
          <h3>Contact Us</h3>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const data = {
                name: (form.elements.namedItem("name") as HTMLInputElement)
                  .value,
                email: (form.elements.namedItem("email") as HTMLInputElement)
                  .value,
                subject: (
                  form.elements.namedItem("subject") as HTMLInputElement
                ).value,
                message: (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value,
              };

              const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });

              if (res.ok) {
                alert(
                  "✅ Message sent successfully. We will contact you shortly."
                );
                form.reset();
              } else {
                alert("❌ Failed to send message. Please try again.");
              }
            }}
          >
            <input name="name" type="text" placeholder="Your name" required />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <input name="subject" type="text" placeholder="Subject" />
            <textarea name="message" placeholder="Message" rows={6} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
