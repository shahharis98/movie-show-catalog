/* format */
import React from "react";
import Card from "react-bootstrap/Card";

function ShowCard({ id, name, image, summary = "", onShow }) {
  const renderSummary = () => {
    return {
      __html:
        summary.length <= 100
          ? summary
          : summary.substring(0, 100).concat("..."),
    };
  };
  return (
    <Card
      key={id}
      style={{ width: "100%", cursor: "pointer" }}
      bg="dark"
      text="light"
      onClick={() => {
        onShow(id);
      }}
    >
      <Card.Img variant="top" src={image?.medium} alt="img not found" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={renderSummary()}></Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ShowCard;
