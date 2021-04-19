var connection = require('./../config');
const express = require("express");
const app = express();

var eID;
//const cors = require("cors");
//const http = require('http');
//var router = require('express').Router();
//const port = process.env.PORT || 8000


// app.use(cors());
// app.use(express.json());

module.exports.authenticate=function(req,res){
    eID=req.body.eID;
    var password=req.body.password;
    
    connection.query('SELECT * FROM employee WHERE EmpID = ?',[eID], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password==results[0].password){
                res.json({
                    status:true,
                    message:"successfully authenticated"
                });
                
            }else{
                res.json({
                  status:false,
                  message:"eid and password does not match"
                 });
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"eid does not exits"
          });
        }
      }
    });
    
    /*router.get("/role", (req, res) => {
      db.query(`select roleEmployee(${eID}) as role`, (err, res1) => {
        if (err) {
          console.log(err);
        } else {
          if(res1[0].role==='Member'){      
              res.send("0");
          }
          if(res1[0].role==='Leader'){      
              res.send("1");
          }
          if(res1[0].role==='Manager'){     
              res.send("2");
          }   
    }
    });
    });*/ 
}
/*app.listen(port, () => {
    console.log("Server is running on 8000");
  //   const attendance_perc = absent ;
  // console.log(attendance_perc);
  });*/
  console.log(eID);
  module.exports.eID;