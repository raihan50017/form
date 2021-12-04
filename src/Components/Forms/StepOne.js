import React, { useState } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.name) ||
      validator.isEmpty(values.gurdian) ||
      validator.isEmpty(values.motherName) ||
      validator.isEmpty(values.birthdate) ||
      validator.isEmpty(values.presentVillage) ||
      validator.isEmpty(values.presentPostOffice) ||
      validator.isEmpty(values.presentUpazilla) ||
      validator.isEmpty(values.presentZilla) ||
      validator.isEmpty(values.parmanentVillage) ||
      validator.isEmpty(values.parmanentPostOffice) ||
      validator.isEmpty(values.parmanentUpazilla) ||
      validator.isEmpty(values.parmanentZilla) ||
      validator.isEmpty(values.isMarried) ||
      validator.isEmpty(values.nationality) ||
      validator.isEmpty(values.religion) ||
      validator.isEmpty(values.mobile) ||
      validator.isEmpty(values.email)
    ) {
      setError(true);
      nextStep();
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    নাম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="name"
                    defaultValue={values.firstName}
                    type="text"
                    placeholder="নাম"
                    onChange={handleFormData("name")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    পিতা/স্বামীর নাম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="gurdian"
                    defaultValue={values.firstName}
                    type="text"
                    placeholder="পিতা/স্বামীর নাম"
                    onChange={handleFormData("gurdian")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    মাতার নাম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="motherName"
                    defaultValue={values.motherName}
                    type="text"
                    placeholder=" মাতার নাম"
                    onChange={handleFormData("motherName")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    জন্ম তারিখ:
                    <br></br>
                    <small>(মাধ্যমিক পরিক্ষার সার্টিফিকেট অনুযায়ী)</small>
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="birthdate"
                    defaultValue={values.birthdate}
                    type="date"
                    onChange={handleFormData("birthdate")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Label style={{ textAlign: "center", display: "block" }}>
              {" "}
              বর্তমান ঠিকানা
            </Form.Label>
            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    i) গ্রাম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="presentVillage"
                    defaultValue={values.presentVillage}
                    type="text"
                    onChange={handleFormData("presentVillage")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    ii) ডাকঘর:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="presentPostOffice"
                    defaultValue={values.presentPostOffice}
                    type="text"
                    onChange={handleFormData("presentPostOffice")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    iii) উপজেলা:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="presentUpazilla"
                    defaultValue={values.presentUpazilla}
                    type="text"
                    onChange={handleFormData("presentUpazilla")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    iv) জেলা:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="presentZilla"
                    defaultValue={values.presentZilla}
                    type="text"
                    onChange={handleFormData("presentZilla")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Label style={{ textAlign: "center", display: "block" }}>
              {" "}
              স্থায়ী ঠিকানা
            </Form.Label>
            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    i) গ্রাম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="parmanentVillage"
                    defaultValue={values.parmanentVillage}
                    type="text"
                    onChange={handleFormData("parmanentVillage")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    ii) ডাকঘর:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="parmanentPostOffice"
                    defaultValue={values.parmanentPostOffice}
                    type="text"
                    onChange={handleFormData("parmanentPostOffice")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    iii) উপজেলা:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="parmanentUpazilla"
                    defaultValue={values.parmanentUpazilla}
                    type="text"
                    onChange={handleFormData("parmanentUpazilla")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    iv) জেলা:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="parmanentZilla"
                    defaultValue={values.parmanentZilla}
                    type="text"
                    onChange={handleFormData("parmanentZilla")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    মোবাইল/ফোন নম্বর:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="mobile"
                    defaultValue={values.mobile}
                    type="text"
                    onChange={handleFormData("mobile")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    ই-মেইল:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="email"
                    defaultValue={values.email}
                    type="text"
                    onChange={handleFormData("email")}
                  />
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    বিবাহিত:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Select
                    style={{ border: error ? "2px solid red" : "" }}
                    name="isMarried"
                    defaultValue={values.isMarried}
                    type="text"
                    onChange={handleFormData("isMarried")}
                  >
                    <option value="">--Select---</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Select>
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    জাতীয়তা:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Select
                    style={{ border: error ? "2px solid red" : "" }}
                    name="nationality"
                    defaultValue={values.nationality}
                    type="text"
                    onChange={handleFormData("nationality")}
                  >
                    <option value="">--Select---</option>
                    <option value="bangladeshi">Bangladeshi</option>
                    <option value="indian">Indian</option>
                  </Form.Select>
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    ধর্ম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Select
                    style={{ border: error ? "2px solid red" : "" }}
                    name="religion"
                    defaultValue={values.religion}
                    type="text"
                    onChange={handleFormData("religion")}
                  >
                    <option value="">--Select---</option>
                    <option value="islam">Islam</option>
                    <option value="hindu">Hindu</option>
                  </Form.Select>
                  {error ? (
                    <Form.Text style={{ color: "red" }}>
                      This is a required field
                    </Form.Text>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
