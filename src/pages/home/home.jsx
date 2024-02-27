import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getGames } from "../../redux/actions/action"; 
import { getGames } from "../../redux/actions/action";

import Cards from '../../components/cards/cards';
import Navbar from '../../components/navbar/navbar';

import './home.styles.css';

function Home() {

 

  const dispatch = useDispatch();
  const allGames= useSelector((state)=> state.allVideogames);

    useEffect(()=>{
    dispatch(getGames());
  }, [dispatch])
  //console.log(allGames);

  return (
    <div className='home'>
      <Navbar/>
      <Cards allGames={allGames} /> 
      
    </div>
  );
}

export default Home;
