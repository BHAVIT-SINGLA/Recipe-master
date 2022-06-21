const express =require('express');
const router =express.Router();

const recipeController =require('../controllers/recipeController');

router.get('/', recipeController.homepage);
router.get('/category', recipeController.allcategory);
router.get('/category/:name', recipeController.exploreCategory );
router.get('/recipe/:id', recipeController.exploreRecipe );
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.explorelatest);


module.exports = router;