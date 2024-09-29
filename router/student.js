const express=require("express");
const Student=require("../db/model/student");
// create a router
const router=new express.Router();

// define a router
router.post("/student",async (req,res)=>{
    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
        
    }
  
});

router.get("/student",async(req,res)=>{
    try{
        const studentData=await Student.find();
        res.send(studentData);
    }
    catch(e){
        res.send(e);
    }
});

router.get("/student/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        console.log(studentData);

        if(!studentData){
            return res.status(404).send();
        }
        else{
            res.send(studentData);
        }

    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get("/student/:name",async(req,res)=>{
    try{
        const _name=req.params.name;
        const studentData=await Student.findOne({ name: _name });
        console.log(studentData);

        if(!studentData){
            return res.status(404).send();
        }
        else{
            res.send(studentData);
        }

    }
    catch(e){
        res.status(500).send(e);
    }
});

router.patch("/student/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateData=await Student.findByIdAndUpdate(_id,req.body,{
            new : true
        });
    
        res.status(200).send(updateData);
    }
    
    catch(e){
        res.status(404).send(e);
    }
});

router.delete("/student/:id", async(req,res)=>{
   try{
        const deleteData=await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(404).send();
        }
        res.send(deleteData);
   }
   catch(e){
        res.status(500).send(e);
   }
});

module.exports=router;

