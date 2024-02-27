import { GET_GAMES } from "../actions/action";
//import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/actionTypes"


const initialState = {
    myFavorites: [],
    GameNew : [],
    allGenres: [],
    gamebyId: [],
    allVideogames: [],
    gamesCopy: [],
    errors: "",
  };

  function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
      case "GET_GAMES":
        console.log("entrooo");
        console.log(payload);
        return{
          ...state,
          allVideogames: payload,
          gamesCopy: payload,

        } ;

        case "GET_GAMESID":
        console.log("videojuego por ID");
        console.log(payload);
        return{
          ...state,
          gamebyId: payload,
        } ;

        case "GET_GAMESNAME":
          console.log("videojuego por NAME");
          console.log(payload);
          return{
            ...state,
            allVideogames: payload,
            gamesCopy: payload,
          } ;
        case "GET_GENRES":
         // console.log("entrooo");
         // console.log(payload);
          return{
            ...state,
            allGenres: payload,
               
            } ;  
        case "POST_GAMES":
           // console.log("entrooo");
            console.log(payload);
            return{
            ...state,
            GameNew: payload,
            } ;     
        default:
            return state
    }
  }

  export default rootReducer