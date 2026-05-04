
 import React from "react";
 
 const StudentCard = ({ student }) => {
  const { personal, course, marks, address, skills, isPassed } = student;

  const average = (
    (marks.math + marks.computer + marks.english) / 3
  ).toFixed(2);

  const isHigh = average >= 80;

  return (
    <div style={styles.card}>
      <h3>{personal.name}</h3>

      <p><strong>Age:</strong> {personal.age}</p>
      <p><strong>Gender:</strong> {personal.gender}</p>

      <p><strong>Course:</strong> {course.name} ({course.semester} Sem)</p>

      <p><strong>Location:</strong> {address.city}, {address.state}</p>

      <p style={{ color: isHigh ? "green" : "red" }}>
        <strong>Average Marks:</strong> {average}
      </p>

      <p><strong>Skills:</strong> {skills.join(", ")}</p>

      <p>
        <strong>Status:</strong> {isPassed ? "Passed ✅" : "Failed ❌"}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default StudentCard