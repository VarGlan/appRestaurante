const express = require ("express");
const Producto = require("../models/Producto");
const Usuario = require ("../models/Producto");

const router = express.Router();

//CREAR PRODUCTO

router.post("/producto", (req, res)=>{
    const nuevoUsuario = Producto (req.body);

    nuevoProducto.save()
        .then((data)=>{
            console.log(data);
            res.json(data);
        })
        .catch((error)=>{
            console.error(error);
            res.json(error);
        })
});

router.get("/producto", (req, res)=>{
    Producto.find().select({nombreProducto: 1, descripcion: 1, precio: 1,_id: 0})
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.json(error);
    })
})
router.get ("/producto/:nombreProducto", (req,res)=>{
    const {nombreProducto} = req.params;
    Producto.findOne({nombreProducto:nombreProducto}).select({nombreProducto: 1, descripcion: 1, precio: 1,_id: 0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.json(error);
    })
    
})

/*router.put("/usuario/:nombreUsuario", (req, res)=>{
    const {nombreUsuario}=req.params;

    const nuevoNombreUsuario = req.body.nombreUsuario;
    const nuevoCorreo = req.body.correo;

    Usuario.updateOne({nombreUsuario:nombreUsuario}, {$set:{nombreUsuario:nuevoNombreUsuario, correo:nuevoCorreo}})
}) */

module.exports = router;
