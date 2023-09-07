import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import { motion } from "framer-motion"; // For animations

const About = () => {
  // Styling for the header text
  const headerStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "3rem",
    color: "#FF5733", 
    top: "0.2em",
    left: "0.3em",

  };

  // Styling for the mission statement paragraphs
  const missionStyle = {
    fontSize: "1.5rem",
    lineHeight: "1.5",
    color: "#555",
  };

  // Animation variants for the header
  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Animation variants for the mission statement
  const missionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar-expand-lg bg-success">
          <ul className="d-flex justify-content-between list-unstyled">
            <li>
              {/* Website Logo and Link */}
              <Link to={'/'} className="text-decoration-none text-white" style={headerStyle}>
                Foodie
              </Link>
            </li>
            <li>
              {/* Navigation Links */}
              <div className="mt-3 fs-5">
                <ul className="d-flex flex-row list-unstyled">
                  <li>
                    <Link to={'/about'} className=' text-decoration-none me-3 text-white'>About</Link>
                  </li>
                  <li>
                    <Link to={'/login'} className=' text-decoration-none me-3 text-white'>Login</Link>
                  </li>
                  <li>
                    <Link to={'/signup'} className=' text-decoration-none me-3 text-white'>Signup</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <motion.h1
          className='text-center text-capitalize my-5'
          style={headerStyle}
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          transition={{ duration: 0.5 }}
        >
          Welcome to Foodie
        </motion.h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <motion.p
                style={missionStyle}
                initial="hidden"
                animate="visible"
                variants={missionVariants}
                transition={{ duration: 0.7 }}
              >
                <strong>Our Mission:</strong> At Foodie, we are on a mission to inspire culinary adventures and elevate your cooking experience. Here are the key points of our mission:
                <br />
                - <strong>Passion for Food:</strong> Foodie is driven by a deep passion for food and cooking. We believe that cooking is not just a necessity but an art that brings joy to life.
                <br />
                - <strong>Explore Global Flavors:</strong> With Foodie, you can explore the rich tapestry of global cuisines. From Italian pasta to Indian curries and Mexican tacos, we bring the world's flavors to your kitchen.
                <br />
                - <strong>For All Skill Levels:</strong> Whether you're a seasoned chef or a kitchen novice, Foodie caters to all skill levels. Our recipes are designed to guide you step-by-step, making cooking accessible and fun.
                <br />
                - <strong>Community and Sharing:</strong> Foodie is more than just a recipe platform; it's a community of food lovers. Share your culinary creations, discover new recipes, and connect with fellow food enthusiasts.
                <br />
                <strong>Join us on this gastronomic journey and let's celebrate the art of cooking together!</strong>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default About;
