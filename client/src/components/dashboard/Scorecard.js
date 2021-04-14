import "./Scorecard.css";
import History from "./History";
import {ReactComponent as BackArrow} from "../../assets/back.svg";
import Axios from "axios";
import { useState, useEffect } from 'react';
function Scorecard({hist, setHist})
{   
    const [currentScore, setCurrentScore] = useState(0);
    useEffect(() => {
        Axios.get("http://localhost:8000/currentscore").then((response) => {
            setCurrentScore(response.data[0].final_score);
          });
        },[]);  
    return(
        <div className={"wrapper-rect"+(hist===1?" expand":"")}>
            <div className={"scorecard-rect"+(hist===1?" contract seperate":"")}>
                <div className="your-score-text-wrapper">
                    <h3 className="h3 your-score-text" style={hist===1?{width:'142px'}:{}}>Your score this week is</h3>
                </div>
                <h1 className="h1 score-text">{currentScore}</h1>
                <div className="empty-div"></div>
                <div className="history-btn" style={hist===1?{opacity:0, cursor:'default'}:{}} onClick={() => {setHist(1)}}>
                    <h4 className="h4 score-history-text">Score History</h4>
                    <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow-full">
                            <path id="arrowtail" d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path id="arrowhead" d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="back-btn" style={hist===0?{opacity:0}:{}} onClick={() => {setHist(0)}}>
                <BackArrow/>
            </div>
            <History key = {0} exist={hist}/>
        </div>
    );
}
export default Scorecard;