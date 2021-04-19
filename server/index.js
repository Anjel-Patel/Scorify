const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const http = require('http');
const moment = require("moment");
// import moment from 'moment';
const port = process.env.PORT || 8000
const eID = 1001;
app.use(cors());
app.use(express.json());

const queryList = require("./query");
// const { json } = require("body-parser");
const [getProjectinfo,getCurrentScore,getScoreHistory,getAbsentDays,getPresentDays,getTeamMates,getTotalScore,getPersonalInfo,getStats,getPhoneNumers,getLeaderboard,getFullName,getDepartment,getCurrentRecordMembers,getCurrentRecordLeaders,getDateLeader,
  getLUWeekNoLeader,getLUWeekNoManager,getDateManager,getDeptInfo,getProjDept] = queryList(eID);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "scorify",
    multipleStatements : true
  });

  // app.post("/authenticate", (req, res) => {
  //   var eID=req.body.eID;
  //   var password=req.body.password;



  app.put("/insertemployee", (req, res) => {
    const {infohalf :{firstName,lastName,emailId, DateOfBirth, Sex ,address,projectName}} = req.body;
    deptId=21;
    const dob =moment(DateOfBirth,['DD-MM-YY','DD-MM-YYYY','DD/MM/YY','DD/MM/YYYY']).format("YYYY-MM-DD");
    const s = Sex.charAt(0).toUpperCase();

    if(projectName.length === 0){
      db.query("INSERT INTO employee (fname,lname,dateofbirth,sex,address,emailid,password,deptid) VALUES (?, ?, ?, ?, ?,? ,?, ?) ",
        [firstName,lastName,dob,s,address,emailId,101000,deptId],
        (err, result) => {
          if (err)
            console.log(err);
        }
      );}
    else
    {
      db.query(`select projectid  as id from project where projectname = ${projectName}`,(err,result) =>
      {
          if (err) {
            console.log(err);
          } else {
            let projectId=result[0].id;

            db.query("INSERT INTO employee (fname,lname,dateofbirth,sex,address,emailid,password,projectID,deptid) VALUES (?, ?, ?, ?, ?,? ,?, ?) ",
          [fname,lname,dob,s,address,emailId,101000,projectId,deptId],
          (err, result) => {
            if (err)
              console.log(err);
            }
          );
        }
      });
    }

  });

  app.get("/data", (req, res) => {
    db.query(`select concat(fname,' ',lname) as name from employee where projectId is null and deptid = (select deptid from department where managerId = ${eID}) and empid not in (select managerid from department);`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let arr = result.map((dict,i) => dict['name']);
        res.write(JSON.stringify(arr));
      }
    });
    db.query(` select projectname as projectName from project where deptid =(select deptid from department where managerid = ${eID})`, (err, result2) => {
      if (err) {
        console.log(err);
      } else {
        let arr = result2.map((dict,i) => dict['projectName']);
        res.write("   "+JSON.stringify(arr));
      }
    });

    db.query(`select fname from employee where empid= ${eID}`, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.write("   "+JSON.stringify(result[0]),() =>{
            res.end();
        });
        }
      });


  });

  app.get("/revenue", (req, res) => {

    db.query(`select revenue from project where leaderid = ${eID}`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result[0]);
      }
    });
  });

  app.get("/deptdashboard", (req, res) => {
    db.query(getDeptInfo, (err, res1) => {
      if (err) {
        console.log(err);
      } else {
          res.write(JSON.stringify(res1[0]));
        }
      });
        db.query(getProjDept, (err, res2) => {
        if (err) {
          console.log(err);
        } else {
          res.write("   "+JSON.stringify(res2));
        }
      });

      db.query(`select fname from employee where empid= ${eID}`, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.write("   "+JSON.stringify(result[0]),() =>{
            res.end();
        });
        }
      });


    });

  app.post("/updatedrecords", (req, res) => {

    const {curDate, scoreDict, records, rstate} = req.body;//rstate for manager/leader
    const selectedDate =moment(curDate,"DD/MM/YY").format("YYYY-MM-DD");
    // console.log(selectedDate);
    const empIDlist = Object.keys(scoreDict);
    for (empID of empIDlist)
    {
      console.log(records[empID]['attendance']);
      if(records[empID]['attendance']===0)
      {
        db.query(
          "INSERT INTO absences (empid, date) VALUES (?, ?) on duplicate key update empid = ?, date = ?",
          [empID,selectedDate,empID,selectedDate],
          (err, result) => {
            if (err) {
              console.log(err);}
            // } else {
            //   res.send("Values Inserted");
            // }
          }
        );
        db.query(
          "delete from overtime  where empID = ? and date = ?",
            [empID,selectedDate],
            (err, result) => {
              if (err) {
                console.log(err);}
              // } else {
              //   res.send("Values Inserted");
              // }
            }
          );
      }
      else
      {
        if(records[empID]['overtimeHours'] !=='0' && records[empID]['overtimeHours'] !=='-')
        {
          const overtime = parseInt(records[empID]['overtimeHours']);
          db.query(
            "INSERT INTO overtime (empid, date, overtime) VALUES (?, ?, ?) on duplicate key update overtime = ?",
            [empID,selectedDate,overtime,overtime],
            (err, result) => {
              if (err) {
                console.log(err);}
              // } else {
              //   res.send("Values Inserted");
              // }
            }
          );
        }
        else
        {
          db.query(
            "delete from overtime  where empID = ? and date = ?",
              [empID,selectedDate],
              (err, result) => {
                if (err) {
                  console.log(err);}
                // } else {
                //   res.send("Values Inserted");
                // }
              }
            );
        }
        db.query(
          "delete from absences  where EmpID = ? and date = ?",
            [empID,selectedDate],
            (err, result) => {
              if (err) {
                console.log(err);}
              // } else {
              //   res.send("Values Inserted");
              // }
            }
          );
      }
    }
    let query = rstate===1?getLUWeekNoLeader: getLUWeekNoManager;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        // console.log(result[0].weekNo);
        const weekNo= parseInt(result[0].weekno)+1;
        for(empID of empIDlist)
        {
         if(scoreDict[empID]!=='-' && scoreDict[empID]!=='0'){
            const score = parseInt(scoreDict[empID]);
            db.query(
              "INSERT INTO weekly_score (EmpID, weekno,Satisfaction_Score) VALUES (?, ?, ?) on duplicate key update Satisfaction_Score = ?",
              [empID,weekNo,score,score],
              (err, result) => {
                if (err) {
                  console.log(err);}
                // } else {
                //   res.send("Values Inserted");
                // }
              }
            );
          }
          else{
            db.query(
              "delete from weekly_score where EmpID = ? and weekno = ?",
                [empID,weekNo],
                (err, result) => {
                  if (err) {
                    console.log(err);}
                  // } else {
                  //   res.send("Values Inserted");
                  // }
                }
              );
            }
        }
      }
    });

  });

  app.get("/currentrecords", (req, res) => {
    db.query(`select roleEmployee(${eID}) as role`, (err, res1) => {
      if (err) {
        console.log(err);
      } else {

        let query1 = res1[0].role=='Leader' ? getCurrentRecordMembers: getCurrentRecordLeaders;
        let query2 = res1[0].role=='Leader' ? getDateLeader: getDateManager;
        db.query(query1, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.write(JSON.stringify(result));
        }
      });
      // console.log(query2);
        db.query(query2, (err, result) => {
        if (err) {
          console.log(err);
        } else {

          // console.log(JSON.parse(JSON.stringify(result)));
          let dob =moment(result[0].date).format("DD/MM/YY");
          // console.log(dob);
          let dates = [];
          for(let i = 1;i<=7;i++){
            let d = moment(dob, "DD/MM/YY").add(i,'days');
            dates.push(moment(d).format("DD/MM/YY"));
          }
          res.write("   "+JSON.stringify(dates));
        }
      });

      db.query(`select fname from employee where empid= ${eID}`, (err, result) => {
        if (err) {
          console.log(err);
        } else {

          res.write("   "+JSON.stringify(result[0]),() =>{
            res.end();
        });
        }
      });

    }});

  });

  app.get("/leaderboard", (req, res) => {
    db.query(getLeaderboard, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(typeof(JSON.stringify(result)));
        res.write(JSON.stringify(result));
      }
    });
    db.query(getDepartment, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(typeof(JSON.stringify(result)));
        res.write("   "+JSON.stringify(result[0]));
      }
    });
    db.query(getFullName, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.write("   "+JSON.stringify(result[0]),() =>{
            res.end();
        });
        }

      });
  });

  app.put("/updatedinfo", (req, res) => {

    const {infohalf :{fullName, empID, emailID, DateOfBirth, Sex ,address}, phno} = req.body;
    const [first,last]=fullName.split(" ",2);
    const dob =moment(DateOfBirth,['DD-MM-YY','DD-MM-YYYY','DD/MM/YY','DD/MM/YYYY']).format("YYYY-MM-DD");
    // console.log(dob);
    const s = Sex.charAt(0).toUpperCase();
    db.query(
      "UPDATE employee SET FName = ?,LName = ?, emailID = ?, DateOfBirth = ?, Sex = ?, address = ? WHERE empID = ?",
      [first,last,emailID,dob,s,address,empID],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
    var phoneNumbers=[];
    db.query(getPhoneNumers, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        phoneNumbers=result.map((key,val) => (key.phoneNumber));
        for (i in phoneNumbers){

          db.query(
            "UPDATE phone_number SET Number = ? WHERE EmpID = ? AND Number = ?",
            [phno[i],empID,phoneNumbers[i]],
            (err, result2) => {
              if (err) {
                console.log(err);
              }// } else {
              //   res.send(result2);
              // }
            }
          );
        }
      }
    });

  });

  app.get("/phonenumbers", (req, res) => {
    db.query(getPhoneNumers, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result.map((key,val) => (key.phoneNumber)))
      }
    });
  });

  app.get("/personalinfo", (req, res) => {
    db.query(getPersonalInfo, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result[0])
      }
    });
  });

  app.get("/stats", (req, res) => {
    db.query(getStats, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result[0]);
      }
    });
  });

  app.get("/teammates", (req, res) => {
    db.query(getTeamMates, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/totalscore", (req, res) => {
    db.query(getTotalScore, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result[0]);
      }
    });
  });

  app.get("/attendance", (req, res) => {
    db.query(getAbsentDays, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(typeof(JSON.stringify(result)));
        res.write(`{"absent":` +JSON.stringify(result[0].absent)+`, `);
      }
    });
    db.query(getPresentDays, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.write(`"present":`+JSON.stringify(result[0].present)+ `}`,() =>{
            res.end();
        });
        }

      });
  });

  app.get("/scorehistory", (req, res) => {
    db.query(getScoreHistory, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/currentscore", (req, res) => {

    db.query(getCurrentScore, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/projectinfo", (req, res) => {

    db.query(getProjectinfo, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.listen(port, () => {
    console.log("Server is running on 8000");
  //   const attendance_perc = absent ;
  // console.log(attendance_perc);
  });
