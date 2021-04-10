import './Dashboard.css';
import Teaminfo from './Teaminfo';
import ScoreCard from './Scorecard';
import Attendance from './Attendance';
import Teammates from './Teammates';

function Dashboard(){
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {"Ramirez"}</h1>
            <div className="cards">
                <Teaminfo/>
                <ScoreCard/>
                <Attendance/>
                <Teammates/>
            </div>
        </div>
    )
}

export default Dashboard;