import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <Image
            src="/images/hero/certification.png"
            alt="Masflo Certifications"
            width={300}
            height={60}
          />

          <div
            style={{
              marginTop: "16px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#0a2540",
              letterSpacing: "0.5px",
            }}
          >
            © {new Date().getFullYear()} MASFLO. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            textAlign: "right",
            fontSize: "16px",
            fontWeight: 600,
            color: "#0a2540",
            lineHeight: 1.7,
          }}
        >
          <div style={{ fontWeight: 700 }}>
            INTERNATIONAL PUMPING SYSTEM – IPS PUMP
          </div>

          <div>133 Av. Jean Jaurès, 75019 Paris – France</div>

          <div>Tel: +33 175 379 736</div>

          <div>
            Web: www.masflo.com
            <br />
            Contact: info@masflo.com
          </div>
        </div>
      </div>
    </footer>
  );
}
