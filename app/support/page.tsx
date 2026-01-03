import PageBanner from "@/components/PageBanner";
import SectionBlock from "@/components/SectionBlock";

export default function SupportPage() {
  return (
    <>
      <PageBanner
        title="Support"
        subtitle="Professional technical support throughout the product lifecycle."
        image="/applications/support0.jpg"
      />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <SectionBlock
          index="I"
          title="Technical Assistance"
          image="/applications/support1.jpg"
          content={[
            "Expert engineers ready to assist with installation and operation.",
            "Fast response and clear technical guidance.",
          ]}
        />

        <SectionBlock
          index="II"
          title="On-site Services"
          image="/applications/support2.jpg"
          reverse
          content={[
            "Inspection, commissioning and maintenance services.",
            "Ensuring optimal system performance.",
          ]}
        />

        <SectionBlock
          index="III"
          title="Spare Parts Availability"
          image="/applications/support3.jpg"
          content={[
            "Genuine spare parts to ensure reliability and longevity.",
            "Efficient logistics and fast delivery.",
          ]}
        />

        <SectionBlock
          index="IV"
          title="Remote Support"
          image="/applications/support4.png"
          reverse
          content={[
            "Remote diagnostics and troubleshooting.",
            "Minimizing downtime and service costs.",
          ]}
        />
      </main>
    </>
  );
}
