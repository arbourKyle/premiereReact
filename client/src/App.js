
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

import Footer from "./component/footer/Footer";
// import Faq from "./component/footer/FAQ";
import Login from "./component/Login";
import FAQ from "./component/footer/FAQ";
import Contact from "./component/footer/Contact";
function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
