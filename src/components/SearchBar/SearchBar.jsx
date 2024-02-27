//import { useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getGamesName } from "../../redux/actions/action";


function SearchBar() {
   //const {id} = useParams();
let gameNa = "";
const dispatch = useDispatch();
const [getName, setgetName] = useState('')
const [getGName, setgetGName] = useState('')
const allgamesName = useSelector((state)=> state.allVideoGames);
//   // const [gamesId, setgamesId] = useState({})
useEffect(()=>{
 
 setgetGName(getGName)
 dispatch(getGamesName(getGName));
 setgetName('');
 }, [dispatch, getGName])
function handleChange(evento) {
 //console.log(evento.target.value);
setgetName(evento.target.value)

}
const search = () => {
console.log("probando boton" + getGName);

if (!getName) {
   alert("ingresar nombre")
}
setgetGName(getName)
console.log(getGName);

   }   

   return (
      <div>
         <input type='search' onChange={handleChange} 
         placeholder="Ingresa Nombre Juego" value={getName}/>
         <button onClick={search}>Agregar </button> 
      </div>
   );
}
export default SearchBar

 //console.log(onSearch);

 // const [filtered, setFiltered] = useState(allGames)
  // const [searchString, setSearchString] = useState("")

  // function handleChange(e) {
  //   e.preventDefault()
  //   searchString(e.target.value)
  // }
  // function handleSubmit() {
  //   const filtered = allGames.filter((game) => game.name.includes(searchString));
  //   setFiltered(filtered);
  // }