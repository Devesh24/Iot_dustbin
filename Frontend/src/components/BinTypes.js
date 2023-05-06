import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import BinDetails from "./BinDetails";

const BinTypes = () => {
    const handleClick = (color) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return <BinDetails onClose={onClose} color={color} />;
          },
        });
      };
  return (
    <>
      <div className="bin_types_main">
        <div className="type_head_cont">
          <h3 className="bin_type_head">Types of Bins</h3>
          <p>Everything you need to know about the different types of Bins</p>
        </div>
        <div className="type_cont1 type_cont">
          <img src="/assets/red1.png" alt="" />
          <div className="type_body" onClick={() => handleClick("red")}>
            <p>RED BIN</p>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
        <div className="type_cont2 type_cont">
          <img src="/assets/blue1.png" alt="" />
          <div className="type_body" onClick={() => handleClick("blue")}>
            <p>BLUE BIN</p>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
        <div className="type_cont3 type_cont">
          <img src="/assets/green1.png" alt="" />
          <div className="type_body" onClick={() => handleClick("green")}>
            <p>GREEN BIN</p>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default BinTypes;
