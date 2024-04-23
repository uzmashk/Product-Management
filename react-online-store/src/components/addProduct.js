import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBContainer,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import Nav from "./nav";

export default function AddProduct() {
  const [formValue, setFormValue] = useState({
    title: "",
    brand: "",
    category: "",
    price: "1",
    stock: "1",
    rating: "1",
    discount: "1",
    description: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  function checkValidation() {
      if (
        (formValue.title &&
          formValue.brand &&
          formValue.category &&
          formValue.description) === ""
      ) {
        return false;
      } else if (formValue.rating > 5) {
        return false;
      }
      return true;
  }

  function postData(data){
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          text: "Product Detail added successfully",
          icon: "success",
        });
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit() {
    if (!checkValidation()) {
      return;
    } else {
      const data = {
        title: formValue.title,
        description: formValue.description,
        price: Number(formValue.price),
        discountPercentage: Number(formValue.discount),
        rating: Number(formValue.rating),
        stock: Number(formValue.stock),
        brand: formValue.brand,
        category: formValue.category,
      };
      postData(data)    
    }  
  }

  return (
    <>
    <Nav />
      <MDBContainer
        className="d-flex justify-content-center py-5 mt-5"
        style={{ maxWidth: "50vw" }}
      >

        <div className="row gx-5">
          <h1 className="text-center">Add New Product Detail</h1>

          <MDBValidation className="row g-3">
            <MDBValidationItem
              className="col-md-4"
              feedback="Please provide a valid title."
              invalid
            >
              <MDBInput
                value={formValue.title}
                name="title"
                onChange={onChange}
                id="validTitle"
                required
                label="Title"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-4"
              feedback="Please provide a brand."
              invalid
            >
              <MDBInput
                value={formValue.brand}
                name="brand"
                onChange={onChange}
                id="validBrand"
                required
                label="Brand"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-4"
              feedback="Please provide a category."
              invalid
            >
              <MDBInput
                value={formValue.category}
                name="category"
                onChange={onChange}
                id="valideCategory"
                required
                label="Category"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-3 mt-5"
              feedback="Please provide a valid price."
              invalid
            >
              <MDBInput
                value={formValue.price || "1"}
                name="price"
                onChange={onChange}
                id="priceNumber"
                type="number"
                min="1"
                required
                label="Price"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-3 mt-5"
              feedback="Please provide a valid number."
              invalid
            >
              <MDBInput
                value={formValue.stock || "1"}
                name="stock"
                onChange={onChange}
                id="stockNumber"
                type="number"
                step="1"
                required
                label="Stock"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-3 mt-5"
              feedback="Please provide a number between 1-5."
              invalid
            >
              <MDBInput
                value={formValue.rating || "1"}
                name="rating"
                onChange={onChange}
                id="ratingNumber"
                type="number"
                min="0"
                max="5"
                step="0.01"
                required
                label="Rating"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-3 mt-5"
              feedback="Please provide a valid number."
              invalid
            >
              <MDBInput
                value={formValue.discount || "1"}
                name="discount"
                onChange={onChange}
                id="percentageNumber"
                type="number"
                required
                label="Discount"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-12 mt-5"
              feedback="Please provide a description."
              invalid
            >
              <MDBTextArea
                value={formValue.description}
                name="description"
                onChange={onChange}
                id="validDescription"
                rows={5}
                maxLength={200}
                required
                label="Description"
              />
            </MDBValidationItem>

            <div className="col-12 mt-5">
              <MDBBtn type="submit" onClick={handleSubmit}>
                ADD
              </MDBBtn>
            </div>
          </MDBValidation>
        </div>
      </MDBContainer>
      </>
  );
}
