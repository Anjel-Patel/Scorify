import './Login.css';
import {ReactComponent as LogoSVG} from '../../assets/scorifyLogo.svg';
import {ReactComponent as InfoSVG} from '../../assets/info.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

function Login()
{
    const [isError, setError] = useState(1);
    return(
       <div className="login-page-rect">
           <h2 className="h2 scorify-text">scorify.</h2>
           <LogoSVG className="scorify-logo"></LogoSVG>
           <h1 className="h1" style={{marginTop:'32px'}}>Sign in to your account</h1>
           <div className="login-card">
               <div style={{marginBottom:'32px'}}>
                    <p className="p1">Email Address</p>
                    <input type="text" className={"p1 input-field"+(isError?"-error":"")} id="email"></input>
                </div>
               <div style={{marginBottom:'24px'}}>
                    <p className="p1">Password</p>
                    <input type="password" className={"p1 input-field"+(isError?"-error":"")} id="password"></input>
                </div>
                <h6 className="h6 forgot-pass">Forgot Password?</h6>
                <div className="empty-div"></div>
                <Link className="link-react-router-dom" to={"/"}>
                    <div className="login-btn">
                        <h5 className="h5">Sign in</h5>
                    </div>
                </Link>
           </div>
       </div>
    )
}
export default Login;