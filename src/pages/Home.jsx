import React from "react";
import logo from './img/barcode.svg';

export default function Home() {
  return (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
    <img src={logo} style={{margin:"100%",width: "30%", height: "30%"}}/>
  </div>

  
  );
  
}
