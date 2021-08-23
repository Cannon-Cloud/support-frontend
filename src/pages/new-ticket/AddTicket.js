import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import AddTicketForm from "../../components/tickets/AddTicketForm";
import shortText from "../../utils/validatioin";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFrmDtError = {
  subject: false,
  issueDate: false,
  details: false,
};

const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmDtError);
  useEffect(() => {}, [frmData, frmDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmDtError);

    const isSubjectValid = await shortText(frmData.subject);

    !isSubjectValid &&
      setFrmDataError({
        ...initialFrmDtError,
        subject: !isSubjectValid,
      });

    console.log(frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Create Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDataError={frmDataError}
            frmDt={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
