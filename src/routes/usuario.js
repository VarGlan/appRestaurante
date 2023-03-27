const express = require ("express")
const Usuario = require ("../models/Usuario");
const bcrypt = require("bcryptjs");

const router = express.Router();

//CREAR ENCRIPTADO

async function encriptar (password){
    let passwordHash = await bcrypt.hash(password, 8);

    return passwordHash;
}

async function comparar (password, passwordHash){
    var esIgual = await bcrypt.compare (password, passwordHash);

    return esIgual;
}

async function encriptar2(password){
    let salt = await bcrypt.genSalt(8);
    var passwordHash = await hash(password, salt);

    return passwordHash;
}

//FUNCION LOGIN 
router.post("/usuario/login", async (req, res)=>{
    const usuarioLogin = req.body;

    const usuarioBD = await Usuario.findOne({nombreUsuario:usuarioLogin.nombreUsuario});

    if (usuarioBD !=null){
        let valido = await comparar(usuarioLogin.password, usuarioBD.password);

        if (valido)
            res.send("login exitoso");
        else
            res.send("Usuario o contraseña no valido");
    }
    else
     res.send("Usuario o contraseña no valido");
});

//CREAR USUARIO

router.post("/usuario", async (req, res)=>{
    const nuevoUsuario = Usuario (req.body);

   nuevoUsuario.password = await encriptar(nuevoUsuario.password);

    nuevoUsuario.save()
        .then((data)=>{
            console.log(data);
            res.json(data);
        })
        .catch((error)=>{
            console.error(error);
            res.json(error);
        })
});

router.get("/usuario", (req, res)=>{
    Usuario.find().select({nombreUsuario: 1, correo: 1, _id: 0})
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.json(error);
    })
});
//API PARA OBTENER UN SOLO USUARIO
router.get ("/usuario/:nombreUsuario", (req,res)=>{
    const {nombreUsuario} = req.params;
    Usuario.findOne({nombreUsuario:nombreUsuario}).select({nombreUsuario: 1, correo: 1, _id: 0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.json(error);
    })
});

//API PARA CREAR UN REGISTRO
router.put("/usuario/:nombreUsuario", (req, res)=>{
    const {nombreUsuario}=req.params;

    const nuevoNombreUsuario = req.body.nombreUsuario;
    const nuevoCorreo = req.body.correo;

    Usuario.updateOne({nombreUsuario:nombreUsuario}, {$set:{nombreUsuario:nuevoNombreUsuario, correo:nuevoCorreo}})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console.log(error);
        res.json(error);
    })
})

//API PARA BORRAR UN REGISTRO
router.delete("/usuario/:nombreUsuario", (req, res)=>{
    const {nombreUsuario}=req.params;
    Usuario.deleteOne({nombreUsuario:nombreUsuario})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console.log(error);
        res.json(error);
    });
});

module.exports = router;

