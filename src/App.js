import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./Components/Forms/StepOne";
import StepTwo from "./Components/Forms/StepTwo";
import Final from "./Components/Forms/Final";

function App() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    name: "",
    gurdian: "",
    motherName: "",
    birthdate: "",
    presentVillage: "",
    presentPostOffice: "",
    presentUpazilla: "",
    presentZilla: "",
    parmanentVillage: "",
    parmanentPostOffice: "",
    parmanentUpazilla: "",
    parmanentZilla: "",
    isMarried: "",
    nationality: "",
    religion: "",
    mobile: "",
    email: "",
    educationInstitute1: "",
    educationInstitute2: "",
    educationInstitute3: "",
    educationInstitute4: "",
    passedEducationYear1: "",
    passedEducationYear2: "",
    passedEducationYear3: "",
    passedEducationYear4: "",
    educationExamName1: "",
    educationExamName2: "",
    educationExamName3: "",
    educationExamName4: "",
    educationGrade1: "",
    educationGrade2: "",
    educationGrade3: "",
    educationGrade4: "",
    educationYear1: "",
    educationYear2: "",
    educationYear3: "",
    educationYear4: "",
    educationSubject1: "",
    educationSubject2: "",
    educationSubject3: "",
    educationSubject4: "",
    learnedTopic1: "",
    learnedTopic2: "",
    learnedTopic3: "",
    learnedTopic4: "",
    educationAttachment1: "",
    educationAttachment2: "",
    educationAttachment3: "",
    educationAttachment4: "",
    specialInstituteSubject: "",
    languageExpert: "",
    articleName: "",
    journalName: "",
    journalCopy: "",
    teachingExperience: "",
    teachingInstitute: "",
    totalTenure: "",
    currentPosition: "",
    allTotalTenure: "",
    taughtSubjectDescription: "",
    forcedToWorkTime: "",
    steelSalary: "",
    experienceWork: "",
    familierPerson1: "",
    familierPerson2: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <div>
            <div className="p-2" style={{ backgroundColor: "#623D63" }}>
              <div className="row align-items-center">
                <div className="col-md-3">
                  <div className="d-flex justify-content-center">
                    <img
                      style={{ height: "70px" }}
                      alt=""
                      src="https://jkkniu.edu.bd/wp-content/themes/jkkniu/images/jkkniu/logo3.png"
                    ></img>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex alignitems-center justify-content-center">
                    <div>
                      <h3
                        style={{ fontWeight: "700", fontSize: "26px" }}
                        className="text-center text-white"
                      >
                        জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়
                      </h3>
                      <p
                        style={{ fontSize: "14px", fontWeight: "500" }}
                        className="text-center text-white"
                      >
                        ত্রিশাল, ময়মনসিংহ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex justify-content-center">
                    <img
                      style={{ height: "70px" }}
                      alt=""
                      src="http://jkkniu.edu.bd/wp-content/uploads/mijib-year.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container style={{ marginTop: "-80px" }}>
            <Row>
              <Col md={{ span: 8, offset: 2 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <div>
            <div className="p-2" style={{ backgroundColor: "#623D63" }}>
              <div className="row align-items-center">
                <div className="col-md-3">
                  <div className="d-flex justify-content-center">
                    <img
                      style={{ height: "70px" }}
                      alt=""
                      src="https://jkkniu.edu.bd/wp-content/themes/jkkniu/images/jkkniu/logo3.png"
                    ></img>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex alignitems-center justify-content-center">
                    <div>
                      <h3
                        style={{ fontWeight: "700", fontSize: "26px" }}
                        className="text-center text-white"
                      >
                        জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়
                      </h3>
                      <p
                        style={{ fontSize: "14px", fontWeight: "500" }}
                        className="text-center text-white"
                      >
                        ত্রিশাল, ময়মনসিংহ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex justify-content-center">
                    <img
                      style={{ height: "70px" }}
                      alt=""
                      src="http://jkkniu.edu.bd/wp-content/uploads/mijib-year.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container style={{ marginTop: "-80px" }}>
            <Row>
              <Col md={{ span: 8, offset: 2 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="App">
          <Final values={formData} />
          {/* <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
               
              </Col>
            </Row>
          </Container> */}
        </div>
      );
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
}

export default App;
