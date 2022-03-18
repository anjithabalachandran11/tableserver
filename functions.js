const db = require("./app")

const viewdata=()=>{
    return db.Emplist.find()
    .then((result)=>{
        return {
            statuscode: 200,
            result
        }
    })
}
const searchname=(name)=>{
    return db.Emplist.find({emp_name:name})
    .then((result)=>{
        return {
            statuscode: 200,
            result
        }
    })
}
module.exports = {
    viewdata,
    searchname
}