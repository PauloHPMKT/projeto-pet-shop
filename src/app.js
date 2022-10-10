const express = require('express')
const path = require('path')
const app = express()

const routes = require('./routes')
const db = require('./db')


//defining template engine
app.set('view engine', 'ejs')

//db connection
db.dbConnection()

//setting path from static files
app.set('views', path.join(__dirname, 'views'))

//definning public files
app.use(express.static(path.join(__dirname, 'public')))

//habiliting server to receive form data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//defining routs
app.use('/', routes)

//error page not found 404
app.use((req, res) => {
    res.send('Page not found')
})

module.exports = app