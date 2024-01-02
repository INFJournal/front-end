import React from "react";
import logo from './img/barcode.svg';

export default function Home() {
  return (
    <body style={{backgroundColor:"rgba(62, 134, 77,1)"}}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
    <img src={logo} style={{margin:"100%",width: "30%", height: "30%"}}/>
  </div>
  </body>

  
  );
  
}
