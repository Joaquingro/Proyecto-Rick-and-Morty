import { Card } from '../Card/Card.jsx';
import style from './Cards.module.css';
import 'animate.css'
export default function Cards(props) {
   const {setHideAnimation, hideAnimation, setShowAnimation, showAnimation, characters, onClose } = props;
   return(
      
      <div className= {style.cards}>
         {
            characters.map((char, index) => {
            return <Card setShowAnimation = {setShowAnimation} setHideAnimation = {setHideAnimation}
               key = {index}
               id = {char.id}
               name = {char.name}
               species = {char.species}
               gender = {char.gender}
               image = {char.image} 
               hideAnimation = {hideAnimation === char.id}
               showAnimation = {showAnimation === char.id}
               isRemoved = {char.isRemoved}
               onClose={() => onClose(char.id)}
            /> 
            })
         }
         </div>
   
      ) 
      
}
