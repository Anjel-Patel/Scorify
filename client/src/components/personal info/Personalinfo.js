import { ReactComponent as GridRight } from "../../assets/circle-grid1.svg";
import { ReactComponent as GridLeft } from "../../assets/circle-grid2.svg";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import Axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import "./Personalinfo.css";
const regexName = /^[a-zA-Z]{2,40}\s[a-zA-Z]{2,40}$/;
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const regexDob = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const regexGender = /^male$|^female$/;

const crossStyle = {
  color: "var(--red-500)",
  marginLeft: "48px",
  cursor: "pointer",
  transition: "all var(--speed-fast) var(--timing-function) var(--delay)",
};

function PhoneNumberGenerator(phoneNumbers, editMode, logger) {
  let pname = phoneNumbers.map((phno, i) => "phone " + i.toString());
  return phoneNumbers.map((phno, i) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        key={i}
        className="phno h3 field"
        name={pname[i]}
        value={phno}
        onChange={logger}
        readOnly={editMode === 0 ? true : false}
      ></input>
      <Cross
        style={
          i >= 1 && editMode === 1
            ? crossStyle
            : { opacity: "0", cursor: "default" }
        }
      ></Cross>
    </div>
  ));
}

function Personalinfo() {
  const [editMode, setEditMode] = useState(0);
  const editableStyle = {
    color: "var(--neutral-900)",
    boxShadow: "var(--shadow-small)",
    transform: "translateY(-1px)",
    cursor: "text",
    caretColor: "default",
  };
  let details = {
    fullName: "",
    empID: 0,
    emailID: "",
    DateOfBirth: "",
    // phoneNumbers: [],
    Sex: "",
    address: "",
    projectName: "",
    DeptName: "",
  };
  let phoneDetails = [];
  const [info, setInfo] = useState(details);
  const [totalNormal, setTotalNormal] = useState(0);
  const [totalOvertime, setTotalOvertime] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [attendance, setAttendance] = useState([]);
  const [phoneNumbers, setPhoneNumers] = useState([]);

  const updateInfo = () => {
    setEditMode(0);
    Axios.put("http://localhost:8000/updatedinfo", {
      infohalf: info,
      phno: phoneNumbers,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:8000/personalinfo").then((response) => {
      let a = moment(response.data.DateOfBirth).format("DD/MM/YY");
      setInfo({ ...response.data, DateOfBirth: a });

      // console.log(response.data);
      // console.log(info);
      // setInfo({...info, DateOfBirth : moment(info.DateOfBirth).format("DD-MM-YY")});
      // console.log(info.DateOfBirth);
      // setName(info.FName +' '+ info.LName);
      // setEmail();
      // Set
    });
    Axios.get("http://localhost:8000/stats").then((response) => {
      setTotalScore(response.data.totalscore);
      setTotalNormal(response.data.totalNormalHours);
      setTotalOvertime(response.data.totalOvertime);
      // // // console.log(a);
      // setInfo({...info, DateOfBirth : a });
    });

    Axios.get("http://localhost:8000/attendance").then((response) => {
      let obj = JSON.parse(JSON.stringify(response.data));
      setAttendance((obj.present * 100) / (obj.present + obj.absent));
      // console.log(obj.present*100 /(obj.present+obj.absent));
      // console.log(info);
    });
    Axios.get("http://localhost:8000/phonenumbers").then((response) => {
      setPhoneNumers(response.data);
    });
  }, []);

  function logger(e) {
    if (e.target.name.startsWith("phone")) {
      phoneDetails = [...phoneNumbers];
      let index = parseInt(e.target.name.charAt(6));
      phoneDetails[index] = e.target.value;
      setPhoneNumers([...phoneDetails]);
    } else {
      details = { ...info };
      details[e.target.name] = e.target.value;
      setInfo({ ...details });
    }
    // console.log(e.target);
    // details[e.target.name] =  e.target.value;
    // let b = e.target.value;

    // setInfo({...info, e.target.value });
    // // console.log(e);
  }

  return (
    <div
      className="personal-page-rect"
      style={
        editMode === 0 ? { cursor: "default", caretColor: "transparent" } : {}
      }
    >
      <GridRight className="grid-right" />
      <GridLeft className="grid-left" />
      <div className="profile-card">
        {/* LEFT SIDE */}

        <div className="left-side" style={editMode === 1 ? editableStyle : {}}>
          <input
            className="name h1 field-name"
            name="fullName"
            value={info.fullName}
            onChange={logger}
            readOnly={editMode === 0 ? true : false}
          ></input>
          <div className="detail-grid">
            <div className="id detail-div">
              <p className="p1 detail-title">ID</p>
              <input
                className="h3 field"
                value={info.empID}
                readOnly={true}
              ></input>
            </div>
            <div>
              <p className="p1 detail-title">Email</p>
              <input
                className="email h3 field"
                name="emailID"
                value={info.emailID}
                onChange={logger}
                readOnly={editMode === 0 ? true : false}
              ></input>
            </div>
            <div>
              <p className="p1 detail-title">DOB</p>
              <input
                className="dob h3 field"
                name="DateOfBirth"
                value={info.DateOfBirth}
                onChange={logger}
                readOnly={editMode === 0 ? true : false}
              ></input>
            </div>
            <div>
              <p className="p1 detail-title">Phone Number</p>
              <div>{PhoneNumberGenerator(phoneNumbers, editMode, logger)}</div>
            </div>
            <div>
              <p className="p1 detail-title">Gender</p>
              <input
                className="gender h3 field"
                name="Sex"
                value={info.Sex}
                onChange={logger}
                readOnly={editMode === 0 ? true : false}
              ></input>
            </div>
          </div>
          <div className="address">
            <p className="p1 detail-title">Address</p>
            <textarea
              rows={4}
              className="address p1 address-text field"
              name="address"
              value={info.address}
              onChange={logger}
              readOnly={editMode === 0 ? true : false}
            ></textarea>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="right-side" style={{ cursor: "default" }}>
          <h5 className="h5 title">Stats</h5>
          <div className="title-seperator"></div>
          <div className="stats-top-wrapper">
            <div>
              <p className="p1 detail-title">Current Project's Name</p>
              <h3 className="h3">{info.projectName}</h3>
            </div>
            <div className="department-div">
              <p className="p1 detail-title">Current Department</p>
              <h3 className="h3">{info.DeptName}</h3>
            </div>
          </div>
          <div className="stats-bottom-wrapper">
            <div>
              <p className="p1 detail-title">Total Normal hours</p>
              <h3 className="h3">{totalNormal}</h3>
            </div>
            <div>
              <p className="p1 detail-title">Total Overtime hours</p>
              <h3 className="h3">{totalOvertime}</h3>
            </div>
            <div>
              <p className="p1 detail-title">Total Score</p>
              <h3 className="h3">{totalScore}</h3>
            </div>
            <div>
              <p className="p1 detail-title">Attendance Percentage</p>
              <h3 className="h3">{attendance.toString() + "%"}</h3>
            </div>

            {/* Edit details button */}
            <div
              className="edit-details-btn"
              style={
                editMode === 1 ? { display: "none", cursor: "default" } : {}
              }
              onClick={() => {
                setEditMode(1);
              }}
            >
              <svg
                className="inverted-arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow-full">
                  <path
                    id="inverted-arrowtail"
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="inverted-arrowhead"
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <h4 className="h4 edit-details-text">Edit details</h4>
            </div>

            {/* Save button */}
            <div
              className="save-btn"
              style={
                editMode === 0 ? { display: "none", cursor: "default" } : {}
              }
              onClick={updateInfo}
            >
              <svg
                className="arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow-full">
                  <path
                    id="arrowtail"
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="arrowhead"
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
