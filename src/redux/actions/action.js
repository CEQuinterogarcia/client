import axios from 'axios'
const ENDPOINT = "http://localhost:3001/videogames";
const ENDPOINT_N = "http://localhost:3001/videogames/";
const URL_G = "http://localhost:3001/genres";


export const GET_GAMES = "GET_GAMES"

export function getGames() {
    return async (dispatch) => {
     try {
     // let {data} =  await axios.get(`${URL}${API_KEY}`)
      let {data} =  await axios.get(`${ENDPOINT}`)
         
     // console.log(data);
      return dispatch({
       type: "GET_GAMES",
       payload: data
      });
      
     } catch (error) {
      alert(error.message);
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
     } 
     }
}

export function getGamesId(id) {
  return async (dispatch) => {
   try {
   // let {data} =  await axios.get(`${URL}${API_KEY}`)
    let {data} =  await axios.get(`${ENDPOINT}/${id}`)
       
   // console.log(data);
    return dispatch({
     type: "GET_GAMESID",
     payload: data
    });
    
   } catch (error) {
    alert(error.message);
    return dispatch({
      type: "ERROR",
      payload: error.message,
    });
   } 
   }
}
export function getGamesName(name) {
  return async (dispatch) => {
   try {
    let {data} =  await axios.get(`${ENDPOINT}/?name=${name}`)
       
    //console.log(data);
    return dispatch({
     type: "GET_GAMESNAME",
     payload: data
    });
    
   } catch (error) {
    alert(error.message);
    return dispatch({
      type: "ERROR",
      payload: error.message,
    });
   } 
   }
}
export function getGenres() {
  return async (dispatch) => {
   try {
    let {data} =  await axios.get(`${URL_G}`)
       
    //console.log(data);
    return dispatch({
     type: "GET_GENRES",
     payload: data
    });
    
   } catch (error) {
    alert(error.message);
    return dispatch({
      type: "ERROR",
      payload: error.message,
    });
   } 
   }
}
export function postGames(gameData) {

  console.log(gameData);
  return async (dispatch) => {
    try {
    let newgame =  await axios.post(ENDPOINT, gameData)
       
    //console.log(data);
    return dispatch({
      type: "POST_GAMES",
      payload: newgame
    });
    
   } catch (error) {
    alert(error.message);
    return dispatch({
      type: "ERROR",
      payload: error.message,
    });
   } 
   }
}
// export const postVideogame = async (form) => {

//   try {
//     await axios.post("http://localhost:3001/videogames", form);
//   } catch (error) {
//     alert("El juego ya exsiste");
//   }
// };