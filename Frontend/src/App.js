import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Effectif from "./pages/Effectif";
import Boutique from "./pages/Boutique";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/effectif" element={<Effectif />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
