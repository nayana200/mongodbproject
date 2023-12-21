const mongoose = require("mongoose")

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number

    }
})

module.exports = mongoose.model("login", loginSchema)