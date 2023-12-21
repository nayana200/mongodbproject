const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()

const formidable = require("express-formidable")
const data = require("../models/usermodel")
const login1 = require('../models/login')
const Product = require('../models/product')
// router.post('/register', async (req, res, next) => {
//     console.log(req.fields)
//     res.send("registered routers")
// })

router.post('/register', formidable(), async function (req, res) {

    let { firstname, lastname, email, phone, password } = req.fields
    if (!(firstname && lastname && email && phone && password)) {
        res.status(400).send("not provieded the valid the data")
    } else {
        if (await data.findOne({ email })) {
            res.send("user already exits")
        } else {
            const encpassword = await bcrypt.hash(req.fields.password, 10)
            const base = await data.create({
                firstname: req.fields.firstname,
                email: req.fields.email,
                password: encpassword,
                lastname: req.fields.lastname,
                phone: req.fields.phone
            })

            // const data2 = base.save()
            console.log(req.fields)
            res.status(200).send("database created successsfully")
        }

    }
})


router.post('/login', formidable(), async (req, res, next) => {
    res.send("login route")
    let { email, password } = req.fields
    if (!(email && password)) {
        res.status(400).send("not provieded the valid the data")
    } else {
        const base = login1.create({

            email: req.fields.email,
            password: req.fields.password,

        })
        // const data2 = base.save()
        res.status(200).send("database created successsfully")
    }
})

router.post('/products', formidable(), async (req, res) => {
    try {
        const newProduct = new Product(req.fields);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// router.post('/login', async (req, res, next) => {
//     res.send("login route")
// })

// router.post('/refresh-token', async (req, res, next) => {
//     res.send("registered refresh-token")
// })
// router.delete('/logout', async (req, res, next) => {
//     res.send("logout route")
// })

module.exports = router