const express = require('express')
const path = require('path')

const routes = require('./routes')

const app = express()

//defining template engine
app.set('view engine', 'ejs')


//setting path from static files
app.set('views', path.join(__dirname, 'views'))

//definning public files
app.use(express.static(path.join(__dirname, 'public')))

//habiliting server to receive form data
app.use(express.urlencoded({ extended: true }))


//defining routs
app.use('/', routes)

//error page not found 404
app.use((req, res) => {
    res.send('Page not found')
})


//open server
const port = process.env.port || 8085
app.listen(port, () => console.log(`Server is running at http://localhot:${port}`))