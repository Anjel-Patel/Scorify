import React from 'react';
import './Rankingcard.css';
import './PersonRow.css';
import PersonRow from './PersonRow';
function Rankingcard(props){
    return(
        <div className="rank-card">
            <div className="card-heading"> heading</div>
            <div id="labels">
                <div className="left">
                    <h4 className='logoWrapper'></h4>
                    <h4 className="eh4">Rank</h4>
                    <h4 className="eh4">Name</h4>
                </div>
                <div className="right">
                    <h4 className="eh4">Normal Hours</h4>
                    <h4 className="eh4">Overtime Hours</h4>
                    <h4 className="eh4">Role</h4>
                    <h4 className="eh4">Score</h4>
                </div>
            </div>
            <br/><br/>
            <PersonRow 
            rank="1" 
            name="Alex"
            normalHours="40"
            overtimeHours="6"
            role="leader"
            score="30"
            />
            <PersonRow
            rank="2" 
            name="Parth Gedia"
            normalHours="100"
            overtimeHours="100"
            role="member"
            score="120"
            />
            <PersonRow
            rank="3" 
            name="AnIsH KaChAm"
            normalHours="100"
            overtimeHours="100"
            role="member"
            score="120"
            />
            <PersonRow 
            rank="5" 
            name="Ramirez Shah"
            normalHours="20"
            overtimeHours="8"
            role="member"
            score="90"
            />
            <PersonRow
            rank="6" 
            name="Anjel Patel"
            normalHours="18"
            overtimeHours="56"
            role="leader"
            score="105"
            />
            <PersonRow/>
            <PersonRow/>        
        </div>
    );
}
export default Rankingcard;