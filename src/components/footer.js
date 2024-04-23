import React from "react";
import { MDBContainer} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <footer
      className="text-center text-white mt-4"
      style={{ backgroundColor: "#607D8B" }}
    >
      <MDBContainer>
        <section className="mb-3">
          <a
            className="btn-link btn-floating btn-lg text-white"
            href="#!"
            role="  MDBBtn"
            ripple="dark"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn-link btn-floating btn-lg text-white"
            href="#!"
            role="  MDBBtn"
            ripple="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn-link btn-floating btn-lg text-white"
            href="#!"
            role="  MDBBtn"
            ripple="dark"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            className="btn-link btn-floating btn-lg text-white"
            href="#!"
            role="  MDBBtn"
            ripple="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn-link btn-floating btn-lg text-white"
            href="#!"
            role="  MDBBtn"
            ripple="dark"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            className="btn-link btn-floating btn-lg text-white"
            href="#!"
            role="  MDBBtn"
            ripple="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "#E0E0E0" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="#">
          react-online-store.com
        </a>
      </div>
    </footer>
  );
}
