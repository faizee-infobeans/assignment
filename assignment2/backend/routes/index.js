var express = require('express');
var mysql = require('mysql')
var router = express.Router();

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
var db = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"password",
  database:"test_db"
})

db.connect((err)=>{
  if(err) throw err
  console.log("connection sucessfully");
})

var users = [{
  email:"admin@gmail.com",password:"admin"
}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello home page")
});

// router.get('/register', function(req, res, next) {
//   const username = "admin";
//   const password = "admin";

//   db.query("INSERT INTO login (username , password) VALUES (?,?)",[username,password],(err,result)=>{
//     console.log(err)
//   });
// });

router.post('/',(req,res,next)=>{
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM login WHERE username =? AND password =?",[username,password],(err,result)=>{
    if(err){
      res.send({err:err})
    }
    if(res.length < 0){
      res.send(result)
      console.log(result);
    }
    else{
      res.send( {message:"wrong username and password"})
    }
  })
})

module.exports = router;
