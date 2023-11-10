import React from "react";


export function Intro({ text }) {

  const style = {
    maxWidth: "700px",
    color: "#666",
    fontFamily: 'Poppins',
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "justify",
    marginTop: "20px"
  }

  return (
    <p
      className="intro"
    >{text}</p>
  );
}
