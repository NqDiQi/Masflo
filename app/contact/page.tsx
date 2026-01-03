"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const sectionRef = useRef<HTMLElement | null>(null);

  /* ✨ SCROLL ANIMATION */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("contact-show");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* AUTO HIDE STATUS */
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section ref={sectionRef} className="contact-section contact-hidden">
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
            Web: <a href="https://www.masflo.com">www.masflo.com</a>
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
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

              if (res.ok) {
                alert("✅ Message sent successfully.");
                form.reset();
              } else {
                alert("❌ Failed to send message.");
              }
            }}
          >
            <input name="name" placeholder="Your name" required />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <input name="subject" placeholder="Subject" />
            <textarea name="message" rows={6} placeholder="Message" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
