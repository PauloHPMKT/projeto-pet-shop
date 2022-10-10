const mongoose = require('mongoose')

function dbConnection() {
  mongoose.connect('mongodb://localhost:27017/projeto-pet-shop')

  const db = mongoose.connection

  db.once('open', () => {
    console.log('connected to database')
  })

  db.on('error', console.error.bind(console, 'connection error'))
}

module.exports = {
  dbConnection
}
