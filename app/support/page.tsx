"use client";
import PageBanner from "@/components/PageBanner";
import SectionBlock from "@/components/SectionBlock";
import { useLanguage } from "@/context/LanguageContext";

export default function SupportPage() {
  const { language } = useLanguage();
  const vi = language === "vi";

  return (
    <>
      <PageBanner
        title={vi ? "Hỗ trợ kỹ thuật" : "Support"}
        subtitle={
          vi
            ? "Dịch vụ hỗ trợ kỹ thuật chuyên nghiệp trong suốt vòng đời sản phẩm."
            : "Professional technical support throughout the product lifecycle."
        }
        image="/applications/support0.jpg"
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <SectionBlock
          index="I"
          title={vi ? "Hỗ trợ kỹ thuật" : "Technical Assistance"}
          image="/applications/support1.jpg"
          content={
            vi
              ? [
                  "Đội ngũ kỹ sư sẵn sàng hỗ trợ lắp đặt và vận hành.",
                  "Phản hồi nhanh, hướng dẫn rõ ràng.",
                ]
              : [
                  "Expert engineers ready to assist with installation and operation.",
                  "Fast response and clear technical guidance.",
                ]
          }
        />

        <SectionBlock
          index="II"
          title={vi ? "Hỗ trợ tận nơi" : "On-site Services"}
          image="/applications/support2.jpg"
          reverse
          content={
            vi
              ? [
                  "Kiểm tra, nghiệm thu và bảo trì hệ thống.",
                  "Đảm bảo hiệu suất vận hành tối ưu.",
                ]
              : [
                  "Inspection, commissioning and maintenance services.",
                  "Ensuring optimal system performance.",
                ]
          }
        />

        <SectionBlock
          index="III"
          title={vi ? "Cung cấp phụ tùng" : "Spare Parts Availability"}
          image="/applications/support3.jpg"
          content={
            vi
              ? [
                  "Phụ tùng chính hãng đảm bảo độ tin cậy.",
                  "Giao hàng nhanh và hiệu quả.",
                ]
              : [
                  "Genuine spare parts to ensure reliability and longevity.",
                  "Efficient logistics and fast delivery.",
                ]
          }
        />

        <SectionBlock
          index="IV"
          title={vi ? "Hỗ trợ từ xa" : "Remote Support"}
          image="/applications/support4.png"
          reverse
          content={
            vi
              ? [
                  "Chẩn đoán và xử lý sự cố từ xa.",
                  "Giảm thời gian dừng hệ thống.",
                ]
              : [
                  "Remote diagnostics and troubleshooting.",
                  "Minimizing downtime and service costs.",
                ]
          }
        />
      </main>
    </>
  );
}
