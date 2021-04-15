import React from 'react'
import Rankingcard from './Rankingcard'

function Leaderborad(props){
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {"Ramirez"}</h1>
            <div className="cards">
                <Rankingcard/>
                {/* <Teaminfo/>
                <ScoreCard hist={hist} setHist={setHist}/>
                <Attendance hist={hist}/>
                <Teammates/>
                <div className="empty-div"></div>
                <Revenue hist={hist} isLeader={isLeader}/> */}
            </div>
        </div>
    );
}

export default Leaderborad;