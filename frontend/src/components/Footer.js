import React from "react";

const footerStyle = {
  backgroundColor: "#222", // Change the background color
  color: "#fff", // Change the text color
  padding: "20px 0", // Add padding
  textAlign: "center", // Center-align the text
};

const h1Style = {
  fontSize: "32px", // Change the font size for the heading
  fontWeight: "bold", // Make the text bold
  marginBottom: "10px", // Add some spacing below the heading
};

const pStyle = {
  fontSize: "18px", // Change the font size for the paragraph
  lineHeight: "1.6", // Adjust line height for better readability
  marginBottom: "20px", // Add some spacing below the paragraph
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 style={h1Style}>Foodie Delights</h1>
            <p style={pStyle}>
              Explore a world of culinary wonders with our handpicked recipes and cooking tips.
            </p>
          </div>
          <div className="col-md-6">
            <h2 style={h1Style}>Connect With Us</h2>
            <p style={pStyle}>
              Follow us on social media for the latest updates and delicious food inspiration.
            </p>
            <div>
              <a href="#" style={{ color: "#fff", marginRight: "20px" }}>
                Facebook
              </a>
              <a href="#" style={{ color: "#fff", marginRight: "20px" }}>
                Twitter
              </a>
              <a href="#" style={{ color: "#fff" }}>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: "#ccc", padding: "10px 0" }}>
        &copy; {new Date().getFullYear()} Foodie Delights. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
