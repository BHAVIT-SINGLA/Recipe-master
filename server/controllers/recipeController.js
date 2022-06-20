const mongoose=require('mongoose');
const db=require('../models/db.js')
const Category=require('../models/category.js')

exports.homepage =async(req,res) =>{
    try{
        const numberofitems=6;
        const itemarr=await Category.find({}).limit(numberofitems);
        res.render('index',{title : 'Home',food:itemarr});
    }
    catch (error) {
        console.log('err', + error)
      }
   
}
/*
async function insertDymmyCategoryData(){
  try {
    await Category.insertMany([
      {
        "name": "Thai",
        "image": "thai-food.jpg"
      },
      {
        "name": "American",
        "image": "american-food.jpg"
      }, 
      {
        "name": "Chinese",
        "image": "chinese-food.jpg"
      },
      {
        "name": "Mexican",
        "image": "mexican-food.jpg"
      }, 
      {
        "name": "Indian",
        "image": "indian-food.jpg"
      },
      {
        "name": "Spanish",
        "image": "spanish-food.jpg"
      }
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertDymmyCategoryData();
*/