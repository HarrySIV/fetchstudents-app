import PrintFullName from "./PrintItems/PrintFullName";
import PrintPicture from "./PrintItems/PrintPicture";
import PrintGradeAverage from "./PrintItems/PrintGradeAverage";
import PrintVarious from "./PrintItems/PrintVarious";


let  PrintStudentInfo = props => {
  //if student length is empty, display 3 dots to indicate the request has not yet been recieved
  if (!props.students.length) return (<h2>...</h2>);
  //return array of students
  return (
    <ul>
      {props.students.map(student => {
      return (
        <div 
        className="item"
        key={student.id}>
          <PrintPicture imgURL={student.imgURL} />
          <div className="text">
            <PrintFullName fullName={student.fullName} className="name" />
            <PrintVarious entry='E-mail' entryData={student.email} className="various" />
            <PrintVarious entry='Company'entryData={student.company} className="various" />
            <PrintVarious entry='Skill'entryData={student.skill} className="various" />
            <PrintGradeAverage grades={student.grades} className="various" />
        </div>
        <hr />
        </div>
      );
    }
    )}</ul>
  );
}

export default PrintStudentInfo;