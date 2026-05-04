import StudentCard from "../components/StudentCard";

const Students = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default Students