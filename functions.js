const mongoose = require("mongoose");
async function saveData(req, res) {
    var f = new Date();
    var fecha=f.getFullYear()
    +"-"+(((f.getMonth()+1)<10)?'0'+(f.getMonth()+1):(f.getMonth()+1))
    +"-"+((f.getDate()<10)?'0'+f.getDate():f.getDate())+" "
    +((f.getHours()<10)?'0'+f.getHours():f.getHours())+":"
    +((f.getMinutes()<10)?'0'+f.getMinutes():f.getMinutes())+":"
    +((f.getSeconds()<10)?'0'+f.getSeconds():f.getSeconds());
    data = {
        temperatura:req.body.temperatura,
        humedad:req.body.humedad,
        distancia:req.body.distancia,
        fecha:fecha
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
    //res.send("fin");
    res.json({response:'OK'})
    //res.end(JSON.stringify(response));  
 }

 module.exports = { saveData };