const fun = require("./functions")
const express=require('express')
const app=express()
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin:'http://localhost:4200'
}))
app.get("/display",(req,res)=>{
    fun.viewdata().then((data)=>{
         res.status(data.statuscode).json(data.result)
    })
})
// app.get("/search",(req,res)=>{
//     console.log("req body params:",req.body.params)
//     n=(req.params.name)
//     name=n.toUpperCase()
//     console.log("name : ",name)
//     fun.searchname(name).then((emp)=>{
//          res.status(emp.statuscode).json(emp.result)
//     })
// })
// app.get("/sort/",(req,res)=>{
//     console.log(req.params.by)
//     fun.sortfun(req.params).then((data)=>{
//         res.status(data.statuscode).json(data.result)
//     })
// })
app.listen(3000,()=>{
    console.log("server is up")
})