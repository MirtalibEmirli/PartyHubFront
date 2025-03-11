import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ backgroundColor: "#030813" }}>
      <Navbar />
      
      {/* forscrooll */}
      <section className="h-[1000px]"></section>
      <Footer/>
    </div>
  );
};

export default App;
