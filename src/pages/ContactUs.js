import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = props => {
  return (
    <motion.div
      className="contact-us"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}>
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
