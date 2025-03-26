import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Comment from "./Comment";
import FindWhat from "./FindWhat";

const Homepage = () => {
  return (
    <div style={{ backgroundColor: "#030813" }}>
      <Navbar />
      <FindWhat/>
      {/* <Comment /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
