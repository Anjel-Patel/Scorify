import "./InsertEmployee.css";
import Axios from "axios";
import { useState, useEffect } from 'react';
function Dropdownmaker(options) {
    if( typeof(options) !== 'undefined')
    {
    return options.map((opt,i) => (
        <option key = {i} value={opt} >{opt}</option>
    ));
    }
}

function InsertEmployee({allProjects,add,setAdd}) 
{
    // const projects = ['AlphaZero', 'Gamma', 'Delta']
    // const [pstate, setPstate] = useState({});
    let details = {
        firstName: '',
        lastName : '',
        emailId: '',
        DateOfBirth: '',
        // phoneNumbers: [],
        Sex: '',
        address: '',
        projectName: ''
    }   
    const [info, setInfo] = useState(details);
    // const [phoneNumbers, setPhoneNumers] = useState([]);//work in progress
     
        function logger(e)
        {   
            
            details= {...info};
            details[e.target.name] = e.target.value;
            setInfo({...details});
                       
        }
        const updateInfo = () => {
            setAdd(add+1);
            setAdd(add+1);
            Axios.put("http://localhost:8000/insertemployee", {infohalf :info});
          };


    return(
        <div className="emp-wrapper">
            <h5 className="h5 title">Insert Employee</h5>
            <div className="title-seperator"></div>
            <div className="content-wrapper">
                <div className="drop-wrapper" style={{marginTop:'16px'}}>
                    <p className="p1">Project</p>
                    <select className="h5 modify-dropdown" id="modify-dropdown-1" name = 'projectName' onChange={logger} >
                        <optgroup className="optgroup" id="optgroup-1">
                            <option key = {-1} value={''} >{''}</option>
                            {Dropdownmaker(allProjects)}
                        </optgroup>
                    </select>
                </div>
                <div></div>
                <div className="field-wrapper">
                    <p className="p1">First Name</p>
                    <input type="text" className="modify-input-field" name ='firstName' onChange={logger} />
                </div>
                <div className="field-wrapper">
                    <p className="p1">Last Name</p>
                    <input type="text" className="modify-input-field" name ='lastName' onChange={logger} />
                </div>
                <div className="field-wrapper email-field" style={{gridColumn:'span 2'}}>
                    <p className="p1">Email Address</p>
                    <input type="text" className="modify-input-field" name = 'emailId' onChange={logger} />
                </div>
                <div className="field-wrapper">
                    <p className="p1">Date Of Birth</p>
                    <input type="text" className="modify-input-field" name = 'DateOfBirth' onChange={logger} />
                </div>
                <div className="field-wrapper">
                    <p className="p1">Gender</p>
                    <select className="h5 modify-dropdown" id="modify-dropdown-2" name = 'Sex' onChange={logger} >
                        <optgroup className="optgroup" id="optgroup-1">
                            {Dropdownmaker(['Male', 'Female'])}
                        </optgroup>
                    </select>
                </div>
                <div className="field-wrapper">
                    <p className="p1">Ph No.</p>
                    <input type="text" className="modify-input-field" name = 'phone 0' onChange={logger} />
                </div>
                <div className="field-wrapper">
                    <p className="p1">Alternative Ph No.</p>
                    <input type="text" className="modify-input-field" name = 'phone 1' onChange={logger} />
                </div>
                <div className="field-wrapper">
                    <p className="p1">Address</p>
                    <textarea rows={4} className="address p1 address-text field" name = 'address'  style={{border:'1px solid var(--neutral-300)',
                borderRadius:'8px',
                width:'672px',
                marginTop:'8px',
                backgroundColor: 'var(--white)'}}  onChange={logger} ></textarea>
                </div>
            </div>
            <div className="empty-div" style={{flex:1}}></div>
            {/* Add Employee Button */}
            <div className="add-emp-button" onClick={updateInfo} >
                <h4 className="h4">Add Employee</h4>
            </div>
        </div>
    );
}

export default InsertEmployee;