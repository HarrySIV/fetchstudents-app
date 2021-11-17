import React, { useState, useEffect } from "react";
import SearchBar from "./Components/Search/SearchBar";
import PrintStudentInfo from "./Components/PrintStudentInfo";

function App() {
  //set lifted state for searchBar
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

    //fetch database to create new array of students to display
  useEffect(() => {
    function fetchStudentInfo() {
      fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(data => {
          const transformedStudentData = data.students.map(studentData => {
            return {
              imgURL: studentData.pic,
              fullName: `${studentData.firstName} ${studentData.lastName}`,
              email: studentData.email,
              company: studentData.company,
              skill: studentData.skill,
              grades: studentData.grades
            }
          });
          setStudents(transformedStudentData);
          setFilteredStudents(transformedStudentData);
        });
    }
  fetchStudentInfo();
  }, []);

     //setStudents to a new array of filteredStudents
    const searchQueryHandler = text => {
      if (text) {
        const searchQuery = students.filter(newFilteredStudents => {
        return newFilteredStudents.fullName.toLowerCase().includes(text.toLowerCase());
        })
        setFilteredStudents(searchQuery);
      } else if (text === '') { return setFilteredStudents(students);}
    }
  return (
    <div>
      <SearchBar 
        students={students}
        onChange={searchQueryHandler} />
      <hr />
      <PrintStudentInfo 
        students={filteredStudents}  
        onChange={setStudents} 
        />
    </div>
);
};





export default App;
