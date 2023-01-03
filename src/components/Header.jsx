import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar className="brand">
          <a href="/">My cart</a>
        </Navbar>
        <Form.Control
          style={{ width: "30rem" }}
          className={" m-auto"}
          placeholder="Search a Product..."
        />
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <FaShoppingCart fontSize={25}/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <span className="p-3">Empty  bit  hknow</span>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;
