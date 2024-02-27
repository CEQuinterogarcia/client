import Card from '../card/card';
import './cards.styles.css';

function Cards({allGames}) {
const gamesList= allGames
console.log(allGames);


  return (
    <div  className='card-list'>
    {gamesList?.map(games=>
   <Card  key ={games.name} games = {games} />
   )}
  
   
  </div>
  );
}

export default Cards