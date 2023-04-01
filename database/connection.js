const mongoose = require('mongoose')

const url = "mongodb+srv://nandinibhaskarreddy:nandinibhaskar@cluster0.u4osgvc.mongodb.net/ReactBlog?retryWrites=true&w=majority"

const connect = async () => {
    try{
        console.log("connecting to mongodb.....!!")
        const dbConn = await mongoose.connect(url)
        console.log("connected =>", dbConn)
    }
    catch(error){
        console.log("error in connecting db")
    }
}

module.exports = connect