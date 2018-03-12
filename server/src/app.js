
console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))// print logs
app.use(bodyParser.json())// read json requests
app.use(cors())// allow any host to access this

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})
app.listen(process.env.PORT || 8081)
