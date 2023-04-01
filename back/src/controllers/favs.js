
const { Favorite } = require("../db")

const postFav = async (req, res) => {
try {
    
    let {id, name, status, species, gender, origin, image} = req.body;
    if(!name || !species || !gender ||!image){
        
        throw new Error("Faltan propiedades");
        
    }
    const newFav = {
        id, name, species, gender, image
        
    }
    
    await Favorite.create(newFav);
    res.status(200).json(newFav);
} catch (error) {
    res.status(500).json({ error: error.message });
    
}

}
const getFav = async(req, res) => {
 try {
     let allFavorites = await Favorite.findAll();

     if(!allFavorites) throw new Error("No hay favoritos");
     res.status(200).json(allFavorites);
 } catch (error) {
    res.status(404).send(error.message)
 }
    
}

const deleFav = async (req, res) => {
    try {
    const {id} = req.params;

    const favDelete = await Favorite.findByPk(id);
    if(!favDelete) throw new Error("No hay personaje favorito");
    await Favorite.destroy({
        where: {
                id
    }});
    res.status(200).send("Personaje Eliminado");
   } catch (error) {
    res.status(404).json(error.message)
   }
}








module.exports = {
    postFav,
    getFav,
    deleFav
};