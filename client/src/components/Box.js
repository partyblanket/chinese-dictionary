import React from "react";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";
import DropdownCollectionSaveButton from "./DropdownCollectionSaveButton";

function Box({ details, email }) {
  return (
    <Card>
      <Card.Body>
        {email && <DropdownCollectionSaveButton details={details} />}
        <Card.Title>{details.trad}</Card.Title>
        <Card.Text>{details.twpro}</Card.Text>
        <Card.Text>{details.en}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    email: state.email
  };
}

export default connect(mapStateToProps)(Box);
