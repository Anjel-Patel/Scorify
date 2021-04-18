import  "./History.css";
import HistoryRow from "./HistoryRow";
import {ReactComponent as Chevron} from "../../assets/chevron.svg";
import Axios from "axios";
import { useState, useEffect } from 'react';
import moment from 'moment';

function Rowmaker(details) {
    //Loops through the details array
    return details.map((info, i) => (
        <HistoryRow key = {i} date= {moment(info.Date).format("DD-MM-YYYY")} normal_hours= {info.normalTime} overtime_hours= {info.overTime} score= {info.final_score}/>
    ));
}

function History({exist}) {
    //The variable where all rows go. Do note the format.
    //Date(in string, see format below), normal_hours(total for a week), overtime_hours(total for a week), score
    // const details = [
    //     {date : '24/4/21', normal_hours : 32, overtime_hours : 1, score: 180},
    //     {date : '17/4/21', normal_hours : 24, overtime_hours : 6, score: 220},
    //     {date : '10/4/21', normal_hours : 24, overtime_hours : 0, score: 150},
    //     {date : '10/4/21', normal_hours : 24, overtime_hours : 0, score: 150},
    //     {date : '10/4/21', normal_hours : 24, overtime_hours : 0, score: 150},
    //    ];
    const [scoreHistory, setScoreHistory] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/scorehistory").then((response) => {
        setScoreHistory(response.data);
          });
        },[]); 
    return(
        <div className="history-rect" style={exist===0?{left:'-264px'}:{left:'344px', paddingBottom:'12px'}}>
            <h5 className="h5 title">History</h5>
            <div className="title-seperator"></div>
            <div className="header" style={{width:'507px'}}>
                <p className="p1 head" style={{left:'24px'}}>Date</p>
                {/* Add a "no" at the end of chevron classname to remove */}
                <Chevron className="chevron head" style={{left:'75px'}}/>
                <p className="p1 head" style={{left:'116px'}}>Normal hours</p>
                <p className="p1 head" style={{left:'268px'}}>Overtime hours</p>
                <p className="p1 head" style={{right:'24px'}}>Score</p>
            </div>
            <div className="history-rows">{Rowmaker(scoreHistory)}</div>
        </div>
    );
}

export default History;