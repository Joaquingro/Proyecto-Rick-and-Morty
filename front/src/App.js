import './App.css';
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar/SearchBar.jsx'
// import characters, { Rick } from './data.js'
import Gif from './components/Gif/Gif.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect,  } from 'react';
import { Routes,  Route, useNavigate, useLocation} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import  Favorites  from './components/Favorites/Favorites';
function App () {
  
  const navigate  = useNavigate();
  const location = useLocation(); 
  const [access, setAccess] = useState(false);
  var username = 'joaquinsgro@gmail.com';
  var password = 'holas234';

  const login = (userData) => {
    if(username === userData.username && password === userData.password){
      setAccess(true);
      navigate("/home"); 
    }
  }
  const logout = (event) => {
    
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  
  const [characters, setCharacters] = useState([]);
  
  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
 
  const onClose = (id) =>{
    setCharacters(
      characters.filter(char => char.id !== id)
    )

  }
 
  return (
    <div>
     <div className='align'> 
    <h1 className='title'>Rick and Morty</h1>
    <Gif/>
    </div>
    {location.pathname === '/' ? <Form login = {login} /> : <Nav onSearch = {onSearch} /> }
    
  
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/home' element ={<Cards  characters={characters}
       onClose = {onClose}/>}></Route>
       <Route path='/detail/:detailId' element= {<Detail/>}></Route>
      <Route path='/favorites' element = {<Favorites/>}></Route>
    </Routes>








</div>


     
  )
}

export default App
