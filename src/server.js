const express = require('express')
const path = require('path')
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
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home - PetsShop',
    })
})

app.get('/sobre', (req, res) => {
    res.render('sobre', {
        title: 'Sobre - PetShop',
    })
})

//open server
const port = process.env.port || 8085
app.listen(port, () => console.log(`Server is running at port ${port}`))