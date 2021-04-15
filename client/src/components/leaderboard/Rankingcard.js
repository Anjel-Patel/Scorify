import React from 'react';
import './Rankingcard.css';
import PersonRow from './PersonRow';

function Rowmaker(details) {
    //Loops through the details array
    return details.map((info, i) => (
        <PersonRow isSelf={info.isSelf} rank={i+1} name= {info.name} role= {info.role} normalHours={info.normalHours} overtimeHours={info.overtimeHours} score={info.score}/>
    ));
}

function Rankingcard(){

    const details = [
        {name : 'Alex Prajapati', role : 'Leader', score: 450, normalHours: 32, overtimeHours: 12, isSelf:false},
        {name : 'Kelvin Gupta', role : 'Member', score: 400, normalHours: 30, overtimeHours: 10, isSelf:false},
        {name : 'Jonas Sharma', role : 'Member', score: 375, normalHours: 28, overtimeHours: 10, isSelf:false},
        {name : 'Ligma Sinha', role : 'Member', score: 300, normalHours: 25, overtimeHours: 8, isSelf:false},
        {name : 'Ramirez Shah', role : 'Leader', score: 280, normalHours: 22, overtimeHours: 9, isSelf:true},
        {name : 'Raju Sebastain', role : 'Member', score: 250, normalHours: 20, overtimeHours: 5, isSelf:false},
    ];

    const department = "Parks";

    return(
        <div className="rank-card">
            <div className="title-wrapper">
                <h5 className="h5 title">Leaderboard</h5>
                <div className="tiny-dot title" style={{marginLeft:'8px'}}></div>
                <h5 className="h5 title" style={{marginLeft:'8px'}}>{department}</h5>
            </div>
            <div className="title-seperator"></div>

            <div className="header" style={{width:'1440px', marginLeft:'0px'}}>
                <h5 className="h5 head" style={{left:'56px'}}>Rank</h5>
                <h5 className="h5 head" style={{left:'154px'}}>Name</h5>
                <h5 className="h5 head" style={{left:'922px'}}>Normal hours</h5>
                <h5 className="h5 head" style={{left:'1088px'}}>overtime hours</h5>
                <h5 className="h5 head" style={{left:'1270px'}}>Role</h5>
                <h5 className="h5 head" style={{left:'1395px'}}>Score</h5>
            </div>

            <div className="rows">{Rowmaker(details)}</div>
        </div>
    );
}
export default Rankingcard;