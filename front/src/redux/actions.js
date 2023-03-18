import {  ADD_FAVORITE,  DELETE_FAVORITE, FILTER, ORDER, GET_FAVORITES } from "./type"
import axios from 'axios';
// import { createAction } from '@reduxjs/toolkit';


// export const fetchData = createAction('FETCH_DATA');

export const addFavorite =  (character) => {
    return async (dispatch) => {
    try {
        await fetch("http://localhost:3001/rickandmorty/fav", {
            method: "POST",
            body: JSON.stringify(character),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((response) => response.json())
        .then((data) => dispatch({
            type: ADD_FAVORITE,
            payload: data
        }))
    } catch (error) {
        console.log(error);
    }
        
    } 
}

export const deleteFavorite =  (id) => {
 
   return async (dispatch) => {
    try {
        await fetch(`http://localhost:3001/rickandmorty/fav/${id}`, {
            method: "DELETE",
            })
        .then((response) => response.json())
        .then((data) => {
            if(data) dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
        })
    } catch (error) {
        console.log(error);
    }
   
   }
} 

export const filterCards = (status) => {
    return{
        type: FILTER,
        payload: status
    }
}

export const orderCards = (id) => {
    return{
        type: ORDER,
        payload: id
    }
}

// export const getFavorites = async () => {
//     return async (dispatch) => {
//         const response = await axios.get("http://localhost:3001/rickandmorty/fav")
//         const data = response.data;
//         return dispatch({
//             type: GET_FAVORITES,
//             payload: data
//         })
//        }
// }
