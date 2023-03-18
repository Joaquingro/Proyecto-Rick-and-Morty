const express = require("express");
const server = express();
const router = require("../src/routes/index");
const cors = require("cors"); 
// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
};
server.use(cors(corsOptions));
server.use(express.json());


server.use("/", router);


// server.get("/rickandmorty/character/:id", async (req, res) => {
//     const {id} = req.params; 
//     try {
        
//         const response = await axios(URL + id)
//         const data = response.data; 
//             let char = 
//            { 
//             id: data.id,
//             name: data.name,
//             species: data.species,
//             gender: data.gender,
//             image: data.image
//         }
//         res.status(200).json(char);
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })

// server.get("/rickandmorty/detail/:detailId", async (req, res) => {
//     const {detailId} = req.params;

//     try {
//         const response = (await axios(URL + detailId)).data;
//            let detail = { 
                
//                 image: response.image,
//                 name: response.name,
//                 gender: response.gender,
//                 status: response.status,
//                 origin: response.origin.name,
//                 species: response.species
//             }
//            res.status(200).json(detail);
       
//         } catch (error) {
//            res.status(400).send(error.message)
//     }  
      
// })

// var favs = [];
// server.post("/rickandmorty/fav", (req, res) => {
//     let character = req.body
//         if(!character){
//             return res.status(400).json({
//                 error: "No se encontro el personaje indicado"
//             })
//         } else {
//             favs.push(character);
//             return res.status(200).send("Personaje agregado")
//         }
// })

// server.get("/rickandmorty/fav", (req, res) => {
//     if(favs.length){
//         return res.status(200).json(favs)
//     } else {
//         return res.status(404).json({error: "No hay personajes"})
//     }
// })

// server.delete("/rickandmorty/fav/:id", (req, res) => {
//     let {id} = req.params;
//     if(id){
//         let fav = favs.filter(f => f.id !== Number(id));
//         favs = fav;
//        return res.status(200).json({Exitoso: `El personaje con ${id} fue borrado exitosamente`})
//     } else{
//         return res.status(400).send("No hay id")
//     }
// })



server.listen(3001, () => {
    console.log("Raised on port 3001");
});






module.exports = server;