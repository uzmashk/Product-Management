import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";

export default function Delete({ id }) {
  const [modal, setModal] = useState(false);
  const toggleOpen = () => setModal(!modal);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          text: "Product Deleted",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "Could not delete the product detail",
          icon: "error",
        });
      });

    toggleOpen();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <MDBBtn href="#" className="btn btn-danger shadow-0" onClick={toggleOpen}>
        {" "}
        <i className="me-1 fa fa-trash" />
        Delete
      </MDBBtn>
      <MDBModal open={modal} onClose={() => setModal(false)} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Confirm Delete</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                You are about to delete one track, this procedure is
                irreversible.
              </p>
              <p>Do you want to proceed?</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn outline color="dark" onClick={toggleOpen}>
                CLOSE
              </MDBBtn>
              <MDBBtn color="danger" onClick={handleDelete}>
                DELETE
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
