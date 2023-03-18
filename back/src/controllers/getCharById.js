


const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";




 const getCharById = async (req, res) => {
    const {id} = req.params; 
    try {
        
        const response = await axios(URL + id)
        const data = response.data; 
            let char = 
           { 
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
        res.status(200).json(char);
    } catch (error) {
        res.status(500).send(error.message)
    }

 };

module.exports = getCharById;