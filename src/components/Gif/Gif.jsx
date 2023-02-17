import style from './Gif.module.css';
export default function Gif() {

    return(
        <div >
            <img className= {style.gif} src = 'https://www.gifcen.com/wp-content/uploads/2021/11/rick-and-morty-gif-7.gif' alt = "Morty" />
        </div>
    );
}