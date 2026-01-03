import LegalBanner from "@/components/LegalBanner/LegalBanner";

export default function TermsOfUsePage() {
  return (
    <>
      <LegalBanner
        title="Terms of Use"
        subtitle="These Terms of Use govern access to and use of the Masflo website and services. By accessing this site, you agree to be bound by these terms."
      />

      <main className="legalContent">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, you acknowledge that you have
            read, understood, and agree to be bound by these Terms of Use and
            all applicable laws and regulations. If you do not agree, you must
            not use this website.
          </p>
        </section>

        <section>
          <h2>2. Website Purpose</h2>
          <p>
            This website is intended to provide general information regarding
            Masflo products, solutions, and technical services. Content is
            provided for informational and professional purposes only and does
            not constitute binding technical or commercial commitments.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text,
            images, graphics, logos, technical documents, and layout, is the
            property of Masflo or its licensors and is protected by
            international intellectual property laws.
          </p>
        </section>

        <section>
          <h2>4. Permitted Use</h2>
          <p>
            Users may view, download, and print content for personal or internal
            business use only. Any reproduction, distribution, modification,
            reverse engineering, or commercial exploitation without prior
            written consent from Masflo is strictly prohibited.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            Masflo shall not be liable for any direct, indirect, incidental,
            consequential, or special damages arising out of or in connection
            with the use or inability to use this website, including loss of
            data, business interruption, or loss of profits.
          </p>
        </section>

        <section>
          <h2>6. Accuracy of Information</h2>
          <p>
            While Masflo makes reasonable efforts to ensure the accuracy of the
            information provided, all content is supplied &quot;as is&quot;
            without warranty of any kind. Technical specifications and product
            availability may change without prior notice.
          </p>
        </section>

        <section>
          <h2>7. External Links</h2>
          <p>
            This website may contain links to third-party websites. Masflo has
            no control over such websites and assumes no responsibility for
            their content, privacy practices, or availability.
          </p>
        </section>

        <section>
          <h2>8. User Conduct</h2>
          <p>
            Users agree not to misuse the website, introduce malicious code,
            attempt unauthorized access, or engage in any activity that could
            damage, disable, or impair the website or Masflo’s systems.
          </p>
        </section>

        <section>
          <h2>9. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance
            with the laws of France. Any disputes arising in connection with
            these terms shall be subject to the exclusive jurisdiction of the
            courts of Paris, France.
          </p>
        </section>

        <section>
          <h2>10. Modifications to Terms</h2>
          <p>
            Masflo reserves the right to modify these Terms of Use at any time.
            Updated terms will be effective upon publication on this website.
            Continued use of the website constitutes acceptance of the revised
            terms.
          </p>
        </section>

        <section>
          <h2>11. Contact Information</h2>
          <p>
            For questions regarding these Terms of Use, please contact:
            info@masflo.com.
          </p>
        </section>
      </main>
    </>
  );
}
