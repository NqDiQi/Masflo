"use client";

import AboutSlider from "@/components/AboutSlider";
import SectionBlock from "@/components/SectionBlock";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();
  const isVI = language === "vi";

  return (
    <main className="about-page">
      <AboutSlider />

      <SectionBlock
        index="I"
        title={isVI ? "Tổng quan doanh nghiệp" : "Company Overview"}
        image="/applications/about1.jpg"
        content={
          isVI
            ? [
                "MASFLO là nhà sản xuất hệ thống bơm quốc tế với hơn 40 năm kinh nghiệm tích lũy.",
                "Chúng tôi cung cấp giải pháp bơm cho hạ tầng, công nghiệp và hệ thống kỹ thuật tòa nhà trên toàn cầu.",
                "Sự hiện diện lâu dài thể hiện năng lực kỹ thuật, sự ổn định vận hành và chất lượng sản phẩm nhất quán.",
              ]
            : [
                "MASFLO is an international pumping system manufacturer with over 40 years of cumulative industry experience.",
                "We deliver professional pumping solutions for infrastructure, industry, and building service systems worldwide.",
                "Our long-standing presence reflects operational stability and consistent product quality.",
              ]
        }
      />

      <SectionBlock
        index="II"
        title={isVI ? "Kỹ thuật & Sản xuất" : "Engineering & Manufacturing"}
        image="/applications/about2.jpg"
        reverse
        content={
          isVI
            ? [
                "MASFLO thiết kế và sản xuất các dòng bơm ly tâm, bơm chìm và hệ thống bơm kỹ thuật.",
                "Sản phẩm được phát triển theo tiêu chuẩn kỹ thuật và an toàn châu Âu.",
                "Thiết kế hướng đến độ bền cao, hiệu suất ổn định và vận hành dài hạn.",
              ]
            : [
                "MASFLO designs and manufactures centrifugal pumps, submersible pumps, and engineered pumping systems.",
                "All products comply with European technical and safety standards.",
                "Systems are engineered for durability, efficiency, and long-term operation.",
              ]
        }
      />

      <SectionBlock
        index="III"
        title={
          isVI
            ? "Được tin cậy bởi tổ chức & doanh nghiệp"
            : "Trusted by Institutions & Enterprises"
        }
        image="/applications/about3.jpg"
        content={
          isVI
            ? [
                "Giải pháp của MASFLO được tin dùng bởi các cơ quan nhà nước và doanh nghiệp quy mô lớn.",
                "Sản phẩm đã được triển khai trong các dự án hạ tầng, nhà máy công nghiệp và hệ thống đô thị.",
                "Quan hệ hợp tác lâu dài dựa trên độ tin cậy kỹ thuật và trách nhiệm chuyên môn.",
              ]
            : [
                "MASFLO solutions are trusted by public authorities and large enterprises.",
                "Our products are deployed in major infrastructure projects and industrial facilities.",
                "Long-term partnerships are built on reliability and professional accountability.",
              ]
        }
      />

      <SectionBlock
        index="IV"
        title={
          isVI ? "Cam kết & Giá trị dài hạn" : "Commitment & Long-Term Value"
        }
        image="/applications/about4.jpg"
        reverse
        content={
          isVI
            ? [
                "MASFLO cam kết cung cấp giải pháp bơm phù hợp với nhu cầu vận hành thực tế.",
                "Chúng tôi hỗ trợ kỹ thuật toàn diện từ tư vấn hệ thống đến hậu mãi.",
                "Giá trị dài hạn được tạo ra thông qua kỹ thuật vững chắc và hợp tác bền vững.",
              ]
            : [
                "MASFLO is committed to delivering pumping solutions aligned with real operational requirements.",
                "We provide comprehensive technical support from system consulting to after-sales service.",
                "Long-term value is created through engineering excellence and trusted collaboration.",
              ]
        }
      />
    </main>
  );
}
