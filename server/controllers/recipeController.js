const mongoose=require('mongoose');
const db=require('../models/db.js')
const Category=require('../models/category.js');
const Recipe=require('../models/recipe');

exports.homepage =async(req,res) =>{
    try{
        const numberofitems=5;
        const itemarr=await Category.find({}).limit(numberofitems);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(numberofitems);
        const indian = await Recipe.find({ 'category': 'Indian' }).limit(numberofitems);
        const thai = await Recipe.find({ 'category': 'Thai' }).limit(numberofitems);
        const american = await Recipe.find({ 'category': 'American' }).limit(numberofitems);
        const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(numberofitems);
        const spanish = await Recipe.find({ 'category': 'Spanish' }).limit(numberofitems);
       
        res.render('index',{title : 'Home',food:itemarr,latest: latest,indian: indian,thai:thai,chinese:chinese,spanish:spanish});
    }
    catch (error) {
        console.log('err ', + error)
      }
   
}
exports.allcategory =async(req,res) =>{
    try{
        const numberofitems=5;
        const itemarr=await Category.find({}).limit(numberofitems);
        res.render('category',{title : 'All-Category',food:itemarr});

    }
    catch (error) {
        console.log('err', + error)
      }
   
}

exports.exploreRecipe = async(req, res) => {
    try {
      let recipeId = req.params.id;
      const recipe = await Recipe.findById(recipeId);
      console.log(recipe);
      res.render('recipe', { title: 'Cooking Blog - Recipe', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 

 