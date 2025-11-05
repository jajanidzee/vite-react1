import React from "react";
import Ganrigi from "./Ganrigi";

function Footer() {
  return (
    <div
      className=""
      style={{ width: "1280px", height: "700px", backgroundColor: "red",padding:"50px 50px 20px 50px",display:"flex",alignItems:"start" }}
    >
      <div className="footerdiv1">
        <p className="footerp" style={{color:"#EBC1AE",fontSize:"20px",marginBottom:"60px"}}>
          A classic bistro influence, respect for what the changing seasons and
          our <br /> dedicated suppliers are offering, comforting dishes that work with
          wine.
        </p>
        <p className="footerp2" style={{color:"#EBC1AE",fontSize:"20px",marginBottom:"465px"}}> <u>Book on Resy</u> </p>
        <p className="rosegroupp" style={{color:"#EBC1AE",fontSize:"18px"}}>© Rose Restaurant Group</p>
      </div>
      <div className="footerdiv2" style={{color:"#EBC1AE",fontSize:"20px"}}><Ganrigi/></div>
    </div>
  );
}

export default Footer;
