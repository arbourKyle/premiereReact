import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//dashboard imports
// import Dashboard from "./component/dashboard";
// import Login from "./component/Login";

//navbar imports
// import Navbar from "./component/navbar/Navbar";
// import HomePage from "./component/Homepage";


//footer imports
// import Footer from "./component/footer/Footer";
// import Contact from "./component/footer/Contact";
// import Faq from "./component/footer/Faq";


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>




        <Dashboard />
     

        <Footer />
      </Router>
    </div>
  );
}

export default App;
