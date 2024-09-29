const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(value) {
            return validator.isMobilePhone(value, 'any', { strict: false }); // Validates as a phone number
          },
          message: props => `${props.value} is not a valid phone number!`
        }
      },
      
    address:{
        type:String,
        require:true
    }
})

// create a new Collection
const Student=new mongoose.model('Student',studentSchema);
module.exports=Student;