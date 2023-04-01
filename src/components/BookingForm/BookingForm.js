import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

const BookingForm = function ({ open, onClose, data }) {
  const [personName, setPersonName] = useState("");
  const [seats, setSeats] = useState(0);

  const availableSeats = [
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
  ];

  const setPersonNameHandler = function (e) {
    setPersonName(e.target.value);
  };

  const handleSeats = (value) => {
    console.log(value);
    if (!value) return;
    setSeats(value);
  };

  const onSubmit = () => {
    const userData = {
      movieId: data?.id,
      personName,
      seats,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    onClose();
  };

  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={data?.name}
                placeholder="Movie name"
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="Number"
                value={data?.averageRuntime}
                placeholder="0"
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>premiered</Form.Label>
              <Form.Control type="text" value={data?.premiered} disabled />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Person Name</Form.Label>

              <Form.Control
                type="text"
                value={personName}
                onChange={setPersonNameHandler}
                placeholder="Enter your name"
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Number of seats</Form.Label>
              <Form.Select
                aria-label="number of seats"
                required
                onChange={(e) => handleSeats(e.target.value)}
              >
                <option>Select Seats</option>
                {availableSeats.map((seat) => (
                  <option value={seat.value}>{seat.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Book Ticket
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingForm;
