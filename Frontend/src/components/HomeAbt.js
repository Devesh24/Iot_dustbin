import React from "react";

const HomeAbt = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="clr_cont"></div>
        <h3 className="home_abt_head">What We Do</h3>
        <div className="home_abt_body">
          <div className="service1 service">
            <div className="img_box">
              <img src="/assets/track.jpg" alt="" />
            </div>
            <div className="ser_cont_box">
              <h5 className="service_head">TRACK:</h5>
              <p className="service_body">Tracking Garbage to keep our planet clean!</p>
            </div>
          </div>
          <div className="service2 service">
            <div className="img_box">
              <img src="/assets/clean.jpg" alt="" />
            </div>
            <div className="ser_cont_box">
              <h5 className="service_head">CLEAN:</h5>
              <p className="service_body">Clearing the Clutter to keep the Universe green!</p>
            </div>
          </div>
          <div className="service3 service">
            <div className="img_box">
              <img src="/assets/dispose.jpg" alt="" />
            </div>
            <div className="ser_cont_box">
              <h5 className="service_head">DISPOSE:</h5>
              <p className="service_body">Disposing Garbage responsibly for a Bright Future!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbt;
