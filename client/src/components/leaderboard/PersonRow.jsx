import React, { useState } from 'react';
import './PersonRow.css';
import './Rankingcard.css';
import {ReactComponent as GoldStar} from'../../assets/gold.svg';
import {ReactComponent as SilverStar} from'../../assets/silver.svg';
import {ReactComponent as BronzeStar} from'../../assets/bronze.svg';
function PersonRow(props) {
    let username = "Ramirez Shah"
    let imageurl = (props.rank==='1'?<GoldStar/>:props.rank==='2'?<SilverStar/>:props.rank==='3'?<BronzeStar/>:<div/>)
    return (        
        props.name === username
            ? <div className="person-row-wrapper-dark">
                <div className="left">
                    <h4 className='logoWrapper'>{props.rank==='1'?<GoldStar/>:props.rank==='2'?<SilverStar/>:props.rank==='3'?<BronzeStar/>:<div/>}</h4>
                    <h4 className="eh4in custom">{props.rank}</h4>
                    <h4 className="eh4in custom">{props.name}</h4>
                </div>
                <div className="right">
                    <h4 className="eh4in custom">{props.normalHours}</h4>
                    <h4 className="eh4in custom">{props.overtimeHours}</h4>
                    <h4 className="eh4in custom">{props.role}</h4>
                    <h4 className="eh4in custom">{props.score}</h4>
                </div>
            </div>
            : <div className="person-row-wrapper-light">
                <div className="left">
                <h4 className='logoWrapper'>{props.rank==='1'?<GoldStar/>:props.rank==='2'?<SilverStar/>:props.rank==='3'?<BronzeStar/>:<div/>}</h4>
                    <h4 className="eh4in">{props.rank}</h4>
                    <h4 className="eh4in">{props.name}</h4>
                </div>
                <div className="right">
                    <h4 className="eh4in">{props.normalHours}</h4>
                    <h4 className="eh4in">{props.overtimeHours}</h4>
                    <h4 className="eh4in">{props.role}</h4>
                    <h4 className="eh4in">{props.score}</h4>
                </div>
            </div>
    );
}
export default PersonRow;