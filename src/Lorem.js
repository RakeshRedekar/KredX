import React from "react";
import "./Lorem.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
function Lorem() {
  const navigate = useNavigate();
  return (
    <div className="lorem">
      <h4 className="card-title">Lorem lpsum is simply dummy</h4>
      <p>text of printing and typesetting industry</p>
      <div className="loremIP">
        <Form.Select id="loremSelect">
          <option>Large select</option>
        </Form.Select>
        <div className="loremInput">
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
          ></input>
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
          ></input>
        </div>
      </div>
      <button onClick={()=>navigate("submit")} type="button" class="btn btn-outline-info">
        NEXT
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
  );
}

export default Lorem;
