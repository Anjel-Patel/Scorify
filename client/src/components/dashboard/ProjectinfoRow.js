import "./ProjectinfoRow.css";

function ProjectinfoRow({name, leader, phno, email, revenue}) {
    return(
        <div className="row-rect" style={{width:'848px'}}>
            <h5 className="h5 details" style={{left : '20px'}}>{name}</h5>
            <h5 className="h5 details" style={{left : '163px'}}>{leader}</h5>
            <h5 className="h5 details" style={{left : '332px'}}>{phno}</h5>
            <h5 className="h5 details" style={{left : '530px'}}>{email}</h5>
            <h5 className="h5 details" style={{right : '24px'}}>{"₹"+revenue}</h5>
        </div>
    );
}

export default ProjectinfoRow;