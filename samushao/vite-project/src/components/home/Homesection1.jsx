import React from "react";
import Buttons from "../Buttons";
import Ganrigi from "../Ganrigi";

function Homesection1() {
  return (
    <div style={{margin:"0 50px 0 50px" }}>
      <div className="homesection1div">
        <div className="homesection1divchild1">
          <p className="homesection1p">
            Cozy meets refined on Balmain's <br /> waterfront
          </p>
          <Buttons/>
        </div>
        <div className="homesection1divchild2">
          <hr style={{  backgroundColor: "black",
  width:" 600px",
  marginBottom: "30px"}} />

          <Ganrigi/>
        </div>
      </div>
<div className="divimg" style={{
  marginBottom:"70px"
}}></div>
    </div>
  );
}

export default Homesection1;
