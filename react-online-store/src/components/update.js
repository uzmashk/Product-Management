  import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBTextArea,
  MDBContainer,
} from "mdb-react-ui-kit";
import Loading from "./loading";
import Swal from "sweetalert2";
import Nav from "./nav";

export default function Update() {

  const { id } = useParams();
  const navigate = useNavigate();
  
  const [isLoding, setIsLoding] = useState(true);

  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("1");
  const [stock, setStock] = useState("1");
  const [discount, setDiscount] = useState("1");
  const [rating, setRating] = useState("1");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((result) => {
        setTitle(result.data.title);
        setBrand(result.data.brand);
        setCategory(result.data.category);
        setDescription(result.data.description);
        setPrice(result.data.price);
        setStock(result.data.stock);
        setDiscount(result.data.discountPercentage);
        setRating(result.data.rating);

        setIsLoding(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function checkValidation() {
    if (
      (title &&
      brand &&
      category &&
      description) === ""
    ) {
      return false;
    } else if (rating > 5) {
      return false;
    }
    return true;
}

  function updateData(data) {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        Swal.fire({
          text: "Product Detail updated successfully",
          icon: "success",
        });
        
        navigate('/view/'+id)
      })
      .catch((err) => console.log(err));
  }
  
  function handleSubmit(){
    if (!checkValidation()) {
      return;
    } else {
      const data = {
        title: title,
        brand: brand,
        category: category,
        price: Number(price),
        discountPercentage: Number(discount),
        rating: Number(rating),
        stock: Number(stock),
        description: description,
      };
      updateData(data)    
    }  
  }

  return (
    <>
    <Nav/>
    <section className="py-5 mt-5">
      <MDBContainer
        className="d-flex justify-content-center"
        style={{ maxWidth: "50vw" }}
      >
        {isLoding ? (
          <Loading />
        ) : (
          <div className="row gx-5">
            <h1 className="text-center">Update Product Detail</h1>

            <MDBValidation className="row g-3">
              <MDBValidationItem
                className="col-md-12"
                feedback="Please provide a valid title."
                invalid
              >
                <MDBInput
                  value={title}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  id="validTitle"
                  required
                  label="Title"   
                />
              </MDBValidationItem>

              <MDBValidationItem
                className="col-md-6 mt-5"
                feedback="Please provide a brand."
                invalid
              >
                <MDBInput
                  value={brand}
                  name="brand"
                  onChange={(e) => setBrand(e.target.value)}
                  id="validBrand"
                  required
                  label="Brand"
                />
              </MDBValidationItem>

              <MDBValidationItem
                className="col-md-6 mt-5"
                feedback="Please provide a category."
                invalid
              >
                <MDBInput
                  value={category}
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
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
                  value={price || '1'}
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
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
                  value={stock || '1'}
                  name="stock"
                  onChange={(e) => setStock(e.target.value)}
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
                  value={rating || '1'}
                  name="rating"
                  onChange={(e) => setRating(e.target.value)}
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
                  value={discount || '1'}
                  name="discount"
                  onChange={(e) => setDiscount(e.target.value)}
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
                  value={description}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  id="validDescription"
                  rows={5}
                  maxLength={200}
                  required
                  label="Description"
                />
              </MDBValidationItem>

              <div className="col-12 mt-5">
                <MDBBtn type="submit" onClick={handleSubmit}>
                  UPDATE
                </MDBBtn>
              </div>
            </MDBValidation>
          </div>
        )}
      </MDBContainer>
    </section>
    </>
  );
}
