const express= require("express")
require("dotenv").config()
const mongoose = require('mongoose');
const app =express()
const port=process.env.port || 8000
console.log(process.env.mongourl)

   mongoose.connect(process.env.mongourl).then(()=>console.log('data base connection')).catch((error)=>console.log(error))
 
 

 const { Schema } = mongoose;

 const personschema = new Schema({
   name: {type:String,required:true}, // String is shorthand for {type: String}
   age:Number,
   email:  {type:String,lowercase:true,trim:true},
   date: { type: Date, default: Date.now },
   role:{type:String,enum:['admin','client','superadmin'], default:"client"},
   favoriteFood:[String]
 })
 const personmodel = mongoose.model('users', personschema);
//  personmodel.create([{name:'youssef',email:"youe@gmail.com",favoriteFood:['orata','9arous'],},{name:'nidha',date:"08-03-2022"}], function (err, small) {
//     if (err)  {return console.log(err)} else {return console.log('document')}
//  })
// const person = new personmodel({ name:'chabeen', taille:100 });
// person.save(function (err) {
//   if (err){ return console.log(err)}
//   else
//   {
//     return console.log('saved')
//   };
//   // saved!
// });
// personmodel.findOne({ favoriteFood:['orata','9arous'] }, function (err, data) {
//     if (err){
//         return console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// });
personmodel.findByIdAndUpdate('6332dee66b37856228870aa6', { $set: { name: 'jason bourne' }},  (err,data)=>{
    if (err){
                return console.log(err)
            }
            else{
                console.log(data)
            }

})











app.listen(port,(error)=>error ? console.log(error) : console.log(`server is running on port ${port}`) )