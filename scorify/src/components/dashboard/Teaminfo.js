import  "./Teaminfo.css";

// These are the variables to be changed
let teamname = "AlphaZero";
let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi pellentesque, pulvinar sem in, blandit tellus. Maecenas sollicitudin pulvinar maximus. Fusce facilisis felis varius nisl euismod gravida. Quisque elementum cursus nisi eget iaculis...";
let teamID = "69";
let department = "Parks";

function Teaminfo()
{
    return(
        <div className="teaminfo-rect">
            <h5 className="h5 title">Team Info</h5>
            <div className="title-seperator"></div>

            <div className="info-grid">
                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Team Name</p>
                    <h3 className="h3">{teamname}</h3>
                </div>

                <div className="description-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Description</p>
                    <p className="p1" style={{'color': 'var(--neutral-600)'}}>{description}</p>
                </div>
                
                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Team ID</p>
                    <h3 className="h3">{teamID}</h3>
                </div>

                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Department</p>
                    <h3 className="h3">{department}</h3>
                </div>
            </div>
        </div>
    );
}
export default Teaminfo;