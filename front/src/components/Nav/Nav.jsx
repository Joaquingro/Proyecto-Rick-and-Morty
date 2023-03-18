import style from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';


export default function Nav({onSearch, logout}){
        return(
            
     <div className= {style.nav}>
            <Link className = {style.button} to = "/about">About</Link>
            <Link className = {style.button} to = "/home">Home</Link>
            <Link onChange = {logout} to = "/" className = {style.button}>LogOut</Link>
            <Link className = {style.button} to = "/favorites">Favorites</Link>
         <SearchBar onSearch={onSearch}
             />
        </div>
        )
}