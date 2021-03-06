import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../components/breadcrumb/Breadcrumb";
import TicketTable from "../components/tickets/TicketTable";

import tickets from "../assets/data/dummy-ticket.json";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Create New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-tickets">
          <TicketTable tickets={tickets}></TicketTable>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
