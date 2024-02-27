//import logo from './logo.svg';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Home from '../src/pages/home/home';
import Create from './pages/create/create';
import Detail from './pages/detail/detail';
import './App.css';


function App() {
  return (
    
    <div className="App">
      
      <Routes>
            {/* <Route path='/' element={<Form Login={login}/>}/> */}
            {/* <Route path='/home' element={<Cards 
            characters={characters} onClose={onClose}/>}/> */}
            <Route path='/home' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>

            
         </Routes>

    </div>
  );
}
export default App;