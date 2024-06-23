import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="contact-heading">Contact us</div>
        <div className="contact-card">
          <motion.div
            className="card"
            whileHover={{ backgroundColor: "pink" }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <motion.div
              className="logo logo-contact"
              id="logo-1"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              whileHover={{ scale: 1.2 }}
            ></motion.div>
            <div className="logo-name">BY PHONE</div>
            <div className="address-nitc">+91 9994058168</div>
          </motion.div>
          <motion.div className="card"  whileHover={{ backgroundColor: "pink" }}
            transition={{ ease: "easeOut", duration: 1 }}>
            <motion.div
              className="logo logo-contact"
              id="logo-2"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              whileHover={{ scale: 1.2}}
            ></motion.div>
            <div className="logo-name">FIND US</div>
            <div className="address-nitc">
              National Institute of Technology Calicut, Kerala 673601
            </div>
          </motion.div>
          <motion.div className="card" whileHover={{ backgroundColor: "pink" }}
            transition={{ ease: "easeOut", duration: 1 }}>
            <motion.div
              className="logo logo-contact"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              whileHover={{ scale: 1.2 }}
            ></motion.div>
            <div className="logo-name">BY EMAIL</div>
            <div className="address-nitc">contactus@nitc.ac.in</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
