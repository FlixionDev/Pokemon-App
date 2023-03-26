import React from 'react'
import image from "./0c4b61db17a53de6ba0f4ffa3b842c2b.gif"
import image2 from "./pokemon-logo.gif"
export default function Navbar() {
  return (
    <div>
        <img style={{textAlign:"left",height:"200px",position:"absolute"}} src={`${image}`}/>
        <img style={{textAlign:"left",height:"300px",width:"60%",marginLeft:"10%"}} src={`${image2}`}/>
    </div>
  )
}
