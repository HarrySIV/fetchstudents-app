import './PrintVarious.css';

let PrintGradeAverage = (props) => {
   //set grade average and reduce it to and average value
   let gradeAverage = props.grades;
   let sum = gradeAverage.reduce((prevValue, curValue) => {
      return parseInt(prevValue) + parseInt(curValue);
   })
   sum /= props.grades.length;
   
   //return gradeAverage
   return (
      <div>
         <h4>Average: {sum}%</h4>
      </div>
   )
}

export default PrintGradeAverage;