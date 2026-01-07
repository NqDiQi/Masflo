"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("contact-show");
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isVI = language === "vi";

  return (
    <section ref={sectionRef} className="contact-section contact-hidden">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <h2>
            {isVI
              ? "HỆ THỐNG BƠM QUỐC TẾ – IPS PUMP"
              : "INTERNATIONAL PUMPING SYSTEM – IPS PUMP"}
          </h2>

          {isVI ? (
            <p>
              590/2/4 Phan Văn Trị, Phường Hạnh Thông, TP. Hồ Chí Minh
            </p>
          ) : (
            <p>
              133 Av. Jean Jaurès
              <br />
              75019 Paris – France
            </p>
          )}

          <p>
            Tel: {isVI ? "0903642358" : "+33 175 379 736"}
            <br />
            Web: <a href="https://www.masflo.com">www.masflo.com</a>
            <br />
            Email: <a href="mailto:info@masflo.com">info@masflo.com</a>
          </p>

          <div className="map-wrapper">
            <iframe
              src={
                isVI
                  ? "https://www.google.com/maps?q=590%2F2%2F4%20Phan%20Van%20Tri%20Ho%20Chi%20Minh&output=embed"
                  : "https://www.google.com/maps?q=133%20Av.%20Jean%20Jaurès%2075019%20Paris&output=embed"
              }
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form">
          <h3>{isVI ? "Liên hệ" : "Contact Us"}</h3>

          <form>
            <input name="name" placeholder={isVI ? "Họ tên" : "Your name"} />
            <input
              name="email"
              type="email"
              placeholder={isVI ? "Email" : "Your email"}
            />
            <input name="subject" placeholder={isVI ? "Tiêu đề" : "Subject"} />
            <textarea rows={6} placeholder={isVI ? "Nội dung" : "Message"} />
            <button type="submit">{isVI ? "Gửi liên hệ" : "Submit"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
