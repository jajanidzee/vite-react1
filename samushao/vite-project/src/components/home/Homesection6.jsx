import React from 'react'

function Homesection6() {
  return (<>
   <div style={{ display: "flex", justifyContent: "space-between",margin:"0 50px 0 50px" }}>
      <p className="Entreesp" style={{ fontSize: "20px", fontWeight: "bold" }}>
        Sharing
      </p>
    
      <div className="entressdiv">
  
        <div
          className="entresschamonatvalidiv3"
          style={{
            display: "flex",
            alignItems: "start",
            gap: "100px",
            marginBottom: "30px",
          }}
        >
          <p className="entresschamonatvalip2">
           Warm house-baked sourdough with whipped truffle <br /> butter & Maldon sea salt
          </p>
          <p className="fasip2">$18</p>
        </div>
        <div
          className="entresschamonatvalidiv4"
          style={{ display: "flex", alignItems: "start", gap: "74px",marginBottom:"100px" }}
        >
          <p className="entresschamonatvalip2">
     Hummus, whipped feta, and roasted red pepper dip with <br /> grilled pita & crostini
          </p>
          <p className="fasip2">$18</p>
        </div>
        <p className="entresschamonatvalip5">
                    <div
          className="entresschamonatvalidiv5"
          style={{ display: "flex", alignItems: "start", gap: "61px",marginBottom:"30px" }}
        >
          <p className="entresschamonatvalip2">
Creamy burrata, basil oil, balsamic glaze, cherry tomatoes, <br /> & toasted sourdough
          </p>
          <p className="fasip2">$18</p>
        </div>
        </p>
                 <div
          className="entresschamonatvalidiv6"
          style={{ display: "flex", alignItems: "start", gap: "61px",marginBottom:"120px" }}
        >
          <p className="entresschamonatvalip2">
Baby arugula, mission figs, goat cheese, Marcona almonds
          </p>
          <p className="fasip2">$18</p>
        </div>
      </div>

    </div>
          <hr style={{ backgroundColor: "#0801011c", width: " 100%" }} />
          </>
  )
}

export default Homesection6