import React from "react";
import ShowCard from "./ShowCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ShowList = (props) => {
  const { shows, onShow } = props;

  return (
    <>
      <Container fluid>
        <Row sm={2} md={4} lg={5}>
          {shows.map(({ show }) => (
            <Col>
              <ShowCard key={show.id} {...show} onShow={onShow} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShowList;
