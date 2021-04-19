import './Modify.css';
import InsertEmployee from './InsertEmployee';
import InsertProject from './InsertProject';
import Axios from "axios";
import { useState, useEffect } from 'react';
function Modify() {
    const [FName, setFName] = useState('');
    const [allProjects, setAllprojects] = useState([]);
    const [nullEmployee,setNullEmployee] = useState([]);
    const [add,setAdd] = useState(0);
    useEffect(() => {
        
        (async () => {
        const response= await Axios.get("http://localhost:8000/data")
        const [res1,res2,res3]=(response.data).split("   ",3);
        setAllprojects(JSON.parse(res2));
        setNullEmployee(JSON.parse(res1));
        setFName((JSON.parse(res3)).fname);   
          })();

        },[add]); 
    // const fname = "Ramirez";
    return(
        <div classname="page-rect">
            <h1 className="h1 hello-text">Hello {FName}</h1>
            <div className="modify-wrapper">
                <InsertEmployee  allProjects = {allProjects} add={add} setAdd= {setAdd} />
                {/* <InsertProject  emptyEmployee= {nullEmployee} add={add} setAdd= {setAdd} /> */}
            </div>
        </div>
    );
}

export default Modify;