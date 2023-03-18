const axios  = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
    const {detailId} = req.params;

 try {
     const response = await axios(URL + detailId);
     const data = response.data;
        let detail = { 
             
             image: data.image,
             name: data.name,
             gender: data.gender,
             status: data.origin.name,
             species: data.species
         }
        res.status(200).json(detail);
    
     } catch (error) {
        res.status(500).send(error.message)
 }  
   
    
}

module.exports = getCharDetail;
