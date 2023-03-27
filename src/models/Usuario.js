const mongoose = require("mongoose")

const usuarioSchema = mongoose.Schema({
    nombreUsuario:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model("Usuario", usuarioSchema)