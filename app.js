const { handle } = require('express/lib/application')
const mongoose = require('mongoose')
const validator = require('validator') 

mongoose.connect('mongodb://localhost:27017/db1',{ useNewUrlParser : true})

const Emplist = mongoose.model('Emplist',{
    emp_id : {
        type :  Number,
        required : true,
        minLength : 4,
    },
    emp_name : {
        type : String,
        uppercase : true,   //convert input into uppercase
        trim : true,   //trim white spaces
        required : true
    },
    password : {
        type : String,
        required : true,
        minLength: 7,
        trim : true,
    },
    emp_salary : {
        type : Number,
        default : 0,        //set default value to 0 in no value provided
    },
    department : {
        type : String,
        uppercase : true
    },
    emp_status : {
        type : String,
        uppercase : true,
    } 
})

const Empdetails = mongoose.model('Empdetails',{
    id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Emplist
    },
    empid : {
        type : Number,
    },
    emp_name : {
        type : String,
        uppercase : true
    },
    age : {
        type : Number
    },
    place : {
        type : String,
        uppercase : true
    }

})
module.exports = {
    Emplist,
    Empdetails

}

// Emplist.find().sort(emp_name).then((result)=>{
//     console.log(result)
// })
// Empdetails.find({}).populate('id')
// .exec((err,result)=>{
//     console.log(result)
// })

// const newemplist = new Emplist({
//     emp_id : 1012,
//     emp_name : "Rahana",
//     password : "rahana007",
//     //emp_salary : 30000,
//     department : "QA",
//     emp_status : "INACTIVE"
// }) 
// const newempdetails = new Empdetails({
//     id: newemplist._id,
//     empid : newemplist.emp_id,
//     emp_name : newemplist.emp_name,
//     age : 55,
//     place : "KTM"

// })
// newempdetails.save()
// newemplist.save()



// const newemp = new Contact({
//     emp_id : 1107,
//     emp_name : 'JKL',
//     password : "remv564", 
//     emp_salary : 13000,
//     department : 'SW'
// })
//  newemp.save().then((result)=>{
//     console.log(result)
//  }).catch((Error) =>{
//      console.log(Error)
//  })
// Contact.findByIdAndUpdate('62187c63b34099d004a76ed4',{department :'CSE'}).then((result) => {
//     console.log(result)
//     return Contact.countDocuments()
// }).then((c)=>{
//     console.log(c)
// }).catch((e)=>{
//     console.log(e)
// })
// Contact.findOneAndDelete('621c5c3e71943dd6832b24cd').then((result) => {
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })
// const updateageandcount = async (id,department) => {
//     const user = await Contact.findByIdAndUpdate(id,{department})
//     const count = await Contact.countDocuments({department})
//     return count
// }
// updateageandcount('621c5c91e2d32184ba70305a','CSE').then((count)=>{
//     console.log(count)
// }).catch((error)=>{
//     console.log(error)
// })