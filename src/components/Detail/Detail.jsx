import style from './Detail.module.css';
import { useState, useEffect } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import React from 'react';

export default function Detail(props) {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    const backToHome = () => {
      navigate('/home');
    }

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
      
    return (
    
    <div >
        <div className= {style.align}>
          <div>
        <h1 className= {style.h1}> Name: {character.name}</h1>
        <p className= {style.p}> Status: {character.status}</p>
        <p className= {style.p}> Specie: {character.species}</p>
        <p className= {style.p}> Gender: {character.gender}</p>
        <p className= {style.p}> Origin: {character.origin?.name}</p>
        </div>
        <img className = {style.img} src = {character.image} alt = {character.name}/>
       </div>
       <button className={style.buttonBack} onClick = {backToHome}>
        Volver
      </button>
      </div>
    
        )
 }
 