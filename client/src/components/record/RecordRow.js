import Attendance from "../dashboard/Attendance";
import "./RecordRow.css";
import { useState } from 'react';
function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
       return objectpassed;
    }
  // give temporary-storage the original obj's constructor
  var temporarystorage = objectpassed.constructor(); 
    for (var key in objectpassed) {
      temporarystorage[key] = keepCloning(objectpassed[key]);
    }
    return temporarystorage;
  };

 const attendanceLogger = (e,value, details,date,empID, setDetails,setEditMode) => {
    let temp= keepCloning(details);
    // console.log(e.target.getAttribute('name'));
    // console.log(e.target.value);
    if(value===0){
        temp[date][empID]['overtimeHours']='0';
        temp[date][empID]['attendance']=1;
        setEditMode(1);    
        setDetails(temp);
    }
    else
    {   
        
        temp[date][empID]['overtimeHours']='-';
        temp[date][empID]['attendance']=0;
        setEditMode(0);
        setDetails(temp);
    }
};
 const overtimeLogger=(e, details,date,empID, setDetails) =>
{    let temp= keepCloning(details);
    temp[date][empID]['overtimeHours']=e.target.value;
    setDetails(temp);
}


function RecordRow({name,details,date,empID, role, prev_score, prev_normalHours, prev_overtimeHours, attendance, overtimeHours, setDetails}) {
    
    const [editMode, setEditMode] = useState(1);
    
    return(
        <div className="row-rect " style={{width:'1214px', color:'var(--neutral-800)', marginTop:'0px', marginBottom:'12px'}}>
            <h5 className="p1 leader-board-details" style={{left : '24px'}}>{name}</h5>
            <h5 className="p1 leader-board-details" style={{left : '201px'}}>{role}</h5>
            <h5 className="p1 leader-board-details" style={{left : '495px', color:'var(--neutral-500)'}}>{prev_normalHours}</h5>
            <h5 className="p1 leader-board-details" style={{left : '654px', color:'var(--neutral-500)'}}>{prev_overtimeHours}</h5>
            <h5 className="p1 leader-board-details" style={{left : '777px', color:'var(--neutral-500)'}}>{prev_score}</h5>
            <input className="p1 leader-board-details record-field" name = 'overtimeHours' style={{left : '973px'}} value={overtimeHours} onChange={(e)=>{overtimeLogger(e,details,date,empID, setDetails)}}  readOnly={editMode===0?true:false} ></input>
            <div className="record-attendance-rect" style={{left : '1088px'}}>
                <div id="present" className={"record-attendance-present-rect" + (attendance===1?" present-selected":"" )} name = 'present' onClick={(e)=>{attendanceLogger(e,attendance, details,date,empID, setDetails,setEditMode)}} >
                    <h5 style={{userSelect:'none'}}>P</h5>
                </div>
                <div id="absent" className={"record-attendance-absent-rect" + (attendance===0?" absent-selected":"")} name = 'absent' onClick={(e)=>{attendanceLogger(e,attendance, details,date,empID, setDetails,setEditMode)}}>
                    <h5 style={{userSelect:'none'}}>A</h5>
                </div>
            </div>
        </div>
    );
}

export default RecordRow;