const express = require ("express");
const Categoria = require("../models/Categoria");
const Usuario = require ("../models/Categoria");

const router = express.Router();

//CREAR CATEGORIA

router.post("/categoria", (req, res)=>{
    const nuevaCategoria = Categoria (req.body);

    nuevaCategoria.save()
        .then((data)=>{
            console.log(data);
            res.json(data);
        })
        .catch((error)=>{
            console.error(error);
            res.json(error);
        })
});

router.get("/categoria", (req, res)=>{
    Categoria.find().select({nombreCategoria: 1, descripcion: 1, _id: 0})
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((error)=>{
        console.error(data);
        res.json(error);
    })
});

router.get ("/categoria/:nombreCategoria", (req,res)=>{
    const {nombreCategoria} = req.params;
    Categoria.findOne({nombreCategoria:nombreCategoria}).select({nombreCategoria: 1, descripcion: 1, _id: 0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.json(error);
    })
    
});

module.exports = router;

