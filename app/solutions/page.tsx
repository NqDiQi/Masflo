import PageBanner from "@/components/PageBanner";
import SectionBlock from "@/components/SectionBlock";

export default function SolutionsPage() {
  return (
    <>
      <PageBanner
        title="Solutions"
        subtitle="Engineered pumping solutions tailored for industrial and municipal applications."
        image="/applications/solution0.jpg"
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <SectionBlock
          index="I"
          title="Industrial Pumping Solutions"
          image="/applications/solution1.jpg"
          content={[
            "High-performance pumping systems designed for continuous industrial operation.",
            "Optimized for efficiency, durability and long service life.",
          ]}
        />

        <SectionBlock
          index="II"
          title="Building & Infrastructure"
          image="/applications/solution2.jpg"
          reverse
          content={[
            "Reliable water supply and pressure boosting for commercial buildings.",
            "Quiet operation and energy-saving designs.",
          ]}
        />

        <SectionBlock
          index="III"
          title="Water Management Systems"
          image="/applications/solution3.jpg"
          content={[
            "Smart solutions for water distribution, drainage and circulation.",
            "Designed to reduce operational costs and downtime.",
          ]}
        />

        <SectionBlock
          index="IV"
          title="Customized Engineering"
          image="/applications/solution4.jpg"
          reverse
          content={[
            "Tailor-made pumping solutions based on project requirements.",
            "Engineering support from design to commissioning.",
          ]}
        />
      </main>
    </>
  );
}
