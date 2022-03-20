const db = require("./app")

const viewdata=()=>{
    return db.Empdetails.find({}).populate('id')
    .then((result)=>{
        console.log(result)
        return{
            statuscode: 200,
            result
        }
    })
    // return db.Emplist.find()
    // .then((result)=>{
    //     return {
    //         statuscode: 200,
    //         result
    //     }
    // })
}


// const searchname=(name)=>{
//     console.log("searchname : ",name)
//     return db.Emplist.findOne({emp_name:name})
//     .then((result)=>{
//         return {
//             statuscode: 200,
//             result
//         }
//     })
// }
// const sortfun=(val)=>{
//     return db.Emplist.find()
//     .sort({val:-1})
//     .then((result)=>{
//         //console.log(result)
//         return{
//             statuscode: 200,
//             result
//         }
//     })
//  }
module.exports = {
    viewdata,
    //searchname,
    //sortfun
}