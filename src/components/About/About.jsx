import style from './About.module.css';
import React from 'react';
export default function About() {
    return (
    <div className={style.yo}>
        <h2 className={style.back}>Acerca de mi...</h2>
        <img src = 'https://media.tenor.com/doUcitxR2acAAAAM/rick-and-morty-smirk.gif'/>
        <p className={style.background}>Que tal, soy Joaquin Guerrero, <br/> creador de este 
            proyecto de <br/> Rick and Morty.
        </p>
    </div>
        )
 }
 