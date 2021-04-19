import "./InsertProject.css";
import { ReactComponent as PlusSVG } from "../../assets/plus.svg";
import { ReactComponent as CrossSVG } from "../../assets/cross.svg";
import { useState, useEffect } from "react";
function Dropdownmaker(options) {
  // let arr = options.filter(((opt) => estate[opt]!==0));
  // console.log(arr);
  // console.log(estate);
  return options.map((opt, i) => (
    <option key={i} value={opt}>
      {opt}
    </option>
  ));
}
function Dropdownmaker2(options, leader) {
  let arr = options.filter((opt) => opt !== leader);
  // console.log(arr);
  // console.log(estate);
  return arr.map((opt, i) => (
    <option key={i} value={opt}>
      {opt}
    </option>
  ));
}
// function Dropdownmaker(options,estate) {
//     let arr =[];
//     // if( typeof(options) !== 'undefined')
//     // {
//     console.log(options);
//     for(const opt of options)
//     {
//         if(estate[opt])
//             arr.push[<option key ={opt} value={opt}>{opt}</option>];
//     }
//     return arr;
// // }
// };

function EmpRowmaker(emps) {
  return emps.map((emp, i) => (
    <div key={i} className="proj-emp-row">
      <h5 className="h5">{emp}</h5>
      <div className="empty-div"></div>
      <CrossSVG className="cross-svg"></CrossSVG>
    </div>
  ));
}

function InsertProject({ emptyEmployee, add, setAdd }) {
  // const leaders = ['Alex', 'Ramu', 'John']
  // const [nullEmployees, setNullEmployees] = useState(['Ramirez', 'Kevin', 'Vladmir']);
  const [selectedEmployees, setSelectedEmployees] = useState([
    "Ramirez",
    "Kevin",
    "Vladmir",
  ]);
  const [estate, setEstate] = useState({});
  const [leader, setLeader] = useState("");
  const [employee, setEmployee] = useState("");

  let details = {
    projectName: "",
    budget: "",
    description: "",
    leaderName: "",
  };
  const [projectInfo, setProjectInfo] = useState(details);
  useEffect(() => {
    var edict = {};
    for (let i = 0; i < emptyEmployee.length; i++) edict[emptyEmployee[i]] = 1;
    setEstate(edict);
    // console.log(emptyEmployee);
  }, []);
  useEffect(() => {}, [estate, leader]);

  // function focusLogger(e)
  // {

  // }
  // function logger(e)
  // {
  //     // !(state[e.target.value])?1:0;
  //     setLeader(e.target.value);
  //     // let state= {...estate};
  //     // state[e.target.value] =0;
  //     // setEstate({...state});
  //     // console.log(estate) ;
  // }
  // console.log(emptyEmployee);
  function insertLogger(e) {
    details = { ...projectInfo };
    details[e.target.name] = e.target.value;
    setProjectInfo({ ...details });
  }

  return (
    <div className="emp-wrapper">
      <h5 className="h5 title">Insert Project</h5>
      <div className="title-seperator"></div>
      <div className="content-wrapper">
        <div className="drop-wrapper" style={{ marginTop: "16px" }}>
          <p className="p1">Leader</p>
          <select
            className="h5 modify-dropdown"
            id="modify-dropdown-1"
            onChange={(e) => setLeader(e.target.value)}
          >
            <optgroup className="optgroup" id="optgroup-1">
              <option key={-1} value={""}>
                {""}
              </option>
              {Dropdownmaker(emptyEmployee)}
            </optgroup>
          </select>
        </div>
        <div></div>
        <div className="field-wrapper">
          <p className="p1">Project Name</p>
          <input
            type="text"
            className="modify-input-field"
            name="projectName"
            onChange={insertLogger}
          />
        </div>
        <div className="field-wrapper">
          <p className="p1">Budget</p>
          <input
            type="text"
            className="modify-input-field"
            name="budget"
            onChange={insertLogger}
          />
        </div>
        <div className="field-wrapper">
          <p className="p1">Project Description</p>
          <textarea
            rows={4}
            className="address p1 address-text field"
            name="descrption"
            style={{
              border: "1px solid var(--neutral-300)",
              borderRadius: "8px",
              width: "672px",
              marginTop: "8px",
              backgroundColor: "var(--white)",
            }}
            onChange={insertLogger}
          ></textarea>
        </div>
      </div>

      {/* Members wala dabba */}
      <div className="add-members-wrapper">
        <p className="p1">Members</p>
        <div className="add-members-box">
          <div className="select-employee">
            <p className="p1" style={{ color: "var(--neutral-400)" }}>
              Select Employee
            </p>
            <div
              className="title-seperator"
              style={{ margin: "8px 0px" }}
            ></div>
            <select
              name="dropdown"
              id="modify-dropdown-1"
              style={{ alignSelf: "center", marginTop: "16px" }}
              onChange={(e) => setEmployee(e.target.value)}
            >
              <optgroup id="optgroup-1">
                <option key={-1} value={""}>
                  {""}
                </option>
                {Dropdownmaker2(emptyEmployee, leader)}
              </optgroup>
            </select>
            <div className="empty-div"></div>
            <div className="add-employee-to-project-btn">
              <PlusSVG></PlusSVG>
              <h5 className="h5" style={{ marginLeft: "16px" }}>
                Add to project
              </h5>
            </div>
          </div>
          <div className="selected-employee">
            <p className="p1" style={{ color: "var(--neutral-400)" }}>
              Selected Employee
            </p>
            <div
              className="title-seperator"
              style={{ margin: "8px 0px" }}
            ></div>
            <div>{EmpRowmaker(selectedEmployees)}</div>
          </div>
        </div>
      </div>

      {/* DO NOT REMOVE THIS */}
      <div className="empty-div" style={{ flex: 1 }}></div>

      {/* Add Employee Button */}
      <div className="add-emp-button">
        <h4 className="h4">Add Project</h4>
      </div>
    </div>
  );
}

export default InsertProject;
