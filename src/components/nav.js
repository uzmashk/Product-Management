import React from "react";

export default function Nav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <a
            className="navbar-brand mt-2 mt-sm-0"
            href="https://mdbootstrap.com/"
          >
            <span>
              {" "}
              <h2>React.Store</h2>{" "}
            </span>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link " href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">
                Add Product
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
