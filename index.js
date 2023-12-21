const express = require("express")
const morgan = require("morgan")
const createError = require("http-errors")
require('dotenv').config()
const bodyParser = require('body-parser');
require("./helpers/initmongodb")
//const User = require('./models/usermodel')
const aurthroute = require("./routes/aurthrouter")
const app = express()


app.use(morgan('dev'))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', async (req, res, next) => {
    res.send("hello from express")
})

app.use('/auth', aurthroute)

app.use(async (req, res, next) => {
    next(createError.NotFound("This route not exists"))
})

app.use(async (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on ${PORT}`))



