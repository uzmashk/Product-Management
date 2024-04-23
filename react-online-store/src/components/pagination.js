import React, { useState } from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

export default function Pagination(props) {
  const length = props.length;
  let totalPages = [];
  const itemPerPage = 12;
  let pages = 0;
  let [currentPage, setCurrentPage] = useState(1);

  pages = Math.ceil(length / itemPerPage);
  for (let i = 1; i <= pages; i++) {
    totalPages.push(i);
  }

  function displayItem(item) {
    let skip = (item - 1) * itemPerPage;
    setCurrentPage(item);
    props.handlePagination(skip);
  }

  function prevItem() {
    if (currentPage > 1) {
      displayItem(currentPage - 1);
    }
  }

  function nextItem() {
    if (currentPage < pages) {
      displayItem(currentPage + 1);
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <MDBPagination circle center className="mb-0">
        <MDBPaginationItem disabled={currentPage === 1}>
          <MDBPaginationLink
            href="#"
            onClick={() => {
              prevItem();
            }}
          >
            &laquo;
          </MDBPaginationLink>
        </MDBPaginationItem>
        {totalPages.map((item, idx) => {
          return (
            <MDBPaginationItem
              key={idx}
              active={item === currentPage}
              onClick={() => {
                displayItem(item);
              }}
            >
              <MDBPaginationLink href="#category">{item}</MDBPaginationLink>
            </MDBPaginationItem>
          );
        })}
        <MDBPaginationItem disabled={currentPage === pages}>
          <MDBPaginationLink
            href="#"
            onClick={() => {
              nextItem();
            }}
          >
            &raquo;
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}
