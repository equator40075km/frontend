import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Router from "./components/Router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import BtnUp from "./components/BtnUp/BtnUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
      {/* <BtnUp /> */}
    </BrowserRouter>
  );
}

export default App;
