import React, { useState, useEffect } from "react";
import SearchBar from "./Components/Search/SearchBar";
import PrintStudentInfo from "./Components/PrintStudentInfo";
import axios from 'axios';

function App() {
  //set lifted state for searchBar
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

    //fetch database to create new array of students to display
  useEffect(() => {
    function fetchStudentInfo() {
      axios.get('https://api.hatchways.io/assessment/students')
      .then(res => {
        console.log(res);
        const transformedStudentData = res.data.students.map(studentData => {
        return {
          imgURL: studentData.pic,
          fullName: `${studentData.firstName} ${studentData.lastName}`,
          email: studentData.email,
          company: studentData.company,
          skill: studentData.skill,
          grades: studentData.grades
        }})
        setStudents(transformedStudentData);
        setFilteredStudents(transformedStudentData);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
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
