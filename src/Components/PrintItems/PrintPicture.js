import './PrintPicture.css';


//print database defined picture
let printPicture = props => {
   return (
   <img alt="student" src={props.imgURL} />
   )
}

export default printPicture;