import "./InsertEmployee.css";

function Dropdownmaker(options) {
    return options.map((opt) => (
        <option value={opt}>{opt}</option>
    ));
}

function InsertEmployee() {
    const projects = ['AlphaZero', 'Gamma', 'Delta']
    return(
        <div className="emp-wrapper">
            <h5 className="h5 title">Insert Employee</h5>
            <div className="title-seperator"></div>
            <div className="content-wrapper">
                <div className="drop-wrapper" style={{marginTop:'16px'}}>
                    <p className="p1">Project</p>
                    <select className="h5 modify-dropdown" id="modify-dropdown-1">
                        <optgroup className="optgroup" id="optgroup-1">
                            {Dropdownmaker(projects)}
                        </optgroup>
                    </select>
                </div>
                <div></div>
                <div className="field-wrapper">
                    <p className="p1">First Name</p>
                    <input type="text" className="modify-input-field"/>
                </div>
                <div className="field-wrapper">
                    <p className="p1">Last Name</p>
                    <input type="text" className="modify-input-field"/>
                </div>
                <div className="field-wrapper email-field" style={{gridColumn:'span 2'}}>
                    <p className="p1">Email Address</p>
                    <input type="text" className="modify-input-field"/>
                </div>
                <div className="field-wrapper">
                    <p className="p1">Date Of Birth</p>
                    <input type="text" className="modify-input-field"/>
                </div>
                <div className="field-wrapper">
                    <p className="p1">Gender</p>
                    <select className="h5 modify-dropdown" id="modify-dropdown-2">
                        <optgroup className="optgroup" id="optgroup-1">
                            {Dropdownmaker(['Male', 'Female'])}
                        </optgroup>
                    </select>
                </div>
                <div className="field-wrapper">
                    <p className="p1">Address</p>
                    <textarea rows={4} className="address p1 address-text field" style={{border:'1px solid var(--neutral-300)',
                borderRadius:'8px',
                width:'672px',
                marginTop:'8px'}}></textarea>
                </div>
            </div>
            <div className="empty-div" style={{flex:1}}></div>
            {/* Add Employee Button */}
            <div className="add-emp-button">
                <h4 className="h4">Add Employee</h4>
            </div>
        </div>
    );
}

export default InsertEmployee;