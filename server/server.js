require('dotenv').config();

const app = require('./app')

const port = process.env.MONGODB_URL || 3000

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})