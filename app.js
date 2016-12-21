const express = require('express')
const app = express()

//app.METHOD(path, handler)
app.get('/', function(req, res){
  res.send("Hello world")
})

app.listen(3000, function(){
  console.log("listening an port 3000. Go to http://localhost:3000/")
})
