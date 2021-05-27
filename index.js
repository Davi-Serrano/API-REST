var express = require('express')
var cors = require('cors')
var app = express()
var axios = require("axios")
 
app.use(cors())

app.get("/", async(req, res) => {
     
     const { data } = await axios("https://jsonplaceholder.typicode.com/users")
     return res.json(data)
})

app.listen(8000, ()=>{
    console.log("Servidor Rodando")
} )