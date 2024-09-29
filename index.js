const express=require('express')
const dbConnection=require("./db/conn");
const Student=require("./db/model/student");
const studentRouter=require("./router/student");
const app=express()
const port=4000


app.use(express.json())
app.use(studentRouter);


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})








