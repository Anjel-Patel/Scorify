import './InsertProject.css';
import {useState} from 'react';
import {ReactComponent as PlusSVG} from '../../assets/plus.svg';
import {ReactComponent as CrossSVG} from '../../assets/cross.svg';

function Dropdownmaker(options) {
    return options.map((opt) => (
        <option value={opt}>{opt}</option>
    ));
}

function EmpRowmaker(emps) {
    return emps.map((emp, i) => (
        <div key={i} className="proj-emp-row">
            <h5 className="h5">{emp}</h5>
            <div className="empty-div"></div>
            <CrossSVG className="cross-svg"></CrossSVG>
        </div>
    ));
}

function InsertProject() {
    const leaders = ['Alex', 'Ramu', 'John']
    const [nullEmployees, setNullEmployees] = useState(['Ramirez', 'Kevin', 'Vladmir']);
    const [selectedEmployees, setSelectedEmployees] = useState(['Ramirez', 'Kevin', 'Vladmir']);

    return(
        <div className="emp-wrapper">
            <h5 className="h5 title">Insert Project</h5>
            <div className="title-seperator"></div>
            <div className="content-wrapper">
                <div className="drop-wrapper" style={{marginTop:'16px'}}>
                    <p className="p1">Leader</p>
                    <select className="h5 modify-dropdown" id="modify-dropdown-1">
                        <optgroup className="optgroup" id="optgroup-1">
                            {Dropdownmaker(leaders)}
                        </optgroup>
                    </select>
                </div>
                <div></div>
                <div className="field-wrapper">
                    <p className="p1">Project Name</p>
                    <input type="text" className="modify-input-field"/>
                </div>
                <div className="field-wrapper">
                    <p className="p1">Budget</p>
                    <input type="text" className="modify-input-field"/>
                </div>
                <div className="field-wrapper">
                    <p className="p1">Project Description</p>
                    <textarea rows={4} className="address p1 address-text field" style={{border:'1px solid var(--neutral-300)',
                borderRadius:'8px',
                width:'672px',
                marginTop:'8px',
                backgroundColor: 'var(--white)'}}></textarea>
                </div>
            </div>

            {/* Members wala dabba */}
            <div className="add-members-wrapper">
                <p className="p1">Members</p>
                <div className="add-members-box">
                    <div className="select-employee">   
                        <p className="p1" style={{color:'var(--neutral-400)'}}>Select Employee</p>
                        <div className="title-seperator" style={{margin:'8px 0px'}}></div>
                        <select name="dropdown" id="modify-dropdown-1" style={{alignSelf:'center', marginTop:'16px'}}>
                            <optgroup id="optgroup-1">
                                {Dropdownmaker(nullEmployees)}
                            </optgroup>
                        </select>
                        <div className="empty-div"></div>
                        <div className="add-employee-to-project-btn">
                            <PlusSVG></PlusSVG>
                            <h5 className="h5" style={{marginLeft:'16px'}}>Add to project</h5>
                        </div>
                    </div>
                    <div className="selected-employee">
                        <p className="p1" style={{color:'var(--neutral-400)'}}>Selected Employee</p>
                        <div className="title-seperator" style={{margin:'8px 0px'}}></div>
                        <div>{EmpRowmaker(selectedEmployees)}</div>
                    </div>
                </div>
            </div>

            {/* DO NOT REMOVE THIS */}
            <div className="empty-div" style={{flex:1}}></div>

            {/* Add Employee Button */}
            <div className="add-emp-button">
                <h4 className="h4">Add Project</h4>
            </div>
        </div>
    );
}

export default InsertProject;