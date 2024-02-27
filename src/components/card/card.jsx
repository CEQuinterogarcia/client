import { Link, useLocation } from "react-router-dom";
import './card.styles.css';

function Card(games) {
  //console.log(games.name);
  
  let {name, image, id, genres}= games.games;
  let generos = genres?.join(", ")
  ///detail/:id
  //<div  onClick={()=> console.log(id)} id='cardClick' className='card-container'>

  return (
    <Link to={`/detail/${id}`}> 
     <div onClick={()=> console.log(id)} id='cardClick' className='card-container'> 
    
      <h1 className='titcard' >{name}</h1>
      <img className='image' src={image} alt='' /> 
      
      <h2>{id}</h2>
      <h2>{generos}</h2>
    </div></Link>
  );
}

export default Card