import React, { useState } from "react";
import { Card, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import Render from "./render";
import Header from "./Header";

import "../styles/inputs.css";
const Inputs = () => {
  const [renderOrNot, setRenderOrNot] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    resume: "Resume (tell about yourself)",
    name: "Your Name",
    age: "Your Age",
    city: "Mogi Das Cruzes - SP",
    email: "mailadress@mail.com",
    phone: "11-11111",
    address: "av ...",
    linkedin: "linkedin.com/youruser",
    degree: "",
    institution: "",
    graduationYear: "",
    jobTitle: "",
    jobDescription: "",
    company: "",
    experienceDuration: "",
    skills: "skill1, skill2, skill3  ",
    jobDescritpion: "your activies"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setIsSending(true); // Iniciar o envio
    setRenderOrNot(true); // Renderizar o componente
    localStorage.setItem("formData", JSON.stringify(formData));

    // Aqui você pode colocar o código para enviar os dados, se necessário
    // Após o envio, você pode definir setIsSending(false) para indicar que o envio foi concluído
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <Row className="m-4">
          {" "}
          {renderOrNot ? (
            <Render {...formData} />
          ) : (
            <Row className="g-1">
              <Col className="left-col" xl={12} md={12}>
                <Form onSubmit={handleSubmit}>
                  <Card className="left-card">
                    <Card.Title className="p-3">
                      Input your info Here
                    </Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          {/* Nome, Idade */}
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Name</InputGroup.Text>
                            <Form.Control
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Age</InputGroup.Text>
                            <Form.Control
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </Col>

                        <Col md={6}>
                          {/* Cidade, Email, Telefone, Endereço, LinkedIn */}
                          <InputGroup className="mb-3">
                            <InputGroup.Text>City</InputGroup.Text>
                            <Form.Control
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Email</InputGroup.Text>
                            <Form.Control
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Phone</InputGroup.Text>
                            <Form.Control
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Address</InputGroup.Text>
                            <Form.Control
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>LinkedIn</InputGroup.Text>
                            <Form.Control
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          {/* Grau, Instituição, Ano de Graduação */}
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Degree</InputGroup.Text>
                            <Form.Control
                              name="degree"
                              value={formData.degree}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Institution</InputGroup.Text>
                            <Form.Control
                              name="institution"
                              value={formData.institution}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Graduation Year</InputGroup.Text>
                            <Form.Control
                              name="graduationYear"
                              value={formData.graduationYear}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </Col>

                        <Col md={6}>
                          {/* Cargo, Empresa, Duração da Experiência */}
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Job Title</InputGroup.Text>
                            <Form.Control
                              name="jobTitle"
                              value={formData.jobTitle}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Company</InputGroup.Text>
                            <Form.Control
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Duration</InputGroup.Text>
                            <Form.Control
                              name="experienceDuration"
                              value={formData.experienceDuration}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>
                              Job Description (responsibilities)
                            </InputGroup.Text>
                            <Form.Control
                              as="textarea"
                              name="jobDescritpion"
                              value={formData.jobDescritpion}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Skills</InputGroup.Text>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="skills"
                              value={formData.skills}
                              onChange={handleChange}
                            />
                          </InputGroup>

                          <InputGroup className="mb-3">
                            <InputGroup.Text>Resume</InputGroup.Text>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="resume"
                              value={formData.resume}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer>
                      <Button type="submit">Submit</Button>
                    </Card.Footer>
                  </Card>
                </Form>
              </Col>
            </Row>
          )}
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Inputs;
