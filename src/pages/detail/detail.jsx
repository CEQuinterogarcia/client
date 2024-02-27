import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
//import { getGames } from "../../redux/actions/action"; 
import { getGamesId } from "../../redux/actions/action";

import './detail.styles.css';

function Detail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const gameId = useSelector((state)=> state.gamebyId);
  const [gamesId, setgamesId] = useState({})

    useEffect(()=>{
      dispatch(getGamesId(id));
      //setgamesId(gameID);
    }, [dispatch, id])

console.log(id);
console.log(gameId);
let {name,image, platform, description, released, rating, genres} = gameId;
let platformStri = gameId.platform?.join(', '); 
//console.log(gameID.platform[0]);
let genresStr = gameId.genres?.join(', ')
//console.log(gameId);

return (
    <div className='container' >   
        <div className="detail-container">
        {/* { pathname === '/home' &&
          <button onClick={()=> onClose(id)}>X</button>
         } */}
          {/* <h1>estamos en la page Detail</h1> */}

           <h1>{name}</h1>
           <h2>{id}</h2>
           <img className='image1' src={image} alt='' /> 
           <h2>{platformStri}</h2>
           <h2>{genresStr}</h2>
       </div> 
       <div className="detail-container">
           
           <p>{description}</p>
           <h2>{rating}</h2>
           <h2>{released}</h2>
           
      
      </div> 
    </div>
    
  );
}

// function getGamesId(id) {
//   const URL_N = 'http://localhost:3001/videogames/'

//   return async () => {
//    try {
//    // let {data} =  await axios.get(`${URL}${API_KEY}`)
//     let {data} =  await axios.get(`${URL_N}:${id}`)
       
//     console.log(data);
//     return data
//     }
    
//     catch (error) {
//     alert(error.message);
//     return  alert("no se encontro")
//     }
//    } 
//    }
export default Detail;
