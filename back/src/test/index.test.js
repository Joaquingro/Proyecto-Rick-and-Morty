const server = require('../server');
const session = require('supertest');
const agent = session(server);
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");


describe("Test de RUTAS",  () => {
    describe("GET rickandmorty/:id", () => {
    it("Responde con status 200", () => {
    agent.get('/rickandmorty/1').expect(200);
    });
    
    it("Responde un objeto con las propiedades: id, name, species, gender e image", async () => {
        agent.get("/rickandmorty/1").expect(200).end(async (err, res) => {

        const response = await getCharById(res.req, res.res);
       
        const data = response.data;
        expect(Object.keys(data)).toContain('id');
        expect(Object.keys(data)).toContain('name');
        expect(Object.keys(data)).toContain('species');
        expect(Object.keys(data)).toContain('gender');
        expect(Object.keys(data)).toContain('image');
    
     });
        
  });
       
    it("Si hay un error responde con status: 500", ()=> {
        agent.get('/rickandmorty/9999').expect(500);
         
    });

    })
})


describe("Test de RUTAS",  () => {
    describe("GET rickandmorty/:detailId", () => {
    it("Responde con status 200", () => {
    agent.get('/rickandmorty/1').expect(200);
    });
    
    it("Responde un objeto con las propiedades: image, name, gender, status, species", async () => {
        agent.get("/rickandmorty/1").expect(200).end(async (err, res) => {

        const response = await getCharDetail(res.req, res.res);
       
        const data = response.data;
        expect(Object.keys(data)).toContain('image');
        expect(Object.keys(data)).toContain('name');
        expect(Object.keys(data)).toContain('gender');
        expect(Object.keys(data)).toContain('status');
        expect(Object.keys(data)).toContain('species');
    
     });
        
  });
       
    it("Si hay un error responde con status: 500", ()=> {
        agent.get('/rickandmorty/9999').expect(500);
         
    });

    })
})