"use client";

import PageBanner from "@/components/PageBanner";
import SectionBlock from "@/components/SectionBlock";
import { useLanguage } from "@/context/LanguageContext";

export default function WarrantyPage() {
  const { language } = useLanguage();
  const vi = language === "vi";

  return (
    <>
      <PageBanner
        title={vi ? "Bảo hành" : "Warranty"}
        subtitle={
          vi
            ? "Cam kết chất lượng và độ tin cậy lâu dài."
            : "Quality assurance and long-term reliability you can trust."
        }
        image="/applications/warranty0.jpg"
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <SectionBlock
          index="I"
          title={vi ? "Phạm vi bảo hành" : "Warranty Coverage"}
          image="/applications/warranty1.jpg"
          content={
            vi
              ? [
                  "Bảo hành toàn diện cho các lỗi do nhà sản xuất.",
                  "Điều khoản rõ ràng và minh bạch.",
                ]
              : [
                  "Comprehensive warranty covering manufacturing defects.",
                  "Clear terms and transparent policies.",
                ]
          }
        />

        <SectionBlock
          index="II"
          title={vi ? "Kiểm soát chất lượng" : "Quality Control"}
          image="/applications/warranty2.jpg"
          reverse
          content={
            vi
              ? [
                  "Mỗi sản phẩm đều được kiểm tra theo tiêu chuẩn nghiêm ngặt.",
                  "Xác minh hiệu suất và độ bền.",
                ]
              : [
                  "Each product tested under strict quality standards.",
                  "Performance and durability verification.",
                ]
          }
        />

        <SectionBlock
          index="III"
          title={vi ? "Quy trình bảo hành" : "Claim Process"}
          image="/applications/warranty3.jpg"
          content={
            vi
              ? [
                  "Thủ tục bảo hành đơn giản và hiệu quả.",
                  "Đội ngũ hỗ trợ chuyên trách.",
                ]
              : [
                  "Simple and efficient warranty claim procedure.",
                  "Dedicated support team for fast resolution.",
                ]
          }
        />

        <SectionBlock
          index="IV"
          title={vi ? "Độ tin cậy lâu dài" : "Long-Term Reliability"}
          image="/applications/warranty4.jpg"
          reverse
          content={
            vi
              ? [
                  "Thiết kế cho môi trường vận hành khắc nghiệt.",
                  "An tâm trong suốt vòng đời sử dụng.",
                ]
              : [
                  "Designed for long service life in demanding environments.",
                  "Peace of mind for every installation.",
                ]
          }
        />
      </main>
    </>
  );
}
