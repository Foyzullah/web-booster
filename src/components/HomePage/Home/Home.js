import React from "react";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Footer from "../../Shared/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";
import TeamMembers from "../TeamMembers/TeamMembers";
import GetInTouch from "../GetInTouch/GetInTouch";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Projects />
      <TeamMembers />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
