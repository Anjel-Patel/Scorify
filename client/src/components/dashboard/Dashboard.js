import './Dashboard.css';
import Deptinfo from './Deptinfo';
import Projectinfo from './Projectinfo';
import Teaminfo from './Teaminfo';
import ScoreCard from './Scorecard';
import Attendance from './Attendance';
import Teammates from './Teammates';
import Revenue from './Revenue';
import Axios from "axios";
import { useState, useEffect } from 'react';

function Dashboard({role}){
    const [hist, setHist] = useState(0);
    const [FName, setFName] = useState('');
    const [deptInfo, setDeptInfo] = useState({});
     const  [projInfo, setProjInfo] = useState([]);
    //  let state1 = 0;
    //  let state2 = 1;
    useEffect(() => {
        console.log(role);
        if(role===0 || role===1 )
        {Axios.get("http://localhost:8000/leaderboard").then((response) => {
        const res3 =((response.data).split("   ",3))[2];
        let fullName = (JSON.parse(res3)).FullName;
        setFName(((fullName).split(" ",2))[0]);

          });
        }
        else{
            Axios.get("http://localhost:8000/deptdashboard").then((response) => {
        const [res1,res2,res3] =((response.data).split("   ",3));
        setDeptInfo(JSON.parse(res1));
        setProjInfo(JSON.parse(res2));    
        setFName((JSON.parse(res3)).fname);
        });

    }
        
    },[]); 
    // var fname=;
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {FName}</h1>
            <div className="cards">
               {role===2 && <Deptinfo details = {deptInfo}/>}
                { role ===2 && <Projectinfo  details = {projInfo}/>}
                {role !==2 && <Teaminfo />}
               { role!==2 && <ScoreCard hist={hist} setHist={setHist}/>}
                {role!==2 && <Attendance hist={hist}/>}
                {role!==2 && <Teammates/>}
                {/* <div className="empty-div"></div> */}
                {role === 1 && <Revenue hist={hist} role={role}/>}
            </div>
        </div>
    )
}

export default Dashboard;