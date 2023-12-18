import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import Typewriter from "../functions/TypeWritter";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import Header from "./Header";

import "../styles/home.css";
const Home = () => {
  const handleRedirect = () => {
    window.location.href = "/inputs";
  };
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <PiNewspaperClippingDuotone className="paper-main" />

        <Typewriter text="Hi! Welcome to the CV Creator!" />
        <button onClick={handleRedirect} className="create-button">
          CREATE
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
