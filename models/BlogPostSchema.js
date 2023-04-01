const mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
    title : String,
    content : String,
    content1 : String,
    publishedAt : String,
    author : String,
    created : Date
})

const  Home = mongoose.model("Home", PostSchema)
const  Bollywood = mongoose.model("Bollywood", PostSchema)
const  Hollywood = mongoose.model("Hollywood", PostSchema)
const  Technology = mongoose.model("Technology", PostSchema)
const  Fitness = mongoose.model("Fitness", PostSchema)
const  Food = mongoose.model("Food ", PostSchema)



module.exports = {Home,Bollywood,Hollywood,Technology,Fitness,Food }