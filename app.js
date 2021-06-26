const express = require("express")
const app = express()
const data = require("./data.json")
const cors = require('cors')
const port = process.env.PORT || 8080

app.use(cors())

app.listen(port, () => {
    console.log("Server running...")
})

app.get("/data", (req, res, next) => {   
    res.json(data)
})