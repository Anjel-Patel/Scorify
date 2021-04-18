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

function Dashboard({isLeader}){
    const [hist, setHist] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        Axios.get("http://localhost:8000/leaderboard").then((response) => {
        const res3 =((response.data).split("   ",3))[2];
        setName((JSON.parse(res3)).FullName);
          });
        },[]); 
    var fname=((name).split(" ",2))[0];
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {fname}</h1>
            <div className="cards">
                <Teaminfo/>
                <ScoreCard hist={hist} setHist={setHist}/>
                <Attendance hist={hist}/>
                <Teammates/>
                <div className="empty-div"></div>
                <Revenue hist={hist} isLeader={isLeader}/>
            </div>
        </div>
    )
}

export default Dashboard;