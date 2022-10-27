const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/image', (req, res) => {
    let imagePath = path.join(__dirname, '..', 'image.png');
    res.sendFile(imagePath)
})

app.get('/dynamicimage', (req, res) => {
    console.log(req.query.id)
    // let imagePath = path.join(__dirname, '..', 'image.png');
    // res.sendFile(imagePath)
    res.send('Todo')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})