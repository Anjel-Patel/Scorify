import React from 'react'
import Rankingcard from './Rankingcard'
import Axios from "axios";
import { useState, useEffect } from 'react';

function Leaderborad(props){
    const [name, setName] = useState('');
    const [leaderBoardInfo, setLeaderBoardInfo] = useState([]);
    const [department,setDepartment] = useState('');
    useEffect(() => {
        Axios.get("http://localhost:8000/leaderboard").then((response) => {
        const [res1,res2,res3]=(response.data).split("   ",3);
        setLeaderBoardInfo(JSON.parse(res1));
        setDepartment((JSON.parse(res2)).deptname);
        setName((JSON.parse(res3)).FullName);
        
        // console.log((JSON.parse(res2)).FullName);
          });
        },[]); 
        var [fname,lname]=(name).split(" ",2);
    return(
        <div className="page-rect">
            <h1 className="h1 hello-text">Hello, {fname}!</h1>
            <div className="cards">
                <Rankingcard name ={name} leaderBoardInfo = {leaderBoardInfo} department = {department} />
            </div>
        </div>
    );
}

export default Leaderborad;