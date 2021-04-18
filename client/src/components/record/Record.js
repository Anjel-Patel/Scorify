import "./Record.css";
import RecordRow from  "./RecordRow";
import Axios from "axios";
import { useState, useEffect } from 'react';
import {ReactComponent as InfoSVG} from "../../assets/info.svg";


 const logger=(e,scoreDict,setScoreDict) => {
    let temp = {...scoreDict};
    temp[e.target.name]=e.target.value;
    setScoreDict(temp);
}



function Rowmaker(currentDetails,recordDict,setRecordDict,curDate,role) {
    //Loops through the details array
    if( typeof(recordDict[curDate]) !== 'undefined')
    {return currentDetails.map((info, i) => (
        
        <RecordRow name= {info.fullname}
        key={i}
        details = {recordDict}
        date = {curDate}
        empID={info.empID}
        role= {role}
        prev_score={info.score} 
        prev_normalHours={info.normalhours} 
        prev_overtimeHours={info.overtime} 
        attendance={recordDict[curDate][info.empID]['attendance']} 
        overtimeHours={recordDict[curDate][info.empID]['overtimeHours']}
        setDetails={setRecordDict}
        />
    ));}
};
function SatRowmaker(scoreDict,setScoreDict) {
    if( typeof(scoreDict) !== 'undefined')
    {
    const empID = Object.keys(scoreDict);
    return empID.map((id, i) => (
        <div key = {i} className="sat-details-wrapper" style={{marginBottom:'12px'}}>
            <input key = {id} className="h5 record-field" name = {id} value={scoreDict[id]}  onChange={(e)=>{logger(e,scoreDict,setScoreDict)}} style={{textAlign:"center"}}></input>
        </div>
    ));
}
};


function Record() {

    const [currentDetails, setCurrentDetails] = useState([]);
    const [dates,setDates] = useState([]);
    const [curDate,setCurDate] = useState(''); 
    const [recordDict,setRecordDict] = useState({});
    const [scoreDict,setScoreDict] = useState([]);
    const [name,setName] = useState('');
    var role = 'Member';//will change to leader for manager based on routing and record prop
    useEffect(() => {
 
        Axios.get('http://localhost:8000/currentrecords').then((response) => {
            const [res1,res2,res3]=(response.data).split("   ",3);
            // console.log(response.data);
            const cd = JSON.parse(res1);
            setCurrentDetails(cd);
            const d =JSON.parse(res2);
            setDates(d);
            // console.log(JSON.parse(res2)[0]);
            setCurDate(d[0]);
            setName((JSON.parse(res3)).fname);
            var sdict = {};
            var dict ={};
            for(let i=0;i<7;i++)
            {   if(i!==4){//nosunday
                var e = {};
                for(let j=0;j<cd.length;j++)
                    e[cd[j].empID] ={ attendance: 1, overtimeHours : '0'};
                dict[d[i]]=e;
                }
            };
            for(let i=0;i<cd.length;i++)
                sdict[cd[i].empID] ='-';
            setRecordDict(dict);

            setScoreDict(sdict);
            
          });
        },[]);

    
        const updateRecords = () => {
            // console.log({curDate :curDate,scoreDict : scoreDict, records: recordDict[curDate]});
            Axios.post("http://localhost:8000/updatedrecords", {curDate :curDate,scoreDict : scoreDict, records: recordDict[curDate]}).then(
                () => { console.log({curDate :curDate,scoreDict : scoreDict, records: recordDict[curDate], rstate : 0 })  //0 for manager 1 for leader
            });
          };
   
    const current_week = '21/04/2021';

    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {name}</h1>

            {/* LEFT SIDE */}
            <div className="record-sat-wrapper">
                <div className="vertical-seperator" style={{left:'430px'}}></div>
                <div className="vertical-seperator" style={{left:'887px'}}></div>
                <div className="record-wrapper">
                    <div className="title-wrapper" style={{alignItems:'flex-end'}}>
                        <h5 className="h5 title">Records</h5>
                        <InfoSVG className="info-svg"></InfoSVG>
                    </div>
                    <div className="title-seperator"></div>

                    {/* Main Header */}
                    <div className="main-header-wrapper">
                        <select className="h5 date-dropdown" name="date-dropdown" id="date-dropdown" onChange={(e)=>{setCurDate(e.target.value)}}>
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
                        <h4 className="h4" style={{color:'var(--neutral-400)', marginLeft:'302px'}}>Performance last week</h4>
                        <h4 className="h4" style={{color:'var(--neutral-600)', marginLeft:'224px'}}>Today's Data</h4>
                    </div>
                    <div className="title-seperator" style={{marginTop:'14px'}}></div>

                    {/* Sub Header */}
                    <div className="header" style={{width:'1262px', marginLeft:'0px', marginTop:'12px', marginBottom:'12px'}}>
                        <h5 className="h5 head" style={{left:'48px'}}>Name</h5>
                        <h5 className="h5 head" style={{left:'235px'}}>Role</h5>
                        <h5 className="h5 head" style={{left:'478px', color:'var(--neutral-400)'}}>Normal hours</h5>
                        <h5 className="h5 head" style={{left:'628px', color:'var(--neutral-400)'}}>Overtime hours</h5>
                        <h5 className="h5 head" style={{left:'794px', color:'var(--neutral-400)'}}>Score</h5>
                        <h5 className="h5 head" style={{left:'943px'}}>Overtime hours</h5>
                        <h5 className="h5 head" style={{left:'1117px'}}>Attendance</h5>
                    </div>

                    {/* Rows */}
                    <div className="rows">{Rowmaker(currentDetails,recordDict,setRecordDict,curDate,role)}</div>
                    <div className="empty-div"></div>

                    {/* SAVE BUTTON */}
                    <div className="record-save-btn"   onClick={updateRecords} >
                        <h4 className="h4 record-save-text" style={{userSelect:'none'}}  >Save</h4>
                    </div>
                </div>
                {/* onClick={somefunc(detailsState)} */}
                {/* RIGHT SIDE */}
                <div className="sat-wrapper">
                    <h4 className="h4" style={{marginTop:'24px'}}>Current Week</h4>
                    <h5 className="h5" style={{color: "var(--neutral-600)", marginBottom:'24px'}}>{current_week}</h5>
                    <div style={{display:'flex', flexDirection:'row', alignItems: 'center', color: "var(--neutral-600)"}}>
                        <h5 className="h5 sat-header">Satisfaction</h5>
                        <InfoSVG className="info-svg"></InfoSVG>
                    </div>
                    <div style={{marginTop:'28px', display:'flex', flexDirection:'column'}}>{SatRowmaker(scoreDict,setScoreDict)}</div>
                </div>
            </div>
        </div>
    );
}

export default Record;