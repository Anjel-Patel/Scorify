import React, { useState } from 'react';
import './PersonRow.css';
import './Rankingcard.css';
import {ReactComponent as Star} from'../../assets/star.svg';

function PersonRow({isSelf, rank, name, role, normalHours, overtimeHours, score}) {

    let starColor;
    if(rank===1)
        starColor = "var(--yellow-500)";
    else if(rank===2)
        starColor = "var(--neutral-500)";
    else if(rank===3)
        starColor = "var(--bronze)";
    else
        starColor = "transparent";

    return (        
        <div className={"row-rect "+(isSelf?"dark":"")} style={{width:'1440px'}}>
            <Star className="details" style={{color: starColor, left:'16px', marginTop:"16px"}}></Star>
            <h4 className="h4 leader-board-details" style={{left : '48px', marginTop:"16px"}}>{rank}</h4>
            <h5 className="p1 leader-board-details" style={{left : '130px'}}>{name}</h5>
            <h5 className="p1 leader-board-details" style={{left : '939px'}}>{normalHours}</h5>
            <h5 className="p1 leader-board-details" style={{left : '1112px'}}>{overtimeHours}</h5>
            <h5 className="p1 leader-board-details" style={{left : '1246px'}}>{role}</h5>
            <h5 className="p1 leader-board-details" style={{left : '1371px'}}>{score}</h5>
        </div>
    );
}
export default PersonRow;