const expressEjsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,
{
     useNewUrlParser: true,  
}).then(() =>{
    console.log("Connected");
}).catch((e) =>{
    console.log(e)
});

