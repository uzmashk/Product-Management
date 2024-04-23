import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function ProductList({ products }) {
  return (
    <MDBContainer className="my-5 text-center">
      <MDBRow>
        {products.map((item, idx) => {
          return (
            <MDBCol md="6" lg="3" className="mb-4" key={idx}>
              <MDBCard className="h-70">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={item.images[0]}
                    className="img-fluid rounded"
                    style={{ height: "250px" }}
                  />
                </MDBRipple>
                <MDBCardBody>
                  <a href="#!" className="text-reset">
                    <h6 className="card-title mb-3">{item.title}</h6>
                  </a>
                  <a href="#!" className="text-reset">
                    <p>{item.category}</p>
                  </a>
                  <h6 className="mb-3">₹{item.price}</h6>

                  <Link to={`/view/${item.id}`}>
                  <MDBBtn color="primary">View</MDBBtn>
                  </Link>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
