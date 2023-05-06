import React from "react";
import Navbar from "./Navbar";
import HomeAbt from "./HomeAbt";
import BinTypes from "./BinTypes";
import Footer from "./Footer";

const Home = () => {
  

  return (
    <>
      <Navbar />
      <div className="home_img_cont">
        <a className="scroll_btn" href="#about">
          EXPLORE
        </a>
        <div className="home_title_cont">
          <div className="home_title">
            <span className="title1">WASTE</span>
            <span className="title2">WATCHERS</span>
            <p className="home_quote">TRACK | CLEAN | DISPOSE</p>
          </div>
        </div>
      </div>
      <HomeAbt />
      <BinTypes />
      <Footer />
    </>
  );
};

export default Home;
