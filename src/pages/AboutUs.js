import React, { forwardRef } from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FAQSection from "../components/FAQSection";

const AboutUs = props => {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </>
  );
};

export default AboutUs;
