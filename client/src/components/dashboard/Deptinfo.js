import './Deptinfo.css';

function Deptinfo() {

    let details = {
        DeptName: "Parks",
        DeptID: 68,
        DeptLocation: "Hyderabad",
        totalProjects: 3,
        totalEmployees: 18,
        totalRevenue: 45000
    };

    return(
        <div className="deptinfo-rect">
            <h5 className="h5 title">Department Info</h5>
            <div className="title-seperator"></div>
            <div className="vertical-seperator" style={{height:'187px', left:'648px', top:'261px'}}></div>
            <div className="dept-info-grid">
                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Department Name</p>
                    <h3 className="h3">{details.DeptName}</h3>
                </div>

                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Total Projects</p>
                    <h3 className="h3">{details.totalProjects}</h3>
                </div>
                
                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Department ID</p>
                    <h3 className="h3">{details.DeptID}</h3>
                </div>

                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Total Employees</p>
                    <h3 className="h3">{details.totalEmployees}</h3>
                </div>

                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Location</p>
                    <h3 className="h3">{details.DeptLocation}</h3>
                </div>

                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Total Revenue</p>
                    <h3 className="h3">{details.totalRevenue}</h3>
                </div>
            </div>
        </div>
    );
}

export default Deptinfo;