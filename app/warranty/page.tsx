import PageBanner from "@/components/PageBanner";
import SectionBlock from "@/components/SectionBlock";

export default function WarrantyPage() {
  return (
    <>
      <PageBanner
        title="Warranty"
        subtitle="Quality assurance and long-term reliability you can trust."
        image="/applications/warranty0.jpg"
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <SectionBlock
          index="I"
          title="Warranty Coverage"
          image="/applications/warranty1.jpg"
          content={[
            "Comprehensive warranty covering manufacturing defects.",
            "Clear terms and transparent policies.",
          ]}
        />

        <SectionBlock
          index="II"
          title="Quality Control"
          image="/applications/warranty2.jpg"
          reverse
          content={[
            "Each product tested under strict quality standards.",
            "Performance and durability verification.",
          ]}
        />

        <SectionBlock
          index="III"
          title="Claim Process"
          image="/applications/warranty3.jpg"
          content={[
            "Simple and efficient warranty claim procedure.",
            "Dedicated support team for fast resolution.",
          ]}
        />

        <SectionBlock
          index="IV"
          title="Long-Term Reliability"
          image="/applications/warranty4.jpg"
          reverse
          content={[
            "Designed for long service life in demanding environments.",
            "Peace of mind for every installation.",
          ]}
        />
      </main>
    </>
  );
}
