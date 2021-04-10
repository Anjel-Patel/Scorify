import DashboardCSS from './Dashboard.css';
import ScoreCard from './Scorecard';

function Dashboard(){
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {"Ramirez"}</h1>
            <ScoreCard/>
        </div>
    )
}

export default Dashboard;