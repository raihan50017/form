import React from "react";
import { Card } from "react-bootstrap";

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
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>নাম:</strong> {name}
          </p>
          <p>
            <strong>পিতা/স্বামীর নাম:</strong> {gurdian}{" "}
          </p>
          <p>
            <strong>মাতার নাম:</strong> {motherName}{" "}
          </p>
          <p>
            <strong>জন্ম তারিখ:</strong> {birthdate}{" "}
          </p>
          <p>
            <strong>গ্রাম:</strong> {presentVillage}{" "}
          </p>
          <p>
            <strong>ডাকঘর:</strong> {presentPostOffice}{" "}
          </p>
          <p>
            <strong>উপজেলা:</strong> {presentUpazilla}{" "}
          </p>
          <p>
            <strong>জেলা:</strong> {presentZilla}{" "}
          </p>
          <p>
            <strong>জেলা:</strong> {presentZilla}{" "}
          </p>
          <p>
            <strong>গ্রাম:</strong> {parmanentVillage}{" "}
          </p>
          <p>
            <strong>ডাকঘর:</strong> {parmanentPostOffice}{" "}
          </p>
          <p>
            <strong>উপজেলা:</strong> {parmanentUpazilla}{" "}
          </p>
          <p>
            <strong>জেলা:</strong> {parmanentZilla}{" "}
          </p>
          <p>
            <strong>জেলা:</strong> {parmanentZilla}{" "}
          </p>
          <p>
            <strong>মোবাইল/ফোন নম্বর:</strong> {mobile}{" "}
          </p>
          <p>
            <strong>ই-মেইল:</strong> {email}{" "}
          </p>
          <p>
            <strong>বিবাহিত:</strong> {isMarried}{" "}
          </p>
          <p>
            <strong>জাতীয়তা:</strong> {nationality}{" "}
          </p>

          <p>
            <strong>ধর্ম:</strong> {religion}{" "}
          </p>
          <p>
            <strong>স্কুল/কলেজ/বিশ্ববিদ্যালয়:</strong> {educationInstitute1}{" "}
          </p>
          <p>
            <strong>স্বয়স অতিবাহিত সাল হতে __ সাল পর্যন্ত:</strong>{" "}
            {passedEducationYear1}{" "}
          </p>
          <p>
            <strong>পরীক্ষার নাম:</strong> {educationExamName1}{" "}
          </p>
          <p>
            <strong>বিভাগ/শ্রেনী/গ্রেড:</strong> {educationGrade1}{" "}
          </p>
          <p>
            <strong>সাল:</strong> {educationYear1}{" "}
          </p>
          <p>
            <strong>অধীত বিষয়:</strong> {learnedTopic1}{" "}
          </p>
          <p>
            <strong>স্কুল/কলেজ/বিশ্ববিদ্যালয়:</strong> {educationInstitute2}{" "}
          </p>
          <p>
            <strong>স্বয়স অতিবাহিত সাল হতে __ সাল পর্যন্ত:</strong>{" "}
            {passedEducationYear2}{" "}
          </p>
          <p>
            <strong>পরীক্ষার নাম:</strong> {educationExamName2}{" "}
          </p>
          <p>
            <strong>বিভাগ/শ্রেনী/গ্রেড:</strong> {educationGrade2}{" "}
          </p>
          <p>
            <strong>সাল:</strong> {educationYear2}{" "}
          </p>
          <p>
            <strong>অধীত বিষয়:</strong> {learnedTopic2}{" "}
          </p>
          <p>
            <strong>স্কুল/কলেজ/বিশ্ববিদ্যালয়:</strong> {educationInstitute3}{" "}
          </p>
          <p>
            <strong>স্বয়স অতিবাহিত সাল হতে __ সাল পর্যন্ত:</strong>{" "}
            {passedEducationYear3}{" "}
          </p>
          <p>
            <strong>পরীক্ষার নাম:</strong> {educationExamName3}{" "}
          </p>
          <p>
            <strong>বিভাগ/শ্রেনী/গ্রেড:</strong> {educationGrade3}{" "}
          </p>
          <p>
            <strong>সাল:</strong> {educationYear3}{" "}
          </p>
          <p>
            <strong>অধীত বিষয়:</strong> {learnedTopic3}{" "}
          </p>
          <p>
            <strong>প্রবন্ধের নাম:</strong> {articleName}{" "}
          </p>
          <p>
            <strong>প্রবন্ধ প্রকাশিত জার্নালের নাম:</strong> {journalName}{" "}
          </p>
          <p>
            <strong>সরকারী/আধাসরকারী/স্বায়ত্বশাসিত প্রতিষ্ঠান:</strong>{" "}
            {teachingInstitute}{" "}
          </p>
          <p>
            <strong>মোট চাকুরিকাল:</strong> {totalTenure}{" "}
          </p>
          <p>
            <strong>বর্তমান পদ ( চাকুরিকাল, বেতন স্কেল, প্রতিষ্ঠান):</strong>{" "}
            {currentPosition}{" "}
          </p>
          <p>
            <strong> সর্বমোট চাকুরিকাল:</strong> {allTotalTenure}{" "}
          </p>
          <p>
            <strong>যেসব ক্লাসে ও বিষয়ে অধ্যাপনা করা হয়েছে তার বিবরণ:</strong>{" "}
            {teachingExperience}{" "}
          </p>
          <p>
            <strong>
              কোনো বিশ্ববিদ্যালয়/শিক্ষা প্রতিষ্ঠান বা অন্য কোনো প্রতিষ্ঠানে কোনো
              নির্ধারিত সময়ের জন্য চাকুরি করতে বাধ্য কিনা?:
            </strong>{" "}
            {forcedToWorkTime}{" "}
          </p>

          <p>
            <strong>চাকুরি গ্রহণে ইস্পিত বেতন:</strong> {steelSalary}{" "}
          </p>

          <p>
            <strong>i) ব্যক্তি:</strong> {familierPerson1}{" "}
          </p>
          <p>
            <strong>ii) ব্যক্তি:</strong> {familierPerson2}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
