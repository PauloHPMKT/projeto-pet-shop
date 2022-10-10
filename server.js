const app = require('./src/app')

//open server
const port = process.env.PORT || 8085
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))