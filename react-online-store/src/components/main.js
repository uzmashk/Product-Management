import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./pagination";
import Footer from "./footer";
import MyCarousel from "./mainCarousel";
import ProductCategories from "./productCategories";
import ProductList from "./productList";
import Nav from "./nav";

export default function Main() {
  const [apiData, setApiData] = useState([]);
  const [products, setProducts] = useState([]);
  let totalCount = 0;
  let [skip] = useState(0);
  let [limit] = useState(12);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((result) => {
        setApiData(result.data);
        setProducts(result.data.products);
      })
      .catch((err) => console.log(err));
  }

  totalCount = apiData.total;

  function handlePages(pageSkip) {
    axios
      .get(`https://dummyjson.com/products?limit=${limit}&skip=${pageSkip}`)
      .then((result) => {
        setApiData(result.data);
        setProducts(result.data.products);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  function productByCategory(element) {
    if (element != "All") {
      axios
        .get(`https://dummyjson.com/products/category/${element}`)
        .then((result) => {
          setApiData(result.data);
          setProducts(result.data.products);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      fetchData();
    }
  }

  return (
    <>
      <Nav />
      <MyCarousel />
      <ProductCategories productByCategory={productByCategory} />
      <ProductList products={products} />
      <Pagination length={totalCount} handlePagination={handlePages} />
      <Footer />
    </>
  );
}

