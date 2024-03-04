const mongoose = require("mongoose");
async function saveData(req, res) {
    data = {
        temperatura:req.body.temperatura,
        humedad:req.body.humedad,
        distancia:req.body.distancia,
    };
    const mongoUrl ="mongodb+srv://celjudy:12345@cluster0.v7kwofr.mongodb.net/sensores?retryWrites=true&w=majority&appName=Cluster0";
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    const lecturasSchema = new mongoose.Schema({
        temperatura:Number,
        humedad:Number,
        distancia:Number,
    },{ versionKey: false }); //para que no inserte el campo __v

    const lecturas = mongoose.model("lecturas", lecturasSchema);

    await lecturas.create(data);

    console.log(data);  
    res.send("fin");
    //res.end(JSON.stringify(response));  
 }

 module.exports = { saveData };