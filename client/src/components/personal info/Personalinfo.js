import {ReactComponent as GridRight} from "../../assets/circle-grid1.svg";
import {ReactComponent as GridLeft} from "../../assets/circle-grid2.svg";
import {ReactComponent as Cross} from "../../assets/cross.svg";
import {useState, useEffect} from 'react';
import "./Personalinfo.css";

const crossStyle = {
    color: 'var(--red-500)',
    marginLeft: '48px',
    cursor: 'pointer',
    transition: 'all var(--speed-fast) var(--timing-function) var(--delay)'
}

function PhoneNumberGenerator(phoneNumbers, editMode, logger){
    return phoneNumbers.map((phno, i) => (
        <div style={{display:'flex', alignItems:'center'}}>
            <input className="phno h3 field" value={phno} onChange={logger} readOnly={editMode===0?true:false}></input>
            <Cross style={(i>=1 && editMode===1)?crossStyle:{opacity: '0', cursor: 'default'}}></Cross>
        </div>
    ));
}



function Personalinfo(){

    function logger(e)
    {
        details[e.target.classList[0]] = e.target.value;
        setDetails({...details, ...details[e.target.classList[0]]});
        console.log(e);
        console.log(details['phno']);
    }
    

    let details = {
        name: 'Ramirez Shah',
        id: '20190144',
        email: 'ramirezshah42@gmail.com',
        dob: '24/05/1998',
        phoneNumbers: ['+91-99766 52283',
                       '+91-99766 15564'],
        gender: 'Male',
        address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi pellentesque, pulvinar sem in, blandit tellus. Maecenas sollicitudin pulvinar maximus. Fusce facilisis felis varius nisl euismod gravida. Quisque elementum cursus nisi eget iaculis...',
        project_name: 'AlphaZero',
        dept_name: 'Parks',
        total_nhours: '600',
        total_ohours: '80',
        total_score: '3650',
        attendance_perc: '92%'
    };

    const [detailsState, setDetails] = useState(details);
    const [editMode, setEditMode] = useState(0);


    const editableStyle = {color: 'var(--neutral-900)',
                            boxShadow:'var(--shadow-small)',
                            transform: 'translateY(-1px)',
                            cursor:'text',
                            caretColor:'default'};

    return(
        <div className="personal-page-rect" style={editMode===0?{cursor:'default', caretColor:'transparent'}:{}}>
            <GridRight className="grid-right"/>
            <GridLeft className="grid-left"/>
            <div className="profile-card">

                {/* LEFT SIDE */}

                <div className="left-side" style={editMode===1?editableStyle:{}}>                    
                    <input className="name h1 field-name" value={detailsState.name} onChange={logger} readOnly={editMode===0?true:false}></input>
                    <div className="detail-grid">
                        <div className="id detail-div">
                            <p className="p1 detail-title">ID</p>
                            <input className="h3 field" value={detailsState.id} readOnly={true}></input>
                        </div>
                        <div>
                            <p className="p1 detail-title">Email</p>
                            <input className="email h3 field" value={detailsState.email} onChange={logger} readOnly={editMode===0?true:false}></input>
                        </div>
                        <div>
                            <p className="p1 detail-title">DOB</p>
                            <input className="dob h3 field" value={detailsState.dob} onChange={logger} readOnly={editMode===0?true:false}></input>
                        </div>
                        <div>
                            <p className="p1 detail-title">Phone Number</p>
                            <div>{PhoneNumberGenerator(detailsState.phoneNumbers, editMode, logger)}</div>
                        </div>
                        <div>
                            <p className="p1 detail-title">Gender</p>
                            <input className="gender h3 field" value={detailsState.gender} onChange={logger} readOnly={editMode===0?true:false}></input>
                        </div>
                    </div>
                    <div className="address" >
                            <p className="p1 detail-title">Address</p>
                            <textarea rows={4} className="address p1 address-text field" value={detailsState.address} onChange={logger} readOnly={editMode===0?true:false}></textarea>
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div className="right-side" style={{cursor:'default'}}>
                    <h5 className="h5 title">Stats</h5>
                    <div className="title-seperator"></div>
                    <div className="stats-top-wrapper">
                        <div>
                                <p className="p1 detail-title">Current Project's Name</p>
                                <h3 className="h3">{details.project_name}</h3>
                        </div>
                        <div className="department-div">
                                <p className="p1 detail-title">Current Department</p>
                                <h3 className="h3">{details.dept_name}</h3>
                        </div>
                    </div>
                    <div className="stats-bottom-wrapper">
                        <div>
                                <p className="p1 detail-title">Total Normal hours</p>
                                <h3 className="h3">{details.total_nhours}</h3>
                        </div>
                        <div>
                                <p className="p1 detail-title">Total Overtime hours</p>
                                <h3 className="h3">{details.total_ohours}</h3>
                        </div>
                        <div>
                                <p className="p1 detail-title">Total Score</p>
                                <h3 className="h3">{details.total_score}</h3>
                        </div>
                        <div>
                                <p className="p1 detail-title">Attendance Percentage</p>
                                <h3 className="h3">{details.attendance_perc}</h3>
                        </div>

                        {/* Edit details button */}
                        <div className="edit-details-btn" style={editMode===1?{display:'none', cursor:'default'}:{}} onClick={() => {setEditMode(1)}}>
                            <svg className="inverted-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="arrow-full">
                                    <path id="inverted-arrowtail" d="M5 12H19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="inverted-arrowhead" d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                            <h4 className="h4 edit-details-text">Edit details</h4>
                        </div>

                        {/* Save button */}
                        <div className="save-btn" style={editMode===0?{display:'none', cursor:'default'}:{}} onClick={() => {setEditMode(0)}}>
                            <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="arrow-full">
                                    <path id="arrowtail" d="M5 12H19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="arrowhead" d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                            <h4 className="h4 save-text">Save</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personalinfo;