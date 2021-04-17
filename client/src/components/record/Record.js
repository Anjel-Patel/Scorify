import "./Record.css";
import RecordRow from  "./RecordRow";
import Axios from "axios";
import { useState, useEffect } from 'react';
import {ReactComponent as InfoSVG} from "../../assets/info.svg";


// function somefunc(detailsState){
//     console.log(detailsState[0].name);
// }

// function Rowmaker(detailsState, setDetails) {
//     //Loops through the details array
//     return detailsState.map((info, i) => (
//         <RecordRow name= {info.name}
//         key={i}
//         role= {info.role}
//         prev_score={info.prev_score} 
//         prev_normalHours={info.prev_normalHours} 
//         prev_overtimeHours={info.prev_overtimeHours} 
//         attendance={info.attendance} 
//         overtimeHours={(info.overtimeHours>=0 && info.attendance===1)?info.overtimeHours:"-"}
//         setDetails={setDetails}/>
//     ));
// }
//     // {  console.log(xyz && curDate);
//     console.log(xyz[curDate][1003]['attendance']);
//     console.log(curDate);
// }

function Rowmaker(currentDetails,xyz,setxyz,curDate) {
    // console.log(curDate);
    //Loops through the details array
    if( typeof(xyz[curDate]) !== 'undefined')
    {return currentDetails.map((info, i) => (
        
        <RecordRow name= {info.fullname}
        key={i}
        details = {xyz}
        date = {curDate}
        empID={info.empID}
        role= {'Member'}
        prev_score={info.score} 
        prev_normalHours={info.normalhours} 
        prev_overtimeHours={info.overtime} 
        attendance={xyz[curDate][info.empID]['attendance']} 
        overtimeHours={xyz[curDate][info.empID]['overtimeHours']}
        setDetails={setxyz}
        />
    ));}
};
function SatRowmaker(details) {
    return details.map((info, i) => (
        <div className="sat-details-wrapper" style={{marginBottom:'12px'}}>
            <h5 className="h5">{info.satisfaction}</h5>
        </div>
    ));
}
function Record() {

    const [currentDetails, setCurrentDetails] = useState([]);
    const [dates,setDates] = useState([]);
    const [curDate,setCurDate] = useState(''); 
    const [xyz,setxyz] = useState({});
    var dict ={};
    useEffect(() => {
        Axios.get("http://localhost:8000/currentrecords").then((response) => {
            const [res1,res2]=(response.data).split("   ",2);
            // console.log(response.data);
            const cd = JSON.parse(res1);
            setCurrentDetails(cd);
            const d =JSON.parse(res2);
            setDates(d);
            // console.log(JSON.parse(res2)[0]);
            setCurDate(d[0]);
            
                for(let i=0;i<7;i++)
                {   if(i!==4){//nosunday
                    var e = {};
                    for(let j=0;j<cd.length;j++)
                        e[cd[j].empID] ={ attendance: 1, overtimeHours : '-'};
                    dict[d[i]]=e;
                    }
                };
                // console.log(dict);
            setxyz(dict);
            
          });
        },[]);

    
    
    
        // setxyz(dict);
// console.log(dict); 

    
    
    
    
    const details = [
        {name : 'Kelvin Gupta', role : 'Member', prev_score: 400, prev_normalHours: 30, prev_overtimeHours: 10, overtimeHours: 2, attendance: 1, satisfaction: 7},
        {name : 'Jonas Sharma', role : 'Member', prev_score: 375, prev_normalHours: 28, prev_overtimeHours: 10, overtimeHours: 4, attendance: 0, satisfaction: 9},
        {name : 'Ligma Sinha', role : 'Member', prev_score: 300, prev_normalHours: 25, prev_overtimeHours: 8, overtimeHours: -1, attendance: 0, satisfaction: 4},
        {name : 'Ramirez Shah', role : 'Leader', prev_score: 280, prev_normalHours: 22, prev_overtimeHours: 9, overtimeHours: 1, attendance: 1, satisfaction: 7},
        {name : 'Raju Sebastain', role : 'Member', prev_score: 250, prev_normalHours: 20, prev_overtimeHours: 5, overtimeHours: -1, attendance: 0, satisfaction: 6},
    ];

    // const [detailsState, setDetails] = useState(details);
    const current_week = '21/04/2021';

    // const date_list = ['21/04/2021','22/04/2021','23/04/2021','24/04/2021','25/04/2021','26/04/2021'];

    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello {"Ramirez"}</h1>

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
                    <div className="rows">{Rowmaker(currentDetails,xyz,setxyz,curDate)}</div>
                    <div className="empty-div"></div>

                    {/* SAVE BUTTON */}
                    <div className="record-save-btn">
                        <h4 className="h4 record-save-text" style={{userSelect:'none'}} >Save</h4>
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
                    <div style={{marginTop:'28px', display:'flex', flexDirection:'column'}}>{SatRowmaker(details)}</div>
                </div>
            </div>
        </div>
    );
}

export default Record;