const express=require("express")
const app=express()
const cors=require("cors")
const username="swea"
const password="123"

app.use(cors())//to inegrate both frontend and backend

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/login",function(req,res)
{
    console.log(req.body.username);//post method will have data inside body while in get method it will be in the query
    if(req.body.username==username && req.body.password==password)
    {
        res.send(true)
    
    }
   else{
    res.send(false)
    
   }

})

app.listen(4000,function()
{
    console.log("server begins");
    
})