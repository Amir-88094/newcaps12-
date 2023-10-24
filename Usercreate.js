const express = require('express');
const router = express.Router();
const User = require('../Schema/User');
const {body, validationResult} =  require('express-validator'); 


router.post("/createuser",[
    body('email').isEmail().withMessage('please Enter valid email'),
    body('name').isLength({min : 5}),
    body('password', 'Incorrect password').isLength({min : 5})

]
, async (req,res) =>{
      // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }



    // ye validation se ek dum alag hai 
   try{
   await User.create({
        name:"B.R. Reddy",
        branch:" Computer Science",
        DateofJoining:"",
        email:"amir@gmail.com",
        password:"123456",
        Achievements:"Gold Medalist from california University"
    }).then(res.json({success : true }))
    res.send("user registration successfully");

   }
   catch(err){
    res.send("registration failed");
    res.json({success : false})

   }
})

module.exports = router;
