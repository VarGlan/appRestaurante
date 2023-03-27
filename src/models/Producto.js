const mongoose = require("mongoose")

const productoSchema = mongoose.Schema({
    nombreProducto:{
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: false
    },

    precio: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Producto", productoSchema)