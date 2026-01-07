"use client";

import LegalBanner from "@/components/LegalBanner/LegalBanner";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const isVI = language === "vi";

  return (
    <>
      <LegalBanner
        title={isVI ? "Chính sách bảo mật" : "Privacy Policy"}
        subtitle={
          isVI
            ? "MASFLO tuân thủ Quy định Bảo vệ Dữ liệu Chung của EU (GDPR) và cam kết bảo vệ dữ liệu cá nhân một cách minh bạch và an toàn."
            : "Masflo complies with the EU General Data Protection Regulation (GDPR) and is committed to protecting personal data with transparency and integrity."
        }
      />

      <main className="legalContent">
        <section>
          <h2>1. {isVI ? "Bên kiểm soát dữ liệu" : "Data Controller"}</h2>
          <p>
            {isVI
              ? "MASFLO – International Pumping System, có trụ sở tại 133 Av. Jean Jaurès, 75019 Paris, Pháp, là đơn vị chịu trách nhiệm kiểm soát và xử lý dữ liệu cá nhân trên website này."
              : "Masflo – International Pumping System, located at 133 Av. Jean Jaurès, 75019 Paris, France, acts as the Data Controller for all personal data processed through this website."}
          </p>
        </section>

        <section>
          <h2>
            2.{" "}
            {isVI
              ? "Cơ sở pháp lý xử lý dữ liệu"
              : "Legal Basis for Processing"}
          </h2>
          <p>
            {isVI
              ? "Dữ liệu cá nhân được xử lý dựa trên sự đồng ý của người dùng, nghĩa vụ hợp đồng, yêu cầu pháp lý hoặc lợi ích hợp pháp của MASFLO."
              : "Personal data is processed based on user consent, contractual necessity, compliance with legal obligations, or Masflo’s legitimate business interests."}
          </p>
        </section>

        <section>
          <h2>
            3.{" "}
            {isVI
              ? "Loại dữ liệu được thu thập"
              : "Categories of Data Collected"}
          </h2>
          <p>
            {isVI
              ? "Chúng tôi có thể thu thập thông tin nhận dạng, thông tin liên hệ, thông tin nghề nghiệp, nội dung yêu cầu kỹ thuật, địa chỉ IP và dữ liệu trao đổi do người dùng tự nguyện cung cấp."
              : "We may collect identification data, contact information, professional details, technical inquiries, IP addresses, and communication records submitted voluntarily by users."}
          </p>
        </section>

        <section>
          <h2>
            4. {isVI ? "Mục đích xử lý dữ liệu" : "Purpose of Processing"}
          </h2>
          <p>
            {isVI
              ? "Dữ liệu được sử dụng để phản hồi yêu cầu, cung cấp báo giá, hỗ trợ kỹ thuật, quản lý quan hệ hợp đồng và cải thiện sản phẩm, dịch vụ của MASFLO."
              : "Data is collected to respond to inquiries, provide quotations, deliver technical support, manage contractual relationships, and improve Masflo’s products and services."}
          </p>
        </section>

        <section>
          <h2>5. {isVI ? "Thời gian lưu trữ dữ liệu" : "Data Retention"}</h2>
          <p>
            {isVI
              ? "Dữ liệu cá nhân chỉ được lưu trữ trong thời gian cần thiết để đáp ứng mục đích xử lý hoặc yêu cầu pháp lý. Sau đó dữ liệu sẽ được xóa hoặc ẩn danh an toàn."
              : "Personal data is retained only for the duration necessary to fulfill its purpose or meet legal requirements. Data no longer required is securely deleted or anonymized."}
          </p>
        </section>

        <section>
          <h2>
            6.{" "}
            {isVI
              ? "Quyền của chủ thể dữ liệu (GDPR)"
              : "GDPR Rights of Data Subjects"}
          </h2>
          <p>
            {isVI
              ? "Theo GDPR, bạn có quyền truy cập, chỉnh sửa, xóa, hạn chế hoặc phản đối việc xử lý dữ liệu cá nhân, cũng như quyền chuyển dữ liệu."
              : "Under GDPR, you have the right to access, rectify, erase, restrict, or object to the processing of your personal data, as well as the right to data portability."}
          </p>
        </section>

        <section>
          <h2>7. {isVI ? "Cookie và theo dõi" : "Cookies and Tracking"}</h2>
          <p>
            {isVI
              ? "Website có thể sử dụng cookie thiết yếu để đảm bảo hoạt động ổn định. Không sử dụng cookie marketing hoặc theo dõi nâng cao khi chưa có sự đồng ý."
              : "This website may use essential cookies to ensure proper operation. No non-essential tracking or marketing cookies are used without explicit user consent."}
          </p>
        </section>

        <section>
          <h2>8. {isVI ? "Liên hệ và khiếu nại" : "Contact and Complaints"}</h2>
          <p>
            {isVI
              ? "Mọi thắc mắc liên quan đến dữ liệu cá nhân vui lòng liên hệ: info@masflo.com. Bạn cũng có quyền gửi khiếu nại tới cơ quan bảo vệ dữ liệu địa phương."
              : "For data-related inquiries or requests, please contact: info@masflo.com. You also have the right to lodge a complaint with your local data protection authority."}
          </p>
        </section>
      </main>
    </>
  );
}
