import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Comment from "./Comment";
import FindWhat from "./FindWhat";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <div style={{ backgroundColor: "#030813" }}>
      <Navbar />
      <HeroSection/>
      <FindWhat/>
      <Comment />
      <Footer />
    </div>
  );
};

export default Homepage;
