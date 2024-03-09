const express = require("express");
const app = express();
const functions = require("./functions");

//app.use(express.urlencoded({ extended: true })); //este middleware es para post de formularios
app.use(express.json());

app.get("/", (req, res) => {
    //res.send("holi");
    //console.log(JSON.parse("{'body':{'clave':'prueba'}}"));
    res.sendFile(__dirname+"/index.html");
});

app.get("/api", (req, res) => {
    //res.send("holi");
    //console.log(JSON.parse("{'body':{'clave':'prueba'}}"));
    res.json({body:{clave:'prueba'}})
});

app.get("/mongo", (req, res) => {
    res.send("aqui va lo de mongo");
}); 

app.post('/saveData', functions.saveData) 

app.post("/apiP", (req, res) => {
    //console.log(req);
    res.json({clave:'hola mundo'})
});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});

