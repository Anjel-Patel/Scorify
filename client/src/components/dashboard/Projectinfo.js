import "./Projectinfo.css";
import ProjectinfoRow from './ProjectinfoRow';
import {ReactComponent as Chevron} from '../../assets/chevron.svg';
import moment from 'moment';

function Rowmaker(details) {
    //Loops through the details array
    return details.map((info, i) => (
        <ProjectinfoRow key = {i} name= {info.name} leader= {info.leader} phno= {info.phno} email= {info.email} revenue= {info.revenue}/>
    ));
}

function Projectinfo() {

    const details = [
        {name : 'AlphaZero', phno : '+91-9929296988', email : 'alexp98@gmail.com', leader : 'Alex Prajapati', revenue: 25000},
        {name : 'Delta', phno : '+91-9939480129', email : 'ramuog07@gmail.com', leader : 'Ramu Gates', revenue: 35200},
        {name : 'Gamma', phno : '+91-9939278107', email : 'moroy666@gmail.com', leader : 'Mohammed Roy', revenue: 50000}
    ];

    return(
        <div className="project-rect">
            <h5 className="h5 title">Projects</h5>
            <div className="title-seperator"></div>
            <div className="header" style={{width:'848px'}}>
                <p className="p1 head" style={{left:'20px'}}>Name</p>
                {/* Add a "no" at the end of chevron classname to remove */}
                <Chevron className="chevron head" style={{left:'71px'}}/>
                <p className="p1 head" style={{left:'163px'}}>Leader</p>
                <p className="p1 head" style={{left:'332px'}}>Ph No.</p>
                <p className="p1 head" style={{left:'530px'}}>email</p>
                <p className="p1 head" style={{left:'759px'}}>Revenue</p>
            </div>
            <div className="history-rows">{Rowmaker(details)}</div>
        </div>
    );
}

export default Projectinfo;