import React from "react";
import "./home.css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <div className="techteam">
        <div className="tech-left">
          <div className="heading">Ragam ‘24 Tech-Team Inductions</div>
          <div className="text">
            Embrace the challenges that lie ahead, as you become part of a
            community dedicated to pushing boundaries and shaping the fest.{" "}
          </div>
          <motion.div
            className="button"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            whileHover={{ backgroundColor: "rgb(67, 40, 189)",scale:1.2 }}
          >
            <div className="explore">Explore</div>
            <motion.div
              className="arrow"
              whileHover={{ rotate: 45 }}
            ></motion.div>
          </motion.div>
        </div>
        <div className="tech-right"></div>
      </div>
      <div className="learn-more">
        <div className="learn">Learn more</div>
        <div className="expandmore"></div>
      </div>
      <div className="about">
        <motion.div
          className="about-left"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        ></motion.div>
        <div className="about-right">
          <div className="aboutus">About us</div>
          <div className="about-text" id="text-1">
            The quick brown fox jumped over the lazy dog. Meanwhile, a gentle
            breeze rustled the leaves on the trees, creating a soothing melody.
            Birds chirped in the distance, adding to the natural symphony of the
            surroundings. As the sun began to set, casting warm hues across the
            horizon, the world seemed to embrace a sense of tranquility.
          </div>
          <div className="about-text" id="text-2">
            As the sun began to set, casting warm hues across the horizon, the
            world seemed to embrace a sense of tranquility. In this serene
            moment, one could appreciate the beauty of nature and the simplicity
            of life.
          </div>
        </div>
      </div>
      <div className="join-us">
        <div className="join-left">
          <div className="joinus">Join us</div>
          <div className="join-text">
            Embark on a journey with us and become part of a vibrant tech team,
            where innovation meets collaboration. Join us and contribute to
            something extraordinary!
          </div>
          <ol className="points">
            <li typeof="int">Invaluable experience</li>
            <li>Work with the latest technologies and frameworks</li>
            <li>Work with the latest technologies and frameworks</li>
            <li>Be part of the biggest cultural fest of South India</li>
          </ol>
        </div>
        <motion.div
          className="join-right"
          whileHover={{ backgroundColor: "pink" }}
          transition={{ ease: "easeOut", duration: 2 }}
          whileInView={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <motion.div
            className="logo"
            
            initial={{ scale: 0 }}
            whileInView={{ rotate: 360, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: -360 }}
            transition={{ ease: "easeOut", duration: 1 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
          ></motion.div>
          <div className="email">EMAIL</div>
          <div className="email-address">contactus@nitc.ac.in</div>
        </motion.div>
      </div>
    </div>
  );
}
