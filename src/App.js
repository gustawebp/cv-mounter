import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inputs from "./components/inputs";
import Main from "./components/Main";
import Render from "./components/render";
import Home from "./components/Home";
import "./styles/main.css";

const App = () => {
  return (
    <div className="main-app-js">
      {" "}
      <Router>
        <nav>{/* ... Seus Links ... */}</nav>

        <Routes>
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/main" element={<Main />} />
          <Route path="/render" element={<Render />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};



export default App;
