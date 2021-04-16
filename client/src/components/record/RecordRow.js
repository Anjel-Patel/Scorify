import "./RecordRow.css";

function attendanceLogger(value, key, setDetails) {
    console.log(key);
}

function RecordRow({name, role, prev_score, prev_normalHours, prev_overtimeHours, attendance, overtimeHours, key, setDetails}) {
    return(
        <div className="row-rect " style={{width:'1214px', color:'var(--neutral-800)', marginTop:'0px', marginBottom:'12px'}}>
            <h5 className="p1 leader-board-details" style={{left : '24px'}}>{name}</h5>
            <h5 className="p1 leader-board-details" style={{left : '201px'}}>{role}</h5>
            <h5 className="p1 leader-board-details" style={{left : '495px', color:'var(--neutral-500)'}}>{prev_normalHours}</h5>
            <h5 className="p1 leader-board-details" style={{left : '654px', color:'var(--neutral-500)'}}>{prev_overtimeHours}</h5>
            <h5 className="p1 leader-board-details" style={{left : '777px', color:'var(--neutral-500)'}}>{prev_score}</h5>
            <input className="p1 leader-board-details record-field" style={{left : '973px'}} value={overtimeHours}></input>
            <div className="record-attendance-rect" style={{left : '1088px'}}>
                <div id="present" className={"record-attendance-present-rect" + (attendance===1?" present-selected":"")} onClick={attendanceLogger(1, key, setDetails)}>
                    <h5 style={{userSelect:'none'}}>P</h5>
                </div>
                <div id="absent" className={"record-attendance-absent-rect" + (attendance===0?" absent-selected":"")} onClick={attendanceLogger(0, key, setDetails)}>
                    <h5 style={{userSelect:'none'}}>A</h5>
                </div>
            </div>
        </div>
    );
}

export default RecordRow;