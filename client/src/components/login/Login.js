import './Login.css';
import {ReactComponent as LogoSVG} from '../../assets/scorifyLogo.svg';
import Axios from 'axios';
import {ReactComponent as InfoSVG} from '../../assets/info.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

/*const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;*/

function Login({setRole})
{
    const [isValid, setValid] = useState(false) ;
    const [eID, seteid]=useState("");
    const [password, setpassword]= useState("");
    const [isError, setError] = useState(1);
    const log = () => {
        
    Axios.post("http://localhost:8000/authenticate", {
           eID: eID,
           password: password, 
        }).then((response) => {
            console.log(response);
        });
    };
    Axios.get("http://localhost:8000/role").then((result) => {
        setRole(parseInt(result.data));
    });

    return(
       <div className="login-page-rect">
           <h2 className="h2 scorify-text">scorify.</h2>
           <LogoSVG className="scorify-logo"></LogoSVG>
           <h1 className="h1" style={{marginTop:'32px'}}>Sign in to your account</h1>
           <div className="login-card">
               <div style={{marginBottom:'32px'}}>
                    <p className="p1">Employee ID</p>
                    <input type="int"
                    onChange={(e)=> {
                        seteid(e.target.value);
                    }}
                    className={"p1 input-field"+(isError?"-error":"")}  id="email"
                    />
                </div>
               <div style={{marginBottom:'24px'}}>
                    <p className="p1">Password</p>
                    <input type="password"
                    onChange={(e)=> {
                        setpassword(e.target.value);
                    }} 
                    className={"p1 input-field"+(isError?"-error":"")}  id="password"
                    />
                </div>
                <h6 className="h6 forgot-pass" style={{display:'none'}} >Forgot Password?</h6>
                <div className="empty-div"></div>
                <Link className="link-react-router-dom" to={"/"}  >
                    <div className="login-btn" onClick={log}>
                        <h5 className="h5">Sign in</h5>
                    </div>
                </Link>
           </div>
       </div>
    )
}
export default Login;