import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BookingForm from "../BookingForm";

const ShowDetail = ({ summary, image, ...rest }) => {
  const [showForm, setShowForm] = useState(false);

  const { name, averageRuntime, type, language, genres, url, premiered } = rest;

  const tableData = [
    {
      label: "Name",
      value: name,
    },
    {
      label: "Runtime",
      value: averageRuntime,
    },
    {
      label: "Type",
      value: type,
    },
    {
      label: "Language",
      value: language,
    },
    {
      label: "Genres",
      value: genres,
    },
    {
      label: "URl",
      value: url,
    },
  ];

  const openFormHandler = function (e) {
    console.log("hello");
    e.preventDefault();
    setShowForm(!showForm);
  };
  const onCloseHandler = function (e) {
    setShowForm(false);
  };

  const renderSummary = () => {
    return {
      __html:
        summary.length <= 100
          ? summary
          : summary.substring(0, 200).concat("..."),
    };
  };
  // [{key: "adad", value: ""}]
  return (
    <>
      <Container>
        <Row>
          <Row>
            <Col lg={5} md={5} sm={6}>
              <div className="white-box text-center">
                <img
                  src={image?.medium}
                  className="img-responsive"
                  alt="img not found"
                />
              </div>
              <h5 style={{ marginTop: "5px" }}>{tableData[0].value}</h5>
            </Col>
            <Col lg={7} md={7} sm={6} style={{ margin: "auto" }}>
              <h4 className="box-title mt-5">Summary</h4>

              <div dangerouslySetInnerHTML={renderSummary()}></div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h3 className="box-title mt-5">General Info</h3>
              <div className="table-responsive">
                <table className="table table-striped table-product">
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.label}>
                        <td width="390">{item.label}</td>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Row>
        <Row>
          <Button style={{ cursor: "pointer" }} onClick={openFormHandler}>
            Book
          </Button>
        </Row>
      </Container>
      {showForm && (
        <BookingForm data={rest} open={showForm} onClose={onCloseHandler} />
      )}
    </>
  );
};

export default ShowDetail;
