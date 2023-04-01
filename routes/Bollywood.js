const express = require('express')
const BlogController = require('../controllers/BlogPostController')

const router = express.Router()

router.post("/bollywood", BlogController.BollyDataInsert)
router.get("/home", BlogController.HomeData)
router.get("/bollywood", BlogController. BollyDataFind )
router.get("/hollywood", BlogController. HollywoodData )
router.get("/technology", BlogController.TechnologyData )
router.get("/fitness", BlogController. FitnessData )
router.get("/food", BlogController. FoodData )

module.exports = router