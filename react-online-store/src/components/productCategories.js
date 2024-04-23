import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function ProductCategories({ productByCategory }) {

  const [openNavColor, setOpenNavColor] = useState(false);
  const [catList, setCatlist] = useState([]);
  const allCategories = ["All", ...catList];
  const [currentEle, setCurrentEle] = useState("All");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((result) => {
        setCatlist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleItem = (element) => {
    setCurrentEle(element);
    productByCategory(element);
  };

  return (
    <>
      <section id="category">
        <br></br>
        <br></br>
      </section>
      <MDBContainer>
        <MDBNavbar expand="lg" dark style={{ backgroundColor: "#607D8B" }}>
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">Categories: </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenNavColor(!openNavColor)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse open={openNavColor} navbar>
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link"
                      role="button"
                    >
                      {currentEle}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {allCategories.map((element, idx) => {
                        return (
                          <MDBDropdownItem
                            link
                            key={idx}
                            onClick={() => {
                              handleItem(element);
                            }}
                            href="#category"
                          >
                            {element}
                          </MDBDropdownItem>
                        );
                      })}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </>
  );
}
