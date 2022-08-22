const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()

//static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`running on port ${PORT}`))