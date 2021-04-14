import  "./Teaminfo.css";
import Axios from "axios";
import { useState, useEffect } from 'react';
// // These are the variables to be changed
// let teamname = "AlphaZero";
// let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi pellentesque, pulvinar sem in, blandit tellus. Maecenas sollicitudin pulvinar maximus. Fusce facilisis felis varius nisl euismod gravida. Quisque elementum cursus nisi eget iaculis...";
// let teamID = "69";
let department = "Parks";

function Teaminfo()
{
    const [project, setProject] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/projectInfo").then((response) => {
            setProject(response.data[0]);
          });
        },[]);  
    
    return(
        <div className="teaminfo-rect">
            <h5 className="h5 title">Project Info</h5>
            <div className="title-seperator"></div>

            <div className="info-grid">
                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Project Name</p>
                    <h3 className="h3">{project.ProjectName}</h3>
                </div>

                <div className="description-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Description</p>
                    <p className="p1" style={{'color': 'var(--neutral-600)'}}>{project.ProjDesc}</p>
                </div>
                
                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Project ID</p>
                    <h3 className="h3">{project.projectID}</h3>
                </div>

                <div className="details-container">
                    <p className="p2" style={{'color': 'var(--neutral-400)'}}>Department</p>
                    <h3 className="h3">{project.DeptName}</h3>
                </div>
            </div>
        </div>
    );
}
export default Teaminfo;