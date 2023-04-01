import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const {onSearch} = props;
   const [character, setCharacter ] = useState("")

   const handlChange = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div>
         <input onChange={handlChange} className= {style.search} type='search' value = {character} />
      <button className= {style.search} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
