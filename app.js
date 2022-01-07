const express = require('express')
const path = require('path')
const userRoutes = require('./routes/userRoutes')
// const { engine } = require('express-handlebars');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3980

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// app.engine('.hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
// app.set('view engine', '.hbs')
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('', userRoutes)

app.listen(PORT, ()=>console.log(`Listening to the PORT ${PORT}`))