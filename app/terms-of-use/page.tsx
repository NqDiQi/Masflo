"use client";

import LegalBanner from "@/components/LegalBanner/LegalBanner";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsOfUsePage() {
  const { language } = useLanguage();
  const isVI = language === "vi";

  return (
    <>
      <LegalBanner
        title={isVI ? "Điều khoản sử dụng" : "Terms of Use"}
        subtitle={
          isVI
            ? "Điều khoản điều chỉnh việc truy cập và sử dụng website Masflo."
            : "These Terms govern access to and use of the Masflo website."
        }
      />

      <main className="legalContent">
        <section>
          <h2>1. {isVI ? "Chấp nhận điều khoản" : "Acceptance of Terms"}</h2>
          <p>
            {isVI
              ? "Việc truy cập hoặc sử dụng website đồng nghĩa với việc bạn đã đọc, hiểu và đồng ý chịu ràng buộc bởi các điều khoản này."
              : "By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms."}
          </p>
        </section>

        <section>
          <h2>2. {isVI ? "Mục đích website" : "Website Purpose"}</h2>
          <p>
            {isVI
              ? "Website cung cấp thông tin tổng quan về sản phẩm, giải pháp và dịch vụ kỹ thuật của Masflo."
              : "This website provides general information regarding Masflo products, solutions, and technical services."}
          </p>
        </section>

        <section>
          <h2>3. {isVI ? "Quyền sở hữu trí tuệ" : "Intellectual Property"}</h2>
          <p>
            {isVI
              ? "Toàn bộ nội dung trên website thuộc quyền sở hữu của Masflo và được bảo vệ bởi luật sở hữu trí tuệ quốc tế."
              : "All content on this website is the intellectual property of Masflo and is protected by international intellectual property laws."}
          </p>
        </section>

        <section>
          <h2>4. {isVI ? "Phạm vi sử dụng" : "Permitted Use"}</h2>
          <p>
            {isVI
              ? "Người dùng chỉ được sử dụng nội dung cho mục đích cá nhân hoặc nội bộ, không mang tính thương mại."
              : "Content may be viewed or used for personal or internal business purposes only."}
          </p>
        </section>

        <section>
          <h2>
            5. {isVI ? "Giới hạn trách nhiệm" : "Limitation of Liability"}
          </h2>
          <p>
            {isVI
              ? "Masflo không chịu trách nhiệm đối với bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng website."
              : "Masflo shall not be liable for any damages arising out of or in connection with the use of this website."}
          </p>
        </section>

        <section>
          <h2>
            6. {isVI ? "Độ chính xác thông tin" : "Accuracy of Information"}
          </h2>
          <p>
            {isVI
              ? "Nội dung trên website được cung cấp 'nguyên trạng' và có thể thay đổi mà không cần thông báo trước."
              : "All information is provided “as is” and may be changed without prior notice."}
          </p>
        </section>

        <section>
          <h2>7. {isVI ? "Liên kết ngoài" : "External Links"}</h2>
          <p>
            {isVI
              ? "Masflo không chịu trách nhiệm đối với nội dung hoặc chính sách của các website bên thứ ba."
              : "Masflo assumes no responsibility for the content or practices of third-party websites."}
          </p>
        </section>

        <section>
          <h2>8. {isVI ? "Hành vi người dùng" : "User Conduct"}</h2>
          <p>
            {isVI
              ? "Người dùng không được thực hiện các hành vi gây ảnh hưởng đến an ninh, tính toàn vẹn hoặc hoạt động của hệ thống."
              : "Users must not misuse the website or engage in activities that could harm system integrity or security."}
          </p>
        </section>

        <section>
          <h2>9. {isVI ? "Luật áp dụng" : "Governing Law"}</h2>
          <p>
            {isVI
              ? "Các điều khoản này được điều chỉnh và giải thích theo pháp luật Cộng hòa Pháp."
              : "These Terms shall be governed by and construed in accordance with the laws of France."}
          </p>
        </section>

        <section>
          <h2>10. {isVI ? "Thay đổi điều khoản" : "Modifications"}</h2>
          <p>
            {isVI
              ? "Masflo có quyền sửa đổi các điều khoản này bất kỳ lúc nào. Việc tiếp tục sử dụng website đồng nghĩa với chấp nhận các thay đổi."
              : "Masflo reserves the right to modify these Terms at any time. Continued use constitutes acceptance of the revised terms."}
          </p>
        </section>

        {/* ===== FINAL CONTACT SECTION ===== */}
        <section>
          <h2>11. {isVI ? "Thông tin liên hệ" : "Contact Information"}</h2>

          {isVI ? (
            <>
              <p>
                Mọi câu hỏi liên quan đến Điều khoản sử dụng, vui lòng liên hệ
                Masflo theo thông tin sau:
              </p>
              <p>
                Email: info@masflo.com
                <br />
                Điện thoại: 0903642358
              </p>
            </>
          ) : (
            <>
              <p>
                For questions regarding these Terms of Use, please contact
                Masflo:
              </p>
              <p>
                Email: info@masflo.com
                <br />
                Phone: +33 175 379 736
              </p>
            </>
          )}
        </section>
      </main>
    </>
  );
}
