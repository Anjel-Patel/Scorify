import './Modify.css';
import InsertEmployee from './InsertEmployee';
import InsertProject from './InsertProject';
import Axios from "axios";
import { useState, useEffect } from 'react';
function Modify() {
    const [FName, setFName] = useState('');
    const [allProjects, setAllprojects] = useState([]);
    const [emptyEmployee,setEmptyEmployee] = useState([]);
    const [add,setAdd] = useState(0);
    useEffect(() => {
        Axios.get("http://localhost:8000/data").then((response) => {
        const [res1,res2,res3]=(response.data).split("   ",3);
        allProjects(JSON.parse(res2));
        setEmptyEmployee(JSON.parse(res1));
        setFName((JSON.parse(res3)).fname);   
          });
        },[add]); 
    // const fname = "Ramirez";
    return(
        <div classname="page-rect">
            <h1 className="h1 hello-text">Hello {Fname}</h1>
            <div className="modify-wrapper">
                <InsertEmployee  allProjects = {allProjects} add={add} setAdd= {setAdd} />
                <InsertProject/>
            </div>
        </div>
    );
}

export default Modify;