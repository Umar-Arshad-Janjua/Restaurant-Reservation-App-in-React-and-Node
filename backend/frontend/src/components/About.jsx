import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";
import { data } from "../restApi.json"; // Import the restApi.json data

const About = () => {
  // Access the link for "OUR MENU" directly from restApi.json
  const menuLink = data[0].navbarLinks.find(link => link.title === "OUR MENU").link;

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            We believe that food is more than just sustenance—it's an experience. Our culinary team is passionate about crafting dishes that delight the senses and bring people together. From the freshest ingredients to the artful presentation, every meal is a celebration of flavor and creativity. Our journey began with a simple idea: to create a place where the love of food and community come together. Whether you're here for a casual lunch, a special dinner, or just a quick bite, we invite you to relax, savor, and enjoy every moment.
            </p>
            {/* Use react-scroll's Link component to scroll to the menu section */}
            <Link to={menuLink} spy={true} smooth={true} duration={500}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
