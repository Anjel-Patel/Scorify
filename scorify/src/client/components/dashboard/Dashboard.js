import './Dashboard.css';
import Teaminfo from './Teaminfo';
import ScoreCard from './Scorecard';
import Attendance from './Attendance';
import Teammates from './Teammates';
import Revenue from './Revenue';
import {useState} from "react";

function Dashboard({isLeader}){
    const [hist, setHist] = useState(0);
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {"Ramirez"}</h1>
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