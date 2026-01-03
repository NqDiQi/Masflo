import AboutSlider from "@/components/AboutSlider";
import SectionBlock from "@/components/SectionBlock";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* SLIDER / BANNER */}
      <AboutSlider />

      {/* I */}
      <SectionBlock
        index="I"
        title="Company Overview"
        image="/applications/about1.jpg"
        content={[
          "MASFLO is an international pumping system manufacturer with over 40 years of cumulative industry experience.",
          "We provide professional pumping solutions for infrastructure, industrial facilities, and building service systems worldwide.",
          "Our long-standing presence reflects operational stability, technical capability, and consistent product quality.",
        ]}
      />

      {/* II */}
      <SectionBlock
        index="II"
        title="Engineering & Manufacturing"
        image="/applications/about2.jpg"
        reverse
        content={[
          "MASFLO designs and manufactures centrifugal pumps, submersible pumps, and engineered pumping systems.",
          "All products are developed in compliance with European technical and safety standards.",
          "Our systems are engineered for durability, efficiency, and long-term performance under demanding conditions.",
        ]}
      />

      {/* III */}
      <SectionBlock
        index="III"
        title="Trusted by Institutions & Enterprises"
        image="/applications/about3.jpg"
        content={[
          "MASFLO solutions are trusted by public authorities, government-backed projects, and large enterprises.",
          "Our products have been deployed in major infrastructure works, industrial plants, and municipal systems.",
          "We maintain long-term partnerships based on performance reliability and professional accountability.",
        ]}
      />

      {/* IV */}
      <SectionBlock
        index="IV"
        title="Commitment & Long-Term Value"
        image="/applications/about4.jpg"
        reverse
        content={[
          "We are committed to delivering tailored pumping solutions that meet real operational requirements.",
          "MASFLO provides comprehensive technical support, system consultation, and after-sales service.",
          "Our goal is to create sustainable value through engineering excellence and trusted collaboration.",
        ]}
      />
    </main>
  );
}
