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
app.post("/search",(req,res)=>{
    n=(req.body.name)
    name=n.toUpperCase()
    fun.searchname(name).then((emp)=>{
        res.status(emp.statuscode).json(emp.result)
    })
})
app.post("/sort",(req,res)=>{
    //console.log(req.body.option)
    fun.sortfun(req.body.option).then((data)=>{
        res.status(data.statuscode).json(data.result)
    })
})
app.listen(3000,()=>{
    console.log("server is up")
})