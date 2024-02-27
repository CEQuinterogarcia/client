import './create.styles.css';
import React, { useState } from "react"
//import validation from "./validation"
//import style from './Form.module.css'
import './create.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGenres, postGames } from '../../redux/actions/action';
import validation from './validation';

function Create() {

  
  const dispatch = useDispatch();
  const allGenres= useSelector((state)=> state.allGenres);

  useEffect(()=>{
    dispatch(getGenres());
  }, [])
  const [gameData, setGameData]= useState({
    name:'',
    image:'',
    description:'',
    platform:[],
    released:'',
    rating: '',
    genreName:[]
  
  })
  const [errors, setErrors] = useState({
    name:'',
    image:'',
    description:'',
    platform:[],
    released:'',
    rating: '',
    genreName:[] 
  })
  //console.log(allGenres);
 // const [errors, setErrors]= useState({})
 const [genr, setgenr] = useState([]);
// let genresprueva=[];
  const handleChange =(evento)=>{
    const namefor = evento.target.name;
    const valu = evento.target.value;
    
    //evento.preventDefault()
  // setGameData({...gameData,[evento.target.name]:
  // evento.target.value})
  
  // setErrors(validation({...gameData,[evento.target.name]:
  //   evento.target.value}))
 
    if (namefor=== "genreName") {
      const {checked} = evento.target;
      const genre = evento.target.value;
      

      if (checked) {
       // console.log(genre);
        setgenr([...genr, genre])
       // console.log(genr);
        setGameData((gameData) => ({
          ...gameData, 
          genreName: [...gameData.genreName, genre]
        
        }))
       // console.log(gameData.genreName);

      }
    //   }else{
    //     setGameData((prevgameData)=>({
    //      ...prevgameData,
    //      genreName: prevgameData.genreName.filter((g)=> g !== genre), 
    //     }));
    //   }
    //   //console.log(genr);
    }else{
      setGameData((prevgameData)=>({
        ...prevgameData,
        [namefor]: valu,
      }));
    }
    
  setErrors(validation({...gameData,[evento.target.name]:
    evento.target.value}))
  // console.log(gameData.genreName);
  }
  

 
  const handleSubmit =(evento)=>{
    evento.preventDefault()
   dispatch(postGames(gameData)); 
   setGameData({
    name:'',
    image:'',
    description:'',
    platform:[],
    released:'',
    rating: '',
    genreName:[]
   });
  }
 
  return (
    <div className='container' >
    <div className="form-container">
      <h1>Crear un Juego</h1>
      <form onSubmit={handleSubmit }> 
         <div>
            <label htmlFor="Nombre Juego">
                Nombre del Juego:
                <input 
                className='text'
                type="text" 
                placeholder="Ingrese un Nombre"
                id="name"
                name="name"
                value={gameData.name}
                onChange={handleChange}/>
            </label >
          </div>   
          <p style={{color: "red" }}>{errors.name}</p>
          <div>
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
            <label htmlFor="Imagen">
                Imagen:
                <input type="text"
                className='text'
                placeholder="Ingrese Url Imagen"
                id="image"
                name="image"
                value={gameData.image} 
                onChange={handleChange}/>
            </label>
          </div> 
          <p style={{color: "red" }}>{errors.image}</p>
          <div>
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
            <label htmlFor="Description">
                Descripcion:
                <input type="text"
                className='text'
                placeholder="Ingrese descripcion"
                id="description"
                name="description"
                value={gameData.description} 
                onChange={handleChange}/>
            </label>
          </div>  
          <p style={{color: "red" }}>{errors.description}</p>
           <div>
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
            <label htmlFor="Plataformas">
                Plataformas:
                <input type="text"
                className='text'
                placeholder="Ingrese las plataformas"
                id="platform"
                name="platform"
                value={gameData.platform} 
                onChange={handleChange}/>
            </label>
          </div> 
          <p style={{color: "red" }}>{errors.platform}</p> 
          <div>
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
            <label htmlFor="released">
                Fecha de Lanzamiento:
                <input type="date"
                className='text'
                // placeholder="dia / mes / año"
                id="released"
                name="released"
                value={gameData.released} 
                onChange={handleChange}/>
            </label>
          </div> 
          <p style={{color: "red" }}>{errors.released}</p>   
          <div>
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
            <label htmlFor="Rating">
                Rating:
                <input type="text"
                className='text'
                placeholder="Ingrese Rating"
                id="rating"
                name="rating"
                value={gameData.rating} 
                onChange={handleChange}/>
            </label>
          </div> 
            <br />   
          <div>
            {/* <p style={{color: "red" }}>{errors.email}</p> */}
           {allGenres?.map((genre) => (
            <span key={genre.id}>
              {genre.name}  
                
                <input 
                type="checkbox"
                // placeholder="Ingrese Rating"
                id="genres"
                name="genreName"
                value={genre.id} 
                onChange={handleChange}/>
            
            </span>
            ))}
          </div> 
            <br />   

            {/* <p style={{color: "red" }} >{errors.password} </p> */}
            <button>Submit</button>
        </form> 
       </div> 
    </div>
  );
}

export default Create;




