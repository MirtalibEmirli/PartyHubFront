import React from "react";
import Homepage from "./components/homepage/Homepage.jsx";
import Details from "./components/details/Details.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/api/event/:id" element={<Details/>} />
      </Routes>

  );
};

export default App;
