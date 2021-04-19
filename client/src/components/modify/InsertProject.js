import './InsertProject.css';
function Dropdownmaker(options) {
    return options.map((opt) => (
        <option value={opt}>{opt}</option>
    ));
}
function InsertProject() {
    const leaders = ['Alex', 'Ramu', 'John']
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
                marginTop:'8px'}}></textarea>
                </div>
            </div>
            <div className="empty-div" style={{flex:1}}></div>
            {/* Add Employee Button */}
            <div className="add-emp-button">
                <h4 className="h4">Add Project</h4>
            </div>
        </div>
    );
}

export default InsertProject;