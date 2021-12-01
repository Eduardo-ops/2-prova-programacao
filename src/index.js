const express = require('express')
const teamRoute = require('./routes/team.route')

const app = express()
app.use(express.json())

app.use('/api/v1/', teamRoute)

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 8087

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})