import React, { useState } from "react";
import Render from "./render";
import Inputs from "./inputs";
import { Button, Card, Col, Row } from "react-bootstrap";

const Main = ({ isSend }) => {
  const [create, setCreate] = useState(false);
  const handleCreate = () => {
    setCreate(true);
  };
  return (
    <div className="main main-app p-3 p-lg-4">
      <Row className="g-3 justify-content-center">
        <Col xl={12}>
          {isSend ? <Render /> : ""}
          {create ? (
            <Inputs />
          ) : (
            <Card>
              <Card.Header>
                <Card.Title>Welcome, Create a CV 100% free</Card.Title>
              </Card.Header>
              <Button onClick={handleCreate}>Create a CV</Button>
            </Card>
          )}
        </Col>{" "}
      </Row>
    </div>
  );
};

export default Main;
