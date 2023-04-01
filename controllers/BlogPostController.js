const {Home,Bollywood,Hollywood,Technology, Fitness, Food} = require('../models/BlogPostSchema')


const BollyDataInsert = async (req,res) => {
    const BollywoodData = req.body
    try{

        const BollywoodDataDoc = new  Bollywood({
            title : BollywoodData.title,
            content : BollywoodData.content,
            content1 : BollywoodData.content1,
            publishedAt : BollywoodData.publishedAt,
            author : BollywoodData.author,
            urltoImage : BollywoodData.urltoImage,
            url : BollywoodData.url,
            created : Date.now()
        })

        const dbResponse = await BollywoodDataDoc.save()
        console.log("Data is saved", dbResponse)
        return res.status(200).send(dbResponse)
    } catch(error){
        console.log("Error while operating on db =>", error.message)
        return res.status(500).send({ message: "Error while operating on db" })
    }

}

const HomeData = async (req,res) => {
    try{
        const result = await Home.find({})
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something wrong in db operations", error)
        return res.status(500).send({ message: "something wrong in db operations" })
    }  
}

const BollyDataFind = async (req,res) => {
    try{
        const result = await Bollywood.find({})
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something wrong in db operations", error)
        return res.status(500).send({ message: "something wrong in db operations" })
    }
}

const HollywoodData = async (req,res) => {
    try{
        const result = await Hollywood.find({})
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something wrong in db operations", error)
        return res.status(500).send({ message: "something wrong in db operations" })
    }  
}

const TechnologyData = async (req,res) => {
    try{
        const result = await Technology.find({})
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something wrong in db operations", error)
        return res.status(500).send({ message: "something wrong in db operations" })
    }  
}

const FitnessData = async (req,res) => {
    try{
        const result = await Fitness.find({})
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something wrong in db operations", error)
        return res.status(500).send({ message: "something wrong in db operations" })
    }  
}

const FoodData = async (req,res) => {
    try{
        const result = await Food.find({})
        console.log(result)
        return res.status(200).send(result)
    }
    catch(error){
        console.log("something wrong in db operations", error)
        return res.status(500).send({ message: "something wrong in db operations" })
    }  
}

module.exports = {HomeData,BollyDataInsert,BollyDataFind,HollywoodData,
                  TechnologyData,FitnessData,FoodData }