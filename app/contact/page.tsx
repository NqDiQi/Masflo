export default function ContactPage() {
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
            Web: <a href="https://Masflo.com">www.masflo.com</a>
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

          <form>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows={6} required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
