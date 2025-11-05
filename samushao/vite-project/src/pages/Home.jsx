import React from 'react'
import Footer from '../components/Footer'
import Buttons from '../components/Buttons'
import Ganrigi from '../components/Ganrigi'
import TAvi from '../components/Tavi'
import Homesection3 from '../components/home/Homesection3'
import Homesection1 from '../components/home/Homesection1'
import Homesection2 from '../components/home/Homesection2'
import Homesection4 from '../components/home/Homesection4'
import Homesection5 from '../components/home/Homesection5'
import Homesetion6 from '../components/home/Homesection6'
import Homesection7 from '../components/home/Homesection7'
function Home() {
  return (
<>
<div  style={{
      width:"1280px",height:"3848px",
      backgroundColor:"#EBC1AE",margin:"auto",
    }}>
<TAvi/>
<Homesection1/>
<Homesection2/>
<Homesection3/>
<Homesection4/>
<Homesection5/>
<Homesetion6/>
<Homesection7/>
<Footer/>

</div>
</>
  )
}

export default Home