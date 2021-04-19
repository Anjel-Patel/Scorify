import './Login.css';
import {ReactComponent as LogoSVG} from '../../assets/scorifyLogo.svg';
import {ReactComponent as ErrorSVG} from '../../assets/error-octagon.svg';
import Axios from 'axios';
import {ReactComponent as InfoSVG} from '../../assets/info.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const regexPassword = /^[\S]{6,10}$/;
/*const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;*/

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;

function Login({ setRole }) {
  const [isValid, setValid] = useState(false);
  const [eID, seteid] = useState("");
  const [password, setpassword] = useState("");
  const [isError, setError] = useState(2); //Initially undefined(2). Called isError but its the opposite. isError = 1 when credentials match
  const [isValid1, setIsValid1] = useState(0);
  const [isValid2, setIsValid2] = useState(0);
  const log = () => {
    Axios.post("http://localhost:8000/authenticate", {
eID: eID,
password: password, 
}).then((response) => {
 temp = response.data.role;
 setError(response.data.status);
 setRole(temp);
 console.log(response);
});
};
//   Axios.get("http://localhost:8000/role").then((result) => {
//     setRole(parseInt(result.data));
//   });
  function Validate(e, i) {
    switch (i) {
      case "email":
        if (regexEmail.test(e)) {
          setIsValid1(0);
        } else {
          setIsValid1(1);
        }
      case "password":
        if (regexPassword.test(e)) {
          setIsValid2(0);
        } else {
          setIsValid2(1);
        }
    }
  }

  return (
    <div className="login-page-rect">
      <h2 className="h2 scorify-text">scorify.</h2>
      <LogoSVG className="scorify-logo"></LogoSVG>
      <h1 className="h1" style={{ marginTop: "32px" }}>
        Sign in to your account
      </h1>
      <div className="login-card">
        <div style={{ marginBottom: "32px" }}>
        <div className="text-wrapper">
                        <p className="p1">Employee ID</p>
                        <ErrorSVG className="error-svg" style={isError===-1?{opacity:'100%'}:{opacity:'0%'}}></ErrorSVG>
                        <p className="p2 error-text" style={isError===-1?{opacity:'100%'}:{opacity:'0%'}}>You might have entered a wrong ID.</p>
                    </div>
          <input
            type="int"
            onChange={(e) => {
              seteid(e.target.value);
              Validate(e.target.value, e.target.id);
            }}
            className={"p1 input-field" + (isValid1 === 1 ? "-error" : "")}
            id="email"
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
        <div className="text-wrapper">
                        <p className="p1">Password</p>
                        <ErrorSVG className="error-svg" style={isError===0?{opacity:'100%'}:{opacity:'0%'}}></ErrorSVG>
                        <p className="p2 error-text" style={isError===0?{opacity:'100%'}:{opacity:'0%'}}>You might have entered a wrong password.</p>
                    </div>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
              Validate(e.target.value, e.target.id);
            }}
            className={"p1 input-field" + (isValid2 === 1 ? "-error" : "")}
            id="password"
          />
        </div>
        <h6 className="h6 forgot-pass" style={{ display: "none" }}>
          Forgot Password?
        </h6>
        <div className="empty-div"></div>
        <Link className="link-react-router-dom" to={isError?"/dashboard":"/"}  >
          <div className="login-btn" onClick={log}>
            <h5 className="h5">Sign in</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Login;
