import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../styles/render.css";

import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { HiOfficeBuilding } from "react-icons/hi";

import { FaLinkedin } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const ResumeDisplay = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  return (
    <Container className="resume-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={4} className="resume-sidebar">
                  <Card.Title className="m-1">
                    <FaPhoneAlt /> Contact
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Phone: {formData.phone}</ListGroup.Item>
                    <ListGroup.Item>Email: {formData.email}</ListGroup.Item>
                    <ListGroup.Item>Address: {formData.address}</ListGroup.Item>
                  </ListGroup>

                  <Card.Title className="m-1">
                    <IoSchool /> Education
                  </Card.Title>
                  <ListGroup className="m-1" variant="flush">
                    <ListGroup.Item>
                      <div className="d-flex align-items-center">
                        <div>Institution: </div>
                        <span className="fw-medium ff-numerals ml-1">
                          {formData.institution}
                        </span>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <div className="d-flex align-items-center">
                        <div>Course: </div>
                        <span className="fw-medium ff-numerals ml-1">
                          {formData.degree}
                        </span>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div className="d-flex align-items-center">
                        <div>Year: </div>
                        <span className="fw-medium ff-numerals ml-1">
                          {formData.graduationYear}
                        </span>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Title className="m-1">
                    <IoShareSocial /> Social
                  </Card.Title>
                  <ListGroup className="m-1" variant="flush">
                    <ListGroup.Item>
                      <FaLinkedin />{" "}
                      <a
                        href={`https://${formData.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {formData.linkedin}
                      </a>
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Title className="m-1">
                    <FaUser />
                    Skills
                  </Card.Title>
                  <ListGroup className="m-1" variant="flush">
                    {formData.skills.split(",").map((skill) => (
                      <ListGroup.Item key={skill}>
                        {skill.toUpperCase()}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>

                <Col md={8} className="resume-main">
                  <div className="personal">
                    <h2>{formData.name}</h2>
                    <div className="d-block fw-medium text-dark ff-numerals mb-2">
                      <span className="text-secondary fs-sm">Age:</span>{" "}
                      {formData.age}
                    </div>
                    <hr className="label-separator" />
                  </div>

                  <div className="d-block fw-medium text-dark ff-numerals mb-2">
                    <span className="text-secondary fs-sm">Resume:</span>{" "}
                    {formData.resume}
                  </div>
                  <hr className="label-separator" />

                  <Card.Title>Experience</Card.Title>
                  <div className="job-experience">
                    <div className="d-block fw-medium text-dark ff-numerals mb-2">
                      <span className="text-secondary fs-sm">Role:</span>{" "}
                      {formData.jobTitle}
                    </div>

                    <div className="d-block fw-medium text-dark ff-numerals mb-2">
                      <span className="text-secondary fs-sm">
                        Company Info:
                      </span>{" "}
                      {formData.company}, {formData.experienceDuration}
                    </div>

                    <div className="d-block fw-medium text-dark ff-numerals mb-2">
                      <span className="text-secondary fs-sm">
                        Responsibilities
                      </span>{" "}
                      {formData.jobDescription}
                      {""}
                    </div>
                  </div>

                  {/* Repita a estrutura acima para mais experiências */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeDisplay;
