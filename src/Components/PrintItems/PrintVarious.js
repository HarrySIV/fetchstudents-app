import './PrintVarious.css';

//print dynamic text based on props
let PrintVarious = props => {
   return (
      <h4> {props.entry}: {props.entryData}</h4>
   )
}

export default PrintVarious;