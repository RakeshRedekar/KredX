import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubmitCompo.css";
function SubmitCompo() {
  const navigate = useNavigate();
  return (
    <div className="submitMain">
      <div className="submitImage">
        <img src="submitImage.png" alt="submit" />
      </div>
      <div className="submitInput">
        <input
          className="form-control"
          type="text"
          placeholder="Name of the Industry"
        ></input>
        <input
          className="form-control"
          type="text"
          placeholder="Name of the Individual"
        ></input>
        <input className="form-control" type="text" placeholder="Email"></input>
        <input
          className="form-control"
          type="text"
          placeholder="Phone number"
        ></input>
      </div>
      <div className="submitBtnDiv">
        <button
          type="button"
          onClick={() => navigate("/")}
          class="btn btn-light"
        >
          &lt; Previous
        </button>
        <button type="button" class="btn btn-dark">
          SUBMIT{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SubmitCompo;
