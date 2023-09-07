import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import headimg from '../Images/headimg.jpg';
import headimg2 from '../Images/headimg2.jpg';
import headimg3 from '../Images/headimg3.jpg';
import Footer from "../components/Footer";

const Landingpage = () => {
  const containerStyle = {
    position: "relative",
    maxWidth: "100%",
  };

  const h1Style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "4rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    padding: "20px", 
  };
  

  const pStyle = {
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1.5rem",
  };

  const carouselImageStyle = {
    maxHeight: '500px',
    objectFit: 'cover',
  };

  const logoStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "2em",
    position: "relative",
    top: "0.2em",
    left: "0.3em",
  };

  return (
    <>
      <nav className="navbar-expand-lg bg-success p-1">
        <ul className="d-flex justify-content-between list-unstyled ">
          <li>
            <Link to={'/'} className="text-decoration-none text-white" style={logoStyle}>
              FOODIE
            </Link>
          </li>
          <li>
            <div className="mt-3 fs-5">
              <ul className="d-flex flex-row list-unstyled ">
                <li>
                  <Link to={'/about'} className="text-decoration-none me-3 text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={'/login'} className="text-decoration-none me-3 text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={'/signup'} className="text-decoration-none me-3 text-white">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div style={containerStyle}>
        <Carousel style={{ maxWidth: '100%', maxHeight: '500px' }}>
          <Carousel.Item>
          <img className="d-block w-100" src={headimg} alt="First slide" style={carouselImageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={headimg2} alt="Second slide" style={carouselImageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={headimg3} alt="Third slide" style={carouselImageStyle} />
          </Carousel.Item>
        </Carousel>
        <h1 style={h1Style}>Foodie</h1>
        <p style={pStyle}>Embark on a culinary adventure with a treasure trove of exquisite recipes!</p>
      </div>

      <h2 className="text-center pt-2">Popular recipes of India</h2>
      <p className="p-3 m-3 mt-2 fs-4">
        Welcome to our recipe paradise! Discover a delectable world of culinary delights on our recipe website. From
        mouthwatering main courses to delightful desserts, we've curated a diverse collection of tried-and-tested
        recipes for every occasion. Whether you're a seasoned chef or a cooking enthusiast, our easy-to-follow recipes
        will elevate your kitchen adventures. Get ready to tantalize your taste buds and impress your guests with our
        inspiring dishes. Join us on this gastronomic journey and unleash your inner chef!
      </p>
      <Footer />
    </>
  );
};

export default Landingpage;
            
