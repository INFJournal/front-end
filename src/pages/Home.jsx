import React, { useEffect } from "react";
import logo from "../img/barcode.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
      <body style={{ backgroundColor: "rgba(62, 134, 77,1)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <img
            src={logo}
            style={{ margin: "70%", width: "30%", height: "30%" }}
          />
        </div>
      </body>
  );
}
