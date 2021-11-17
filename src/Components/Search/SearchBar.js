import './SearchBar.css';

let SearchBar = props => {
   //capture searchBar userInput
   const userInput = event => {
      props.onChange(event.target.value)
   } 

   //create searchBar as input field
   return (
      <input type="text" placeholder="Search by name" onChange={userInput} />
   )
}

export default SearchBar;