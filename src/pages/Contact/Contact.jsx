import ContactHero from "../../components/contact/ContactHero";
import ContactFormSection from "../../components/contact/ContactFormSection";
import ContactLocation from "../../components/contact/ContactLocation";
import ContactFeatures from "../../components/contact/ContactFeatures";
import ContactFAQ from "../../components/contact/ContactFAQ";
import ContactFooterBanner from "../../components/contact/ContactFooterBanner";

function Contact() {
  return (
    <div className="container">
      <ContactHero />
      <ContactFormSection />
      <ContactLocation />
      <ContactFeatures />
      <ContactFAQ />
      <ContactFooterBanner />
    </div>
  );
}

export default Contact;
