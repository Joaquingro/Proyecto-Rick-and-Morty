var fav = require("../utils/fav.js")


const postFav = (req, res) => {
    
    let char = req.body;
    if (char && fav.push(char)) res.status(200).json(char);
    else res.status(500).json({ error: "Error POST FAV" });
}
const getFav = (req, res) => {
    if(fav.length) res.status(200).json(fav)
    else res.status(404).json({error: "No hay personajes"})
    
}

const deleFav = (req, res) => {
    let {id} = req.params;
    if(id){
        fav = fav.filter((f) => f.id !== Number(id));
        
        res.status(200).json({Exitoso: `El personaje con ${id} fue borrado exitosamente`})
    } else{
       res.status(400).json({
            Error: "No hay id"})
    }
}








module.exports = {
    postFav,
    getFav,
    deleFav
};