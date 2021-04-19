import "./Record.css";
import RecordRow from "./RecordRow";
import Axios from "axios";
import { useState, useEffect } from "react";
import { ReactComponent as InfoSVG } from "../../assets/info.svg";
const regex = /^(1[0-0]|[1-9])$|^-$/;

function Rowmaker(currentDetails, recordDict, setRecordDict, curDate, Role) {
  //Loops through the details array
  if (typeof recordDict[curDate] !== "undefined") {
    return currentDetails.map((info, i) => (
      <RecordRow
        name={info.fullname}
        key={i}
        details={recordDict}
        date={curDate}
        empID={info.empID}
        role={Role}
        prev_score={info.score}
        prev_normalHours={info.normalhours}
        prev_overtimeHours={info.overtime}
        attendance={recordDict[curDate][info.empID]["attendance"]}
        overtimeHours={recordDict[curDate][info.empID]["overtimeHours"]}
        setDetails={setRecordDict}
      />
    ));
  }
}

const errorColor = {
  color: "red",
  textAlign: "center",
};

function Record({ role }) {
  const [currentDetails, setCurrentDetails] = useState([]);
  const [dates, setDates] = useState([]);
  const [curDate, setCurDate] = useState("");
  const [recordDict, setRecordDict] = useState({});
  const [scoreDict, setScoreDict] = useState([]);
  const [name, setName] = useState("");
  const [isValid1, setIsValid1] = useState(0);
  const [editMode, setEditMode] = useState(0);

  var Role = role === 1 ? "Member" : "Leader"; //will change to leader for manager based on routing and record prop
  useEffect(() => {
    Axios.get("http://localhost:8000/currentrecords").then((response) => {
      const [res1, res2, res3] = response.data.split("   ", 3);
      // console.log(response.data);
      const cd = JSON.parse(res1);
      setCurrentDetails(cd);
      const d = JSON.parse(res2);
      setDates(d);
      // console.log(JSON.parse(res2)[0]);
      setCurDate(d[0]);
      setName(JSON.parse(res3).fname);
      var sdict = {};
      var dict = {};

      for (let i = 0; i < 7; i++) {
        if (i !== 4) {
          //nosunday
          var e = {};
          for (let j = 0; j < cd.length; j++)
            e[cd[j].empID] = { attendance: 1, overtimeHours: "0" };
          dict[d[i]] = e;
        }
      }
      for (let i = 0; i < cd.length; i++) sdict[cd[i].empID] = "-";
      setRecordDict(dict);

      setScoreDict(sdict);
    });
  }, []);

  const updateRecords = () => {
    setEditMode(0);
    // console.log({curDate :curDate,scoreDict : scoreDict, records: recordDict[curDate]});
    Axios.post("http://localhost:8000/updatedrecords", {
      curDate: curDate,
      scoreDict: scoreDict,
      records: recordDict[curDate],
      rstate: role,
      //}).then(() => {
      //   console.log({
      //     curDate: curDate,
      //     scoreDict: scoreDict,
      //     records: recordDict[curDate],
      //     rstate: 0,
      //   }); //0 for manager 1 for leader
    });
  };
  const logger = (e, scoreDict, setScoreDict) => {
    let temp = { ...scoreDict };
    temp[e.target.name] = e.target.value;
    Validate(e.target.value, e.target.className);
    setScoreDict(temp);
  };
  function SatRowmaker(scoreDict, setScoreDict) {
    if (typeof scoreDict !== "undefined") {
      const empID = Object.keys(scoreDict);
      return empID.map((id, i) => (
        <div
          key={i}
          className="sat-details-wrapper"
          style={{ marginBottom: "12px" }}
        >
          <input
            key={id}
            className="h5 record-field"
            name={id}
            value={scoreDict[id]}
            onChange={(e) => {
              logger(e, scoreDict, setScoreDict);
            }}
            style={isValid1 === 1 ? errorColor : { textAlign: "center" }}
          ></input>
        </div>
      ));
    }
  }
  function Validate(e, i) {
    if (i === "h5 record-field") {
      if (regex.test(e)) {
        setIsValid1(0);
      } else {
        setIsValid1(1);
      }
    }
  }
  function Valid() {
    if (isValid1 === 1) {
      return true;
    } else return false;
  }

  const current_week = "20/04/2021";

  return (
    <div className="page-rect">
      <h1 className="h1 hello-text">Hello {name}</h1>

      {/* LEFT SIDE */}
      <div className="record-sat-wrapper">
        <div className="vertical-seperator" style={{ left: "430px" }}></div>
        <div className="vertical-seperator" style={{ left: "887px" }}></div>
        <div className="record-wrapper">
          <div className="title-wrapper" style={{ alignItems: "flex-end" }}>
            <h5 className="h5 title">Records</h5>
            <InfoSVG className="info-svg"></InfoSVG>
          </div>
          <div className="title-seperator"></div>

          {/* Main Header */}
          <div className="main-header-wrapper">
            <select
              className="h5 date-dropdown"
              name="date-dropdown"
              id="date-dropdown"
              onChange={(e) => {
                setCurDate(e.target.value);
              }}
            >
              <optgroup className="optgroup h5">
                <option value={dates[0]}>{dates[0]}</option>
                <option value={dates[1]}>{dates[1]}</option>
                <option value={dates[2]}>{dates[2]}</option>
                <option value={dates[3]}>{dates[3]}</option>
                {/* <option value={dates[4]}>{dates[4]}</option> */}
                <option value={dates[5]}>{dates[5]}</option>
                <option value={dates[6]}>{dates[6]}</option>
              </optgroup>
            </select>
            <h4
              className="h4"
              style={{ color: "var(--neutral-400)", marginLeft: "302px" }}
            >
              Performance last week
            </h4>
            <h4
              className="h4"
              style={{ color: "var(--neutral-600)", marginLeft: "224px" }}
            >
              Today's Data
            </h4>
          </div>
          <div className="title-seperator" style={{ marginTop: "14px" }}></div>

          {/* Sub Header */}
          <div
            className="header"
            style={{
              width: "1262px",
              marginLeft: "0px",
              marginTop: "12px",
              marginBottom: "12px",
            }}
          >
            <h5 className="h5 head" style={{ left: "48px" }}>
              Name
            </h5>
            <h5 className="h5 head" style={{ left: "235px" }}>
              Role
            </h5>
            <h5
              className="h5 head"
              style={{ left: "478px", color: "var(--neutral-400)" }}
            >
              Normal hours
            </h5>
            <h5
              className="h5 head"
              style={{ left: "628px", color: "var(--neutral-400)" }}
            >
              Overtime hours
            </h5>
            <h5
              className="h5 head"
              style={{ left: "794px", color: "var(--neutral-400)" }}
            >
              Score
            </h5>

            <h5 className="h5 head" style={{ left: "943px" }}>
              Overtime hours
            </h5>
            <h5 className="h5 head" style={{ left: "1117px" }}>
              Attendance
            </h5>
          </div>

          {/* Rows */}
          <div className="rows">
            {Rowmaker(currentDetails, recordDict, setRecordDict, curDate, Role)}
          </div>
          <div className="empty-div"></div>

          {/* Edit details button */}
          <button
            className="edit-details-btn"
            style={editMode === 1 ? { display: "none", cursor: "default" } : {}}
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
            <h4 className="h4 edit-details-text" style={{ userSelect: "none" }}>
              Edit details
            </h4>
          </button>

          {/* Save button */}
          <button
            className="record-save-btn"
            style={editMode === 0 ? { display: "none", cursor: "default" } : {}}
            onClick={updateRecords}
            disabled={Valid()}
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
            <h4 className="h4 record-save-text" style={{ userSelect: "none" }}>
              Save
            </h4>
          </button>
        </div>
        {/* onClick={somefunc(detailsState)} */}
        {/* RIGHT SIDE */}
        <div className="sat-wrapper">
          <h4 className="h4" style={{ marginTop: "24px" }}>
            Current Week
          </h4>
          <h5
            className="h5"
            style={{ color: "var(--neutral-600)", marginBottom: "24px" }}
          >
            {current_week}
          </h5>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "var(--neutral-600)",
            }}
          >
            <h5 className="h5 sat-header">Satisfaction</h5>
            <InfoSVG className="info-svg"></InfoSVG>
          </div>
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {SatRowmaker(scoreDict, setScoreDict)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Record;
