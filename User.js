const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required: true
    },
    DateofJoining:{
        type:String,
        default:Date.now
    },
    email:{
        type:String,
        required:true
    },
    password:{
      type:String,
      required:true
    },
    Achievements:{
        type: String,
        
    }
    
})

module.exports = mongoose.model('User',UserSchema);