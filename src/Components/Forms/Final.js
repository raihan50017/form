import React from "react";
import { Card } from "react-bootstrap";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";

const Final = ({ values }) => {
  //destructuring the object from values
  const {
    name,
    gurdian,
    motherName,
    birthdate,
    presentVillage,
    presentPostOffice,
    presentUpazilla,
    presentZilla,
    parmanentVillage,
    parmanentPostOffice,
    parmanentUpazilla,
    parmanentZilla,
    isMarried,
    nationality,
    religion,
    mobile,
    email,
    educationInstitute1,
    educationInstitute2,
    educationInstitute3,
    passedEducationYear1,
    passedEducationYear2,
    passedEducationYear3,
    educationExamName1,
    educationExamName2,
    educationExamName3,
    educationGrade1,
    educationGrade2,
    educationGrade3,
    educationYear1,
    educationYear2,
    educationYear3,
    learnedTopic1,
    learnedTopic2,
    learnedTopic3,
    specialInstituteSubject,
    languageExpert,
    articleName,
    journalName,
    teachingExperience,
    teachingInstitute,
    totalTenure,
    currentPosition,
    allTotalTenure,
    taughtSubjectDescription,
    forcedToWorkTime,
    steelSalary,
    experienceWork,
    familierPerson1,
    familierPerson2,
  } = values;

  const downloadPdf = () => {
    const input = document.getElementById("divToPrint");
    // html2canvas(input).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF({
    //     pagesplit: true,
    //     orientation: "p",
    //     unit: "px",
    //     format: "a4",
    //     putOnlyUsedFonts: true,
    //   });
    //   pdf.addImage(imgData, "JPEG", 0, 0);
    //   // pdf.output('dataurlnewwindow');
    //   pdf.save("download.pdf");
    // });
    var opt = {
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(input).save();
  };

  return (
    <>
      <button
        style={{ marginTop: "30px" }}
        onClick={downloadPdf}
        className="btn btn-primary"
      >
        Download pdf
      </button>
      <div style={{ width: "100%" }} id="divToPrint">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,.01)",
          }}
        >
          <div style={{ width: "15%" }}>
            <img
              style={{ width: "80px", marginLeft: "30px" }}
              alt=""
              src="../image/logo3.png"
            ></img>
          </div>
          <div style={{ textAlign: "center", width: "70%" }}>
            <h4 style={{ fontSize: "28px", textAlign: "center" }}>
              জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়
            </h4>
            <p style={{ fontWeight: "500" }}>ত্রিশাল, ময়মনসিংহ</p>
          </div>
          <div style={{ width: "15%" }}></div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4 style={{ fontSize: "24px", textAlign: "center" }}>
            (শিক্ষক পদের জন্য আবেদন ফর্ম)
          </h4>
          <h6 style={{ fontSize: "16px", textAlign: "center" }}>
            ....................................বিভাগের.................................পদের
            জন্য
          </h6>
          <h4
            style={{ fontSize: "28px", textAlign: "center", fontWeight: "500" }}
          >
            আবেদন পত্র
          </h4>
        </div>

        <div style={{ padding: "30px", marginLeft: "30px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ০১ । নাম:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>{name}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ০২ । পিতা/স্বামীর নাম:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>{gurdian}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ০৩ । মাতার নাম:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {motherName}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ০৪ । জন্ম তারিখ:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {birthdate}
              </p>
            </div>
          </div>

          <h6
            style={{
              paddingTop: "20px",
              textAlign: "left",
              paddingBottom: "0px",
              fontSize: "16px",
            }}
          >
            ০৫ । বর্তমান ঠিকানা
          </h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                i) গ্রাম:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {presentVillage}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                ii) ডাকঘর:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {presentPostOffice}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                iii) উপজেলা:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {presentUpazilla}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                iiv) জেলা:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {presentZilla}
              </p>
            </div>
          </div>

          <h6
            style={{
              paddingTop: "20px",
              textAlign: "left",
              paddingBottom: "0px",
              fontSize: "16px",
            }}
          >
            ০৬ । স্থায়ী ঠিকানা
          </h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                i) গ্রাম:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {parmanentVillage}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                ii) ডাকঘর:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {parmanentPostOffice}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                iii) উপজেলা:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {parmanentUpazilla}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                iv) জেলা:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {parmanentZilla}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ০৭ । মোবাইল/ফোন নম্বর:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>{mobile}</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ০৮ । ই-মেইল:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>{email}</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ০৯ । বিবাহিত:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {isMarried}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ১০ । জাতীয়তা:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {nationality}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "20%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ১১ । ধর্ম:
              </h6>
            </div>
            <div style={{ width: "80%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {religion}
              </p>
            </div>
          </div>

          <div style={{ marginTop: "15px" }}>
            <table
              style={{ fontSize: "12px", tableLayout: "fixed", width: "100%" }}
            >
              <tr>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  স্কুল/কলেজ/বিশ্ববিদ্যালয়
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  বয়স অতিবাহিত সাল হতে __ সাল পর্যন্ত
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  পরীক্ষার নাম
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  বিভাগ/শ্রেনী/গ্রেড
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  সাল
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  অধীত বিষয়
                </th>
              </tr>

              <tr>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationInstitute1}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {passedEducationYear1}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationExamName1}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationGrade1}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationYear1}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {learnedTopic1}
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationInstitute2}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {passedEducationYear2}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationExamName2}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationGrade2}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationYear2}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {learnedTopic2}
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationInstitute3}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {passedEducationYear3}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationExamName3}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationGrade3}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {educationYear3}
                </td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "8px",
                    border: "1px solid #dddddd",
                    verticalAlign: "top",
                  }}
                >
                  {learnedTopic3}
                </td>
              </tr>
            </table>
          </div>
          <div style={{ padding: "15px" }}></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "30%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ১২ । কোনো বিশেষ প্রতিষ্ঠানে অধ্যয়ন ও বিশেষ বিষয়ে পাঠ গ্রহণ:
              </h6>
            </div>
            <div style={{ width: "70%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {specialInstituteSubject}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "30%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ১৩ । দক্ষতা অনুসারে ভাষা বিবরণ:
              </h6>
            </div>
            <div style={{ width: "70%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {languageExpert}
              </p>
            </div>
          </div>

          <h6
            style={{
              paddingTop: "20px",
              textAlign: "left",
              paddingBottom: "0px",
              fontSize: "16px",
            }}
          >
            ১৪ । প্রকাশিত প্রবন্ধ
          </h6>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                i) প্রবন্ধের নাম:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {articleName}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                ii) প্রবন্ধ প্রকাশিত জার্নালের নাম:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {journalName}
              </p>
            </div>
          </div>

          <h6
            style={{
              paddingTop: "20px",
              textAlign: "left",
              paddingBottom: "0px",
              fontSize: "16px",
            }}
          >
            ১৫ । শিক্ষাদানের অভিজ্ঞতা
          </h6>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                i) সরকারী/আধাসরকারী/স্বায়ত্বশাসিত প্রতিষ্ঠান:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {teachingInstitute}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                ii) মোট চাকুরিকাল:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {totalTenure}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                iii) বর্তমান পদ ( চাকুরিকাল, বেতন স্কেল, প্রতিষ্ঠান):
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {currentPosition}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                iv) সর্বমোট চাকুরিকাল:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {allTotalTenure}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                v) যেসব ক্লাসে ও বিষয়ে অধ্যাপনা করা হয়েছে তার বিবরণ:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {taughtSubjectDescription}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "30%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ১৬ । কোনো বিশ্ববিদ্যালয়/শিক্ষা প্রতিষ্ঠান বা অন্য কোনো
                প্রতিষ্ঠানে কোনো নির্ধারিত সময়ের জন্য চাকুরি করতে বাধ্য কিনা?:
              </h6>
            </div>
            <div style={{ width: "70%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {forcedToWorkTime}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "30%" }}>
              <h6 style={{ marginBottom: "0px", fontSize: "16px" }}>
                ১৭ । চাকুরি গ্রহণে ইস্পিত বেতন:
              </h6>
            </div>
            <div style={{ width: "70%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {steelSalary}
              </p>
            </div>
          </div>

          <h6
            style={{
              paddingTop: "20px",
              textAlign: "left",
              paddingBottom: "0px",
              fontSize: "16px",
            }}
          >
            ১৮ । আপনার পরিচিত কিন্তু জন্মগত বা বৈবাহিক সূত্রে আত্নীয় নন এমন দুজন
            ব্যক্তির নাম ও ঠিকানা (মোবাই/ফোন নম্বর সহ) যাদের কাছ থেকে আপনার
            যোগ্যতা সম্বন্ধে তথ্য পাওয়া যাবে:
          </h6>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                i) ব্যক্তি:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {familierPerson1}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              ></h6>
            </div>
            <div style={{ width: "25%" }}>
              <h6
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                }}
              >
                ii) ব্যক্তি:
              </h6>
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <p style={{ marginBottom: "0px", fontSize: "16px" }}>
                {familierPerson2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
