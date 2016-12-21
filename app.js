const express = require('express')
const app = express()

//app.METHOD(path, handler)
app.get('/', function(req, res){
  res.send("Hello hey")
})

app.get('/api', (req, res) => {
  let stringifyed = JSON.stringify(products)
  res.send(stringifyed)
})

let products = [
  {id: 1, name: "Javascript Book", price: 9.99},
  {id: 2, name: "Christman Carol", price: 19.99},
]

app.get('/api/products/:id', (req, res) => {
  let id = Number(req.params.id)
  let product = products.find((element) => element.id === id)
  let stringifyed = JSON.stringify(product)
  res.send(stringifyed)
})

app.listen(3000, function(){
  console.log("listening an port 3000. Go to http://localhost:3000/")
})
