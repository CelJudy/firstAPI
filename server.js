const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //res.send("holi");
    //console.log(JSON.parse("{'body':{'clave':'prueba'}}"));
    res.json({body:{clave:'prueba'}})
});

app.listen(3000, (err) => {
    console.log("Listening on port 3000");
});

