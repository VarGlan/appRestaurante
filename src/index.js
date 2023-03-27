const express = require("express")
const mongoose = require("mongoose")
const usuarioRouter = require("./routes/usuario");
const categoriaRouter = require("./routes/categoria");
const productoRouter = require("./routes/producto");

//configuracion
const app = express();
const port = 4000;
const MONGODB_URI = "mongodb+srv://bgalan:unp2023_mdb@cluster0.etudule.mongodb.net/?retryWrites=true&w=majority"

//middlewares
app.use(express.json());
app.use("/api", usuarioRouter);
app.use("/api", categoriaRouter);
app.use("/api", categoriaRouter);

//conexion a mongodb
mongoose
        .connect(MONGODB_URI)
        .then(()=>console.log("Conectado a mongodb"))
        .catch((error)=>console.error(error));
        
//rutas
app.get("/", (req, res)=>{
    res.send("<h1>welcome</h1>")
})

//server
app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto", port);
})

