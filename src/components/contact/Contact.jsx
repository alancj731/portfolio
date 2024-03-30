import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cw1unyo",
        "template_vfc96u5",
        formRef.current,
        "kPxVoo8QVBWDMGFA5"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div>
        <h1 className="title"> Contact Me </h1>
    <motion.div
      ref={ref}
      className="contactPage"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >

      <div className="messageContainer">
        <motion.div className="imageContainer" variants={variants}>
          <img src="contact-img.svg" alt="" />
        </motion.div>
        <div className="formContainer"  variants={variants}>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </div>
      </div>
      <motion.div className="contactContainer">
        <div className="contactInfo">
          <span className="key">MAIL:</span>
          <span className="value">ALANCHENJIAN@HOTMAIL.COM</span>
        </div>
        <div className="contactInfo">
          <span className="key">PHONE:</span>
          <span className="value">+1 431 668 2518</span>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Contact;
