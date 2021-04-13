import {ReactComponent as GridRight} from "../../assets/circle-grid1.svg";
import {ReactComponent as GridLeft} from "../../assets/circle-grid2.svg";
import {ReactComponent as Cross} from "../../assets/cross.svg";
import "./Personalinfo.css";

function PhoneNumberGenerator(phoneNumbers){

}

function Personalinfo(){

    let details = {
        self_name: 'Ramirez Shah',
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
    }

    return(
        <div className="personal-page-rect">
            <GridRight className="grid-right"/>
            <GridLeft className="grid-left"/>
            <div className="profile-card">

                {/* LEFT SIDE */}

                <div className="left-side">
                    <h1 className="h1 name">{details.self_name}</h1>
                    <div className="detail-grid"> 
                        <div className="id detail-div">
                            <p className="p1 detail-title">ID</p>
                            <h3 className="h3">{details.id}</h3>
                        </div>
                        <div>
                            <p className="p1 detail-title">Email</p>
                            <h3 className="h3">{details.email}</h3>
                        </div>
                        <div>
                            <p className="p1 detail-title">DOB</p>
                            <h3 className="h3">{details.dob}</h3>
                        </div>
                        <div>
                            <p className="p1 detail-title">Phone Number</p>
                            <h3 className="h3">{"+91-99766 52283"}</h3>
                            <h3 className="h3">{"+91-99766 15564"}</h3>
                        </div>
                        <div>
                            <p className="p1 detail-title">Gender</p>
                            <h3 className="h3">{details.gender}</h3>
                        </div>
                    </div>
                    <div className="address">
                            <p className="p1 detail-title">Address</p>
                            <p className="p1 address-text">{details.address}</p>
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div className="right-side">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personalinfo;