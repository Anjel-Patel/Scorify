import React from 'react'
import Rankingcard from './Rankingcard'

function Leaderborad(props){
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {"Ramirez"}</h1>
            <div className="cards">
                <Rankingcard/>
            </div>
        </div>
    );
}

export default Leaderborad;