const express = require('express')
const app = express()

//app.METHOD(path, handler)
app.get('/', function(req, res){
  res.send("Hello bitches")
})

app.get('/api', (req, res) => {
  let products = [
    {name: "Javascript Book", price: 9.99},
    {name: "Christman Carol", price: 19.99},
  ]
  let stringifyed = JSON.stringify(products)
  res.send(stringifyed)
})

app.listen(3000, function(){
  console.log("listening an port 3000. Go to http://localhost:3000/")
})
