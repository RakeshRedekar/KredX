import React from "react";
import "./Details.css";
function Details() {
  return (
    <div className="details">
      <h1 className="detailsH1">
        Why <span>KredX</span> For Invoice Discounting?
      </h1>
      <div class="card-group">
        <div class="detailsCard">
          <img class="card-img-top" src="logoFirst.png" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Quick Verification and Cash Flow</h4>
            <p class="card-text">
              Verify your business instantly on the KredX platform and get funds
              in 24-72 hours*.
            </p>
          </div>
        </div>
        <div class="detailsCard">
          <img class="card-img-top" src="logoSecond.png" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Risk-free Assets</h4>
            <p class="card-text">
              Get cash against your company's unpaid invoices. No need to pledge
              any assets.
            </p>
          </div>
        </div>
        <div class="detailsCard">
          <img class="card-img-top" src="logoThird.png" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Avoid New Debt</h4>
            <p class="card-text">
              Grow your business without impacting your balance sheet.
            </p>
          </div>
        </div>
        <div class="detailsCard">
          <img class="card-img-top" src="logoFour.png" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Real-time Updates</h4>
            <p class="card-text">
              Track your invoice status on the go through KredX self-serve
              module.
            </p>
          </div>
        </div>
        <div class="detailsCard">
          <img class="card-img-top" src="logoFive.png" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Paperless Process</h4>
            <p class="card-text">
              Upload your document and invoice easily on the KredX platform.
            </p>
          </div>
        </div>
        <div class="detailsCard">
          <img class="card-img-top" src="logoSix.png" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">End-to-end Management</h4>
            <p class="card-text">
              Smooth and transparent process from invoice listing to funds
              disbursal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
