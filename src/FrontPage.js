import React from "react";
import "./FrontPage.css";
import MainBody from "./MainBody";
import Navbar from "./Navbar";
function FrontPage() {
  return (
    <div className="frontPage">
      <Navbar />
      <MainBody />
    </div>
  );
}

export default FrontPage;
