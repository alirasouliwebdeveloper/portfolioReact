import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./components/About";
import Articles from "./components/Articles";
import Projects from "./components/Projects";
import Footer from "./Footer";

const MyRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={About} />
        <Route exact path="/articles" Component={Articles} />
        <Route exact path="/projects" Component={Projects} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MyRoutes;
