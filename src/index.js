const express = require('express')
const materialRoute = require('./routes/material.route')

const app = express()
app.use(express.json())

app.use('/materials', materialRoute)

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 8087

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})