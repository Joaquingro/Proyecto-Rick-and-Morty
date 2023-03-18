import { Card } from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return(
      
      <div className= {style.cards}>
         {
            characters.map((char, index) => {
            return <Card 
               key = {index}
               id = {char.id}
               name = {char.name}
               species = {char.species}
               gender = {char.gender}
               image = {char.image} 
               onClose={() => onClose(char.id)}
            /> 
            })
         }
         </div>
   
      ) 
      
}
