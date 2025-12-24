import AboutSlider from "@/components/AboutSlider";

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutSlider />

      <section className="about-content">
        <h2>About Us</h2>

        <p>
          With over <strong>40 years of cumulative experience</strong>, Masflo
          is a trusted provider of industrial pumping systems for
          infrastructure, industry, and building services worldwide.
        </p>

        <p>
          We design, manufacture, and supply high-quality pumping solutions in
          accordance with European standards, delivering reliability,
          performance, and long-term value for demanding applications.
        </p>

        <p>
          Guided by a customer-centric philosophy, Masflo partners with leading
          enterprises to provide tailored solutions, technical expertise, and
          dependable after-sales support.
        </p>
      </section>
    </main>
  );
}
