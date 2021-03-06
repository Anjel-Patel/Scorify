import  "./Teammates.css";
import TeamRow from "./TeammateRow";
import {ReactComponent as Chevron} from "../../assets/chevron.svg";
import Axios from "axios";
import { useState, useEffect } from 'react';
function Rowmaker(details,total_score) {
    //Loops through the details array
    return details.map((info, i) => (
        <TeamRow  key = {i} name= {info.name} phno= {info.phno} email= {info.email} role= {info.role} mate_score={info.mate_score} self_score={total_score}/>
    ));
}

function Teammates()
{
    //The variable where all rows go. Do note the format.
    //Name, phno, email, role, mate_score, self_score
    // const details = [
    //     {name : 'Alex Prajapati', phno : '9898265423', email : 'alexp98@gmail.com', role : 'Leader', mate_score: 350, self_score: 200},
    //     {name : 'Kelvin Gupta', phno : '9897277831', email : 'keving1986@gmail.com', role : 'Member', mate_score: 165, self_score: 200},
    //     {name : 'Jonas Sharma', phno : '6256265423', email : 'jsharma69@gmail.com', role : 'Member', mate_score: 250, self_score: 200},
    //     {name : 'Ligma Sinha', phno : '9855677831', email : 'ligmab420@gmail.com', role : 'Member', mate_score: 130, self_score: 200},
    //     {name : 'Raju Sebastain', phno : '9898260328', email : 'rseb666@gmail.com', role : 'Member', mate_score: 400, self_score: 200},
    // ];

    const [teamMateInfo, setTeamMateInfo] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    
    useEffect(() => {
        Axios.get("http://localhost:8000/teammates").then((response) => {
            setTeamMateInfo(response.data);
          });
        Axios.get("http://localhost:8000/totalscore").then((response) => {
            setTotalScore(response.data.total_score);
          });
        },[]); 
    

    return(
        <div className="teammates-rect">
            <h5 className="h5 title">Teammates</h5>
            <div className="title-seperator"></div>
            <div className="header" style={{width:'1096px'}}>
                <h5 className="h5 head" style={{left:'24px'}}>Name</h5>
                {/* Add a "no" at the end of chevron classname to remove */}
                <Chevron className="chevron head no" style={{left:'75px'}}/>
                <h5 className="h5 head" style={{left:'209px'}}>Ph No.</h5>
                <h5 className="h5 head" style={{left:'367px'}}>Email</h5>
                <h5 className="h5 head" style={{left:'615px'}}>Role</h5>
                <h5 className="h5 head" style={{left:'771px'}}>Score Analysis</h5>
                <h5 className="h5 head" style={{left:'1010px'}}>Score</h5>
                {/* Add an inverted at the end to show reverse sorting order */}
                <Chevron className="chevron head inverted" style={{left:'1060px'}}/> 
            </div>
            <div className="rows">{Rowmaker(teamMateInfo,totalScore)}</div>
        </div>
    );
}
export default Teammates;