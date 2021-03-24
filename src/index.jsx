import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
//styles
import "./styles/main.css";
//components
import Navbar from "./components/Navbar";
import NextGeneration from "./components/NextGeneration";
import Features from "./components/Features";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Navbar />
      <NextGeneration />
      <Features />
      <Blog />
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
