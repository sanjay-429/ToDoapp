const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();
const port= 4000 ;
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true, useUnifiedTopology: true});


const userSchema = new mongoose.Schema({
    mail: String,
    pass: String,
    phone: Number
  });
  //usermodel
  const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(express.json());

app.post('/register', async(req,res)=>{
    const {email, pass, phone}=req.body;
    const user=await User.findOne({email}).exec();
    if(!user){
      res.status(403);
      res.json({
        message:"Invalid user ",
      })
      return;
    }
  
   res.json({
    "message":"success",
   });
  })
  app.post('/login', async(req,res)=>{
    const {email, pass, phone}=req.body;
    const user=await User.findOne({email}).exec();
    if(user){
      res.status(500);
      res.json({
        message:"user already exixt",
      })
      return;
    }
    await User.create({email,pass,phone});
   res.json({
    "message":"success",
   });
  })

  
  app.listen(port,()=>{
    console.log(`example app listening at http//localhost${port}`);
  })
//   const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
 
// });