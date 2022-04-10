const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home - PetShop',
    })
})

router.get('/sobre', (req, res) => {
    res.render('sobre', {
        title: 'Sobre - PetShop'
    })
})

router.get('/services', (req, res) => {
    res.render('services', {
        title: 'Services - PetShop'
    })
})

router.get('/gallery',(req, res) => {
    res.render('gallery', {
        title: 'Gallery - PetShop'
    })
})


module.exports = router