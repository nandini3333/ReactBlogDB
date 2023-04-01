const express = require('express')
const Router = require('./routes/Bollywood')
const connect = require('./database/connection')
const cors = require('cors')
const body_parser = require('body-parser')
const app = express()

app.use(cors({
    origin:"*"
}))
app.use(body_parser.json())


app.use("/",Router)

app.listen(4500, async () => {
    console.log("server is running at port 4500")
    await connect()
})