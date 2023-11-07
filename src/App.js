import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Router from "./components/Router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
