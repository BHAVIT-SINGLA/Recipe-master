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
    //  console.log(recipe);
      res.render('recipe', { title: 'Cooking Blog - Recipe', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 
  exports.exploreCategory = async(req, res) => { 
    try {
      let name = req.params.name;
      console.log(name);
      const limitNumber = 20;
      const Category = await Recipe.find({ 'category': name }).limit(limitNumber);
      console.log(Category);
      res.render('categories', { title: 'Cooking Blog - Categoreis', Category } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 
  exports.searchRecipe = async(req, res) => {
    try {
      let searchTerm = req.body.searchTerm;
      let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
      res.render('search-result', { title: 'Cooking Blog - Search', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
    
  }
  exports.explorelatest =async(req,res) =>{
    try{
        const numberofitems=20;
        const latest = await Recipe.find({}).sort({_id: -1}).limit(numberofitems);
        res.render('latest',{title : 'All-Category',food:latest});

    }
    catch (error) {
        console.log('err', + error)
      }
   
}
exports.exploreRandom = async(req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let recipe = await Recipe.findOne().skip(random).exec();
    res.render('explore-random', { title: 'Cooking Blog - Explore Latest', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 