import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { useState, useEffect } from 'react';

export function Card({name, gender, onClose, species, image, id}) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavoritos = useSelector((s) =>s.myFavorites);
   useEffect(() => {
      myFavoritos?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavoritos]);

   const handleFavorite =  () => {
     
      if(isFav){
      setIsFav(false);
        dispatch(deleteFavorite(id));
   } else{
      setIsFav(true);
       dispatch(addFavorite({name, gender, onClose, species, image, id}));
      }
  
   }
    return (
      
      <div className = {style.card}>
         {
            isFav ? (
      <button onClick={handleFavorite}>❤️</button>
         ) : (
      <button onClick={handleFavorite}>🤍</button>
            )
          }
         <button className = {style.boton}onClick={onClose}>X</button>
         <Link className = {style.txt} to = {`/detail/${id}`}>
            <h2 className = {style.tags}>{name}</h2>
         
         <h2 className = {style.tags}>{species}</h2>
         <h2 className = {style.tags}>{gender}</h2>
         <img className = {style.card} src={image} alt="" />
         </Link>
      </div>
   );
}

// export function mapStateToProps(state){
//    return {
//       myFavorites: state.myFavorites,

//    }
// }



// export function mapDispatchToProps(dispatch){
//    return {
//       addFavorite: (character) =>{dispatch(addFavorite(character))},
//       deleteFavorite: (id) => {dispatch(deleteFavorite(id))},
//    }

// }

// export default connect(mapDispatchToProps, mapStateToProps)(Card);