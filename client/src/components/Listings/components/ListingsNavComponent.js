import React from "react";
import { Navbar, Container, Brand, Text, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const ListingsNavComponent = () => {
  return (
    <Navbar >
      <Container className="justify-content-center">
        <Navbar.Brand href="ListingsPage">View Alll Listings</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

{
  /* <Link href="/listingsPage">All Listings</Link> */
}

export default ListingsNavComponent;
