
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import './navbar.styles.css';

function Navbarr() {

  
  return (
    <div className='search-game'>
      
      {/* <input type='text' placeholder='Buscar Videojuego'/>
      <button> Buscar </button> */}
       <Link to='/home' ><button>Home</button></Link>   
       <Link to = '/about' ><button>About</button></Link>
       <Link to = '/create' ><button>Crear Juego</button></Link>
       <SearchBar /> 
       {/* <SearchBar onSearch={onSearch} /> */}
     
      </div>
  );
}

export default Navbarr

// const onSearch =async (name) =>{ 
 
//   try {
//      if(!id) return alert ("Ingrese un Bombre juego")
//      if(characters.find(char =>char.id===parseInt(id)))
//      return alert(`Ya existe el personaje con el id: ${id}`);
//      const {data} = await axios(`${URL2}${id}`);
//      if(data.name){
//        setcharacters([data, ...characters]);
//      }else{
//         window.alert('¡No hay personajes con este ID!' + id);
//       }

//   }  catch (error) 
//     {
//        alert(err.message);
//     }

// };

// // import { Link } from "react-router-dom";
// import SearchBar from '../SearchBar/SearchBar';
// import style from './Nav.module.css'

 

// function Nav({onSearch}) {
//   //console.log(onSearch);
//    return <div className={style.navega}>
//     <Link to='/home' ><button>Home</button></Link>
//     <Link to = '/about' ><button>About</button></Link>
//     <Link to = '/favorites' ><button>Favorites</button></Link>
    
//      <SearchBar onSearch={onSearch} />
//    </div> 
// }
// export default Nav