import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Delete from "./delete";
import Nav from "./nav";
import Loading from "./loading";

export default function View() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setIsLoding(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((result) => {
        setProductDetail(result.data);
        setIsLoding(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <section className="py-5 mt-5">
        {isLoding ? (
          <Loading />
        ) : (
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={productDetail.thumbnail}
                  >
                    <img
                      height={500}
                      style={{ maxWidth: "100%", margin: "auto" }}
                      className="rounded-4 fit"
                      src={productDetail.thumbnail}
                    />
                  </a>
                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{productDetail.title}</h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <span className="ms-1">Rating:</span>
                      <span className="ms-1">{productDetail.rating}</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1" />
                      {productDetail.stock}
                    </span>
                    <span className="text-success ms-2">In stock</span>
                  </div>
                  <div className="mb-3">
                    <span className="h5">₹{productDetail.price}</span>
                  </div>
                  <p>{productDetail.description}</p>
                  <div className="row">
                    <dt className="col-3">Category:</dt>
                    <dd className="col-9">{productDetail.category}</dd>
                    <dt className="col-3">Brand</dt>
                    <dd className="col-9">{productDetail.brand}</dd>
                  </div>
                  <hr />
                  <a
                    href={`/update/${id}`}
                    className="btn btn-primary shadow-0"
                  >
                    <i className="me-1 fa fa-edit" /> Update
                  </a>
                  &nbsp;&nbsp;
                  <Delete id={id} />
                </div>
              </main>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
