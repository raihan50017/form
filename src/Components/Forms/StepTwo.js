import React, { useState } from "react";
import { Form, Card, Button, Table, Row, Col } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (5 < 3) {
      setError(false);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Table responsive bordered>
              <thead>
                <tr style={{ verticalAlign: "top" }}>
                  <th style={{ fontSize: "12px" }}>স্কুল/কলেজ/বিশ্ববিদ্যালয়</th>
                  <th style={{ fontSize: "12px" }}>
                    বয়স অতিবাহিত সাল হতে __ সাল পর্যন্ত{" "}
                  </th>
                  <th style={{ fontSize: "12px" }}>পরীক্ষার নাম</th>
                  <th style={{ fontSize: "12px" }}>বিভাগ/শ্রেনী/গ্রেড</th>
                  <th style={{ fontSize: "12px" }}>সাল </th>
                  <th style={{ fontSize: "12px" }}>অধীত বিষয় </th>{" "}
                  <th style={{ fontSize: "12px" }}>সংযুক্তি </th>{" "}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      class="form-control"
                      name="educationInstitute1"
                      defaultValue={values.educationInstitute1}
                      type="text"
                      onChange={handleFormData("educationInstitute1")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="passedEducationYear1"
                      defaultValue={values.passedEducationYear1}
                      type="number"
                      onChange={handleFormData("passedEducationYear1")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationExamName1"
                      defaultValue={values.educationExamName1}
                      type="text"
                      onChange={handleFormData("educationExamName1")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationGrade1"
                      defaultValue={values.educationGrade1}
                      type="text"
                      onChange={handleFormData("educationGrade1")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationYear1"
                      defaultValue={values.educationYear1}
                      type="number"
                      onChange={handleFormData("educationYear1")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="learnedTopic1"
                      defaultValue={values.learnedTopic1}
                      type="text"
                      onChange={handleFormData("learnedTopic1")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationAttachment1"
                      defaultValue={values.educationAttachment1}
                      type="text"
                      onChange={handleFormData("educationAttachment1")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      class="form-control"
                      name="educationInstitute2"
                      defaultValue={values.educationInstitute2}
                      type="text"
                      onChange={handleFormData("educationInstitute2")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="passedEducationYear2"
                      defaultValue={values.passedEducationYear2}
                      type="number"
                      onChange={handleFormData("passedEducationYear2")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationExamName2"
                      defaultValue={values.educationExamName2}
                      type="text"
                      onChange={handleFormData("educationExamName2")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationGrade2"
                      defaultValue={values.educationGrade2}
                      type="text"
                      onChange={handleFormData("educationGrade2")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationYear2"
                      defaultValue={values.educationYear2}
                      type="number"
                      onChange={handleFormData("educationYear2")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="learnedTopic2"
                      defaultValue={values.learnedTopic2}
                      type="text"
                      onChange={handleFormData("learnedTopic2")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationAttachment2"
                      defaultValue={values.educationAttachment2}
                      type="text"
                      onChange={handleFormData("educationAttachment2")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      class="form-control"
                      name="educationInstitute3"
                      defaultValue={values.educationInstitute3}
                      type="text"
                      onChange={handleFormData("educationInstitute3")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="passedEducationYear3"
                      defaultValue={values.passedEducationYear3}
                      type="number"
                      onChange={handleFormData("passedEducationYear3")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationExamName3"
                      defaultValue={values.educationExamName3}
                      type="text"
                      onChange={handleFormData("educationExamName3")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationGrade3"
                      defaultValue={values.educationGrade3}
                      type="text"
                      onChange={handleFormData("educationGrade3")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationYear3"
                      defaultValue={values.educationYear3}
                      type="number"
                      onChange={handleFormData("educationYear3")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="learnedTopic3"
                      defaultValue={values.learnedTopic3}
                      type="text"
                      onChange={handleFormData("learnedTopic3")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                  <td>
                    <input
                      class="form-control"
                      name="educationAttachment3"
                      defaultValue={values.educationAttachment3}
                      type="text"
                      onChange={handleFormData("educationAttachment3")}
                      style={{ border: "none" }}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    কোনো বিশেষ প্রতিষ্ঠানে অধ্যয়ন ও বিশেষ বিষয়ে পাঠ গ্রহণ:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    as="textarea"
                    style={{ border: error ? "2px solid red" : "" }}
                    name="specialInstituteSubject"
                    defaultValue={values.specialInstituteSubject}
                    type="date"
                    onChange={handleFormData("specialInstituteSubject")}
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
                    দক্ষতা অনুসারে ভাষা বিবরণ:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    as="textarea"
                    style={{ border: error ? "2px solid red" : "" }}
                    name="languageExpert"
                    defaultValue={values.languageExpert}
                    type="date"
                    onChange={handleFormData("languageExpert")}
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
              প্রকাশিত প্রবন্ধ
            </Form.Label>
            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    i) প্রবন্ধের নাম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="articleName"
                    defaultValue={values.articleName}
                    type="text"
                    onChange={handleFormData("articleName")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    ii) প্রবন্ধ প্রকাশিত জার্নালের নাম:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="journalName"
                    defaultValue={values.journalName}
                    type="text"
                    onChange={handleFormData("journalName")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    iii) প্রবন্ধের কপির সংযুক্তি:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="journalCopy"
                    defaultValue={values.journalCopy}
                    type="file"
                    onChange={handleFormData("journalCopy")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Label style={{ textAlign: "center", display: "block" }}>
              {" "}
              শিক্ষাদানের অভিজ্ঞতা
            </Form.Label>
            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    i) সরকারী/আধাসরকারী/স্বায়ত্বশাসিত প্রতিষ্ঠান:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="teachingInstitute"
                    defaultValue={values.teachingInstitute}
                    type="text"
                    onChange={handleFormData("teachingInstitute")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    ii) মোট চাকুরিকাল:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="totalTenure"
                    defaultValue={values.totalTenure}
                    type="number"
                    onChange={handleFormData("totalTenure")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    iii) বর্তমান পদ ( চাকুরিকাল, বেতন স্কেল, প্রতিষ্ঠান):
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    style={{ border: error ? "2px solid red" : "" }}
                    name="currentPosition"
                    defaultValue={values.currentPosition}
                    type="text"
                    onChange={handleFormData("currentPosition")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    iv) সর্বমোট চাকুরিকাল:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    name="allTotalTenure"
                    defaultValue={values.allTotalTenure}
                    type="number"
                    onChange={handleFormData("allTotalTenure")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    v) যেসব ক্লাসে ও বিষয়ে অধ্যাপনা করা হয়েছে তার বিবরণ:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    name="taughtSubjectDescription"
                    defaultValue={values.taughtSubjectDescription}
                    type="text"
                    onChange={handleFormData("taughtSubjectDescription")}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label
                    style={{ textAlign: "justify", display: "block" }}
                  >
                    {" "}
                    কোনো বিশ্ববিদ্যালয়/শিক্ষা প্রতিষ্ঠান বা অন্য কোনো
                    প্রতিষ্ঠানে কোনো নির্ধারিত সময়ের জন্য চাকুরি করতে বাধ্য
                    কিনা?:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    name="forcedToWorkTime"
                    defaultValue={values.forcedToWorkTime}
                    type="text"
                    onChange={handleFormData("forcedToWorkTime")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    চাকুরি গ্রহণে ইস্পিত বেতন:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    name="steelSalary"
                    defaultValue={values.steelSalary}
                    type="file"
                    onChange={handleFormData("steelSalary")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Label style={{ textAlign: "center", display: "block" }}>
              {" "}
              আপনার পরিচিত কিন্তু জন্মগত বা বৈবাহিক সূত্রে আত্নীয় নন এমন দুজন
              ব্যক্তির নাম ও ঠিকানা (মোবাই/ফোন নম্বর সহ) যাদের কাছ থেকে আপনার
              যোগ্যতা সম্বন্ধে তথ্য পাওয়া যাবে:
            </Form.Label>
            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    i) ব্যক্তি:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    name="familierPerson1"
                    defaultValue={values.familierPerson1}
                    type="text"
                    onChange={handleFormData("familierPerson1")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row style={{ alignItems: "center" }}>
                <Col md={{ span: 4 }}>
                  <Form.Label style={{ textAlign: "left", display: "block" }}>
                    {" "}
                    ii) ব্যক্তি:
                  </Form.Label>
                </Col>
                <Col md={{ span: 8 }}>
                  <Form.Control
                    name="familierPerson2"
                    defaultValue={values.familierPerson2}
                    type="text"
                    onChange={handleFormData("familierPerson2")}
                  />
                </Col>
              </Row>
            </Form.Group>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
