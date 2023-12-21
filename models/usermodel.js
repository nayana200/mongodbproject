const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,

    }

})

const User = mongoose.model('user', userSchema)
module.exports = User

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const Schema = mongoose.Schema
// const userSchema = new Schema(
//     {
//         firstName: {
//             type: String,
//             required: true,
//             trim: true,
//             min: 3,
//             max: 20,
//         },
//         lastName: {
//             type: String,
//             required: true,
//             trim: true,
//             min: 3,
//             max: 20,
//         },
//         username: {
//             type: String,
//             required: true,
//             trim: true,
//             unique: true,
//             index: true,
//             lowercase: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             trim: true,
//             unique: true,
//             lowercase: true,
//         },
//         hash_password: {
//             type: String,
//             required: true,
//         },
//         role: {
//             type: String,
//             enum: ["user", "admin", "super-admin"],
//             default: "user",
//         },
//         contactNumber: { type: String },
//         pofilePicture: { type: String },
//     },
//     { timestamps: true }
// );

// userSchema.virtual('password')
//     .set(function (password) {
//         this.hash_password = bcrypt.hash(password, 10);
//     });

// userSchema.virtual("fullName").get(function () {
//     return `${this.firstName} ${this.lastName}`;
// });

// userSchema.methods = {
//     authenticate: async function (password) {
//         return await bcrypt.compare(password, this.hash_password);
//     },
// };

// const User = mongoose.model("User", userSchema);
// module.exports = User

