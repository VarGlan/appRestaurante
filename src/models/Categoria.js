const mongoose = require("mongoose")

const categoriaSchema = mongoose.Schema({
    nombreCategoria:{
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Categoria", categoriaSchema)