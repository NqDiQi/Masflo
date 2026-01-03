import LegalBanner from "@/components/LegalBanner/LegalBanner";

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalBanner
        title="Privacy Policy"
        subtitle="Masflo complies with the EU General Data Protection Regulation (GDPR) and is committed to protecting personal data with transparency and integrity."
      />

      <main className="legalContent">
        <section>
          <h2>1. Data Controller</h2>
          <p>
            Masflo – International Pumping System, located at 133 Av. Jean
            Jaurès, 75019 Paris, France, acts as the Data Controller for all
            personal data processed through this website.
          </p>
        </section>

        <section>
          <h2>2. Legal Basis for Processing</h2>
          <p>
            Personal data is processed based on one or more of the following
            legal grounds: user consent, contractual necessity, compliance with
            legal obligations, or Masflo’s legitimate business interests.
          </p>
        </section>

        <section>
          <h2>3. Categories of Data Collected</h2>
          <p>
            We may collect identification data, contact information,
            professional details, technical inquiries, IP addresses, and
            communication records submitted voluntarily by users.
          </p>
        </section>

        <section>
          <h2>4. Purpose of Processing</h2>
          <p>
            Data is collected to respond to inquiries, provide quotations,
            deliver technical support, manage contractual relationships, and
            improve Masflo’s products and services.
          </p>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            Personal data is retained only for the duration necessary to fulfill
            its purpose or meet legal and regulatory requirements. Data no
            longer required is securely deleted or anonymized.
          </p>
        </section>

        <section>
          <h2>6. GDPR Rights of Data Subjects</h2>
          <p>
            Under GDPR, you have the right to access, rectify, erase, restrict,
            or object to the processing of your personal data, as well as the
            right to data portability.
          </p>
        </section>

        <section>
          <h2>7. Cookies and Tracking</h2>
          <p>
            This website may use essential cookies to ensure proper operation.
            No non-essential tracking or marketing cookies are used without
            explicit user consent.
          </p>
        </section>

        <section>
          <h2>8. Contact and Complaints</h2>
          <p>
            For data-related inquiries or requests, please contact:
            info@masflo.com. You also have the right to lodge a complaint with
            your local data protection authority.
          </p>
        </section>
      </main>
    </>
  );
}
