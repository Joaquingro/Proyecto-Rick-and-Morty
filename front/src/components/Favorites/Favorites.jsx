import { connect } from 'react-redux';
import {Card} from '../Card/Card';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import style from  './Favorites.module.css'

export function Favorites ({myFavorites}){
    const dispatch = useDispatch();
    

    const handleOrder = (event) => {
        const value = event.target.value;
        dispatch(orderCards(value));
    }

    const handleFilter = (event) => {
        const value = event.target.value;
        dispatch(filterCards(value));
    }

    return (
        <div>
        <div>
            <select onChange={handleOrder}>
                <option value="order" disabled = "disabled">Order By</option>
                <option  value="Ascendente">Ascendente</option>
                <option  value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                
                <option value="filter" disabled = "disabled">Filter By</option>

                <option  value="Male">Male</option>
                <option  value="Female">Female</option>
                <option  value="Genderless">Genderless</option>
                <option  value="unknown">unknown</option>
                </select> 
        </div>
        <div className= {style.card}>
        {
            myFavorites.length && myFavorites.map((fav, index) => {
                return <Card
                key = {index}
                id = {fav.id}
               name = {fav.name}
               species = {fav.species}
               gender = {fav.gender}
               image = {fav.image} 
               
            /> 
        
                
            })
        }
      </div>
        </div>
    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
