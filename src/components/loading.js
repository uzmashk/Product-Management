import React from "react";

export default function Loading() {
  return (
      <div className="d-flex justify-content-sm-center mt-5">
        <span>
          <h1>Loading</h1>
        </span>
        <div
          className="spinner-grow"
          style={{ width: "2rem", height: "2rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        &nbsp;
        <div
          className="spinner-grow"
          style={{ width: "2rem", height: "2rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        &nbsp;
        <div
          className="spinner-grow"
          style={{ width: "2rem", height: "2rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        &nbsp;
        <div
          className="spinner-grow"
          style={{ width: "2rem", height: "2rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        &nbsp;
        <div
          className="spinner-grow"
          style={{ width: "2rem", height: "2rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        &nbsp;
      </div>
  );
}
