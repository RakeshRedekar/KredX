import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./ContactUs";
import Details from "./Details";
import History from "./History";
import Lorem from "./Lorem";
import "./MainBody.css";
import SubmitCompo from "./SubmitCompo";
function MainBody() {
  return (
    <div className="mainBody">
      <div className="mainBodyImage">
        <img src="bg.png" alt="img" />
      </div>
      <div className="formDiv">
        <Routes>
          <Route path="/" element={<Lorem />} />
          <Route path="submit" element={<SubmitCompo />} />
        </Routes>
      </div>
      <div className="compoDiv">
        <Details />
        <History />
        <ContactUs />
        <img src="SAP.png" />
      </div>
    </div>
  );
}

export default MainBody;
