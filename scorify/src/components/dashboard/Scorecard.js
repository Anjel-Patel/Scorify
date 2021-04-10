import "./Scorecard.css";

function Scorecard()
{
    return(
        <div className="scorecard-rect">
            <h3 className="h3 your-score-text">Your score this week is</h3>
            <h1 className="h1 score-text">{"200"}</h1>
            <div className="empty-div"></div>
            <div className="history-btn">
                <h4 className="h4 score-history-text">Score History</h4>
                <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow-full">
                        <path id="arrowtail" d="M5 12H19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="arrowhead" d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </div>
        </div>
    );
}
export default Scorecard;