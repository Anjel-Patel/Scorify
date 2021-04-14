import "./HistoryRow.css";

function HistoryRow({date, normal_hours, overtime_hours, score}) {
    return(
        <div className="row-rect" style={{width:'507px'}}>
            <h5 className="h5 details" style={{left : '24px'}}>{date}</h5>
            <h5 className="h5 details" style={{left : '157px'}}>{normal_hours}</h5>
            <h5 className="h5 details" style={{left : '321px'}}>{overtime_hours}</h5>
            <h5 className="h5 details" style={{right : '24px'}}>{score}</h5>
        </div>
    );
}

export default HistoryRow;