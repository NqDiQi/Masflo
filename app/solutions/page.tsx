"use client";
import PageBanner from "@/components/PageBanner";
import SectionBlock from "@/components/SectionBlock";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionsPage() {
  const { language } = useLanguage();
  const vi = language === "vi";

  return (
    <>
      <PageBanner
        title={vi ? "Giải pháp" : "Solutions"}
        subtitle={
          vi
            ? "Các giải pháp bơm được thiết kế chuyên sâu cho công nghiệp và hạ tầng."
            : "Engineered pumping solutions tailored for industrial and municipal applications."
        }
        image="/applications/solution0.jpg"
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <SectionBlock
          index="I"
          title={
            vi ? "Giải pháp bơm công nghiệp" : "Industrial Pumping Solutions"
          }
          image="/applications/solution1.jpg"
          content={
            vi
              ? [
                  "Hệ thống bơm hiệu suất cao cho vận hành công nghiệp liên tục.",
                  "Tối ưu hiệu quả, độ bền và tuổi thọ dài.",
                ]
              : [
                  "High-performance pumping systems designed for continuous industrial operation.",
                  "Optimized for efficiency, durability and long service life.",
                ]
          }
        />

        <SectionBlock
          index="II"
          title={vi ? "Cơ sở hạ tầng" : "Building & Infrastructure"}
          image="/applications/solution2.jpg"
          reverse
          content={
            vi
              ? [
                  "Giải pháp cấp nước và tăng áp ổn định cho công trình.",
                  "Vận hành êm ái, tiết kiệm năng lượng.",
                ]
              : [
                  "Reliable water supply and pressure boosting for commercial buildings.",
                  "Quiet operation and energy-saving designs.",
                ]
          }
        />

        <SectionBlock
          index="III"
          title={vi ? "Hệ thống quản lý nước" : "Water Management Systems"}
          image="/applications/solution3.jpg"
          content={
            vi
              ? [
                  "Giải pháp thông minh cho phân phối và thoát nước.",
                  "Giảm chi phí vận hành và thời gian dừng hệ thống.",
                ]
              : [
                  "Smart solutions for water distribution, drainage and circulation.",
                  "Designed to reduce operational costs and downtime.",
                ]
          }
        />

        <SectionBlock
          index="IV"
          title={vi ? "Thiết kế theo yêu cầu" : "Customized Engineering"}
          image="/applications/solution4.jpg"
          reverse
          content={
            vi
              ? [
                  "Giải pháp bơm thiết kế riêng theo từng dự án.",
                  "Hỗ trợ kỹ thuật từ thiết kế đến vận hành.",
                ]
              : [
                  "Tailor-made pumping solutions based on project requirements.",
                  "Engineering support from design to commissioning.",
                ]
          }
        />
      </main>
    </>
  );
}
