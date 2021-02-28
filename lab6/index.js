const express = require('express')
const app = express()
const port = 45030

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

const objectExample = {
    firstName: 'Omar',
    favoriteColor: 'Red'
}

app.get("/person", (req, res) => {
    res.json(objectExample);
})