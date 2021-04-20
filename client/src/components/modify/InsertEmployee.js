import "./InsertEmployee.css";
import Axios from "axios";
import { useState, useEffect } from "react";
const regexFirstName = /^[a-z ,.'-]{2,45}$/i;
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const regexDob = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const regexLastName = /^[a-z ,.'-]{2,45}$/i;
function Dropdownmaker(options) {
  if (typeof options !== "undefined") {
    return options.map((opt, i) => (
      <option key={i} value={opt}>
        {opt}
      </option>
    ));
  }
}

function InsertEmployee({ allProjects, add, setAdd }) {
  // const projects = ['AlphaZero', 'Gamma', 'Delta']
  // const [pstate, setPstate] = useState({});
  let details = {
    firstName: "",
    lastName: "",
    emailId: "",
    DateOfBirth: "",
    // phoneNumbers: [],
    Sex: "",
    address: "",
    projectName: "",
  };
  const [info, setInfo] = useState(details);
  const [isValid1, setIsValid1] = useState(0);
  const [isValid2, setIsValid2] = useState(0);
  const [isValid3, setIsValid3] = useState(0);
  const [isValid4, setIsValid4] = useState(0);
  const [isValid5, setIsValid5] = useState(0);

  function Validate(e, i) {
    switch (i) {
      case "firstName":
        if (regexFirstName.test(e)) {
          setIsValid1(0);
        } else {
          setIsValid1(1);
        }
        break;
      case "emailId":
        if (regexEmail.test(e)) {
          setIsValid2(0);
          return false;
        } else {
          setIsValid2(1);
        }
        break;
      case "DateOfBirth":
        if (regexDob.test(e)) {
          setIsValid3(0);
        } else {
          setIsValid3(1);
        }
        break;

      case "lastName":
        if (regexLastName.test(e)) {
          setIsValid4(0);
        } else {
          setIsValid4(1);
        }
        break;
    }
  }
  function Valid() {
    if (isValid1 === 1) {
      return true;
    } else if (isValid2 === 1) {
      return true;
    } else if (isValid3 === 1) {
      return true;
    } else if (isValid4 === 1) {
      return true;
    } else {
      return false;
    }
  }
  const errorColor = {
    color: "red",
  };

  function logger(e) {
    details = { ...info };
    details[e.target.name] = e.target.value;
    Validate(e.target.value, e.target.name);
    setInfo({ ...details });
  }
  const updateInfo = () => {
    setAdd(add + 1);
    setAdd(add + 1);
    Axios.put("http://localhost:8000/insertemployee", { infohalf: info });
  };

  return (
    <div className="emp-wrapper">
      <h5 className="h5 title">Insert Employee</h5>
      <div className="title-seperator"></div>
      <div className="content-wrapper">
        <div className="drop-wrapper" style={{ marginTop: "16px" }}>
          <p className="p1">Project</p>
          <select
            className="h5 modify-dropdown"
            id="modify-dropdown-1"
            name="projectName"
            onChange={logger}
          >
            <optgroup className="optgroup" id="optgroup-1">
              <option key={-1} value={""}>
                {""}
              </option>
              {Dropdownmaker(allProjects)}
            </optgroup>
          </select>
        </div>
        <div></div>
        <div className="field-wrapper">
          <p className="p1">First Name</p>
          <input
            type="text"
            className="modify-input-field"
            name="firstName"
            onChange={logger}
            style={isValid1 === 1 ? errorColor : {}}
          />
        </div>
        <div className="field-wrapper">
          <p className="p1">Last Name</p>
          <input
            type="text"
            className="modify-input-field"
            name="lastName"
            onChange={logger}
            style={isValid4 === 1 ? errorColor : {}}
          />
        </div>
        <div
          className="field-wrapper email-field"
          style={{ gridColumn: "span 2" }}
        >
          <p className="p1">Email Address</p>
          <input
            type="text"
            className="modify-input-field"
            name="emailId"
            onChange={logger}
            style={isValid2 === 1 ? errorColor : {}}
          />
        </div>
        <div className="field-wrapper">
          <p className="p1">Date Of Birth</p>
          <input
            type="text"
            className="modify-input-field"
            name="DateOfBirth"
            onChange={logger}
            style={isValid3 === 1 ? errorColor : {}}
          />
        </div>
        <div className="field-wrapper">
          <p className="p1">Gender</p>
          <select
            className="h5 modify-dropdown"
            id="modify-dropdown-2"
            name="Sex"
            onChange={logger}
          >
            <optgroup className="optgroup" id="optgroup-1">
              {Dropdownmaker(["Male", "Female"])}
            </optgroup>
          </select>
        </div>
        {/* <div className="field-wrapper">
                    <p className="p1">Ph No.</p>
                    <input type="text" className="modify-input-field" name = 'phone 0' onChange={logger} />
                </div>
                <div className="field-wrapper">
                    <p className="p1">Alternative Ph No.</p>
                    <input type="text" className="modify-input-field" name = 'phone 1' onChange={logger} />
                </div> */}
        <div className="field-wrapper">
          <p className="p1">Address</p>
          <textarea
            rows={4}
            className="address p1 address-text field"
            name="address"
            style={{
              border: "1px solid var(--neutral-300)",
              borderRadius: "8px",
              width: "672px",
              marginTop: "8px",
              backgroundColor: "var(--white)",
              padding: "16px",
            }}
            onChange={logger}
          ></textarea>
        </div>
      </div>
      <div className="empty-div" style={{ flex: 1 }}></div>
      {/* Add Employee Button */}
      <button
        className="add-emp-button"
        onClick={updateInfo}
        disabled={Valid()}
      >
        <h4 className="h4">Add Employee</h4>
      </button>
    </div>
  );
}

export default InsertEmployee;
