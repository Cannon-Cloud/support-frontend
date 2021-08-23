import React from "react";

import { Form, Jumbotron, Button, Col, Row } from "react-bootstrap";

import "./add-ticket-form.css";

const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmDt,
  frmDataError,
}) => {
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Create New Ticket</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject:
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              name="subject"
              value={frmDt.subject}
              // minLength="3"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found On:
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />{" "}
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Issue Details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            alue={frmDt.details}
            onChange={handleOnChange}
            placeholder="Enter Issue Details"
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>
          Create New Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default AddTicketForm;
