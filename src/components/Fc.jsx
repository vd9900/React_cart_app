import React from "react";
import { Button, Form } from "react-bootstrap";

const FC = () => {
  return (
    <div className="filter">
      <span className="title fs-3">Filter here</span>
      <span>
        <Form.Check inline label="A-z" name="group1" type="radio" />
      </span>
      <span>
        <Form.Check inline label="Z-a" name="group1" type="radio" />
      </span>
      <span>
        <Form.Check inline label="Instock" name="group1" type="checkbox" />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delvivery"
          name="group1"
          type="checkbox"
        />
      </span>
      {/* <span>
        <label style={{paddingRight:10}}>Rating:</label>
        <Rating rating={byrating} style={{cursor:pointer}}/>
        </span> */}
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default FC;
