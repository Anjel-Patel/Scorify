import './Sidebar.css';
import {ReactComponent as LogoSVG} from '../assets/scorifyLogo.svg';
import {ReactComponent as DashboardSVG} from "../assets/dashboard.svg";
import {ReactComponent as LeaderboardSVG} from "../assets/leaderboard.svg";
import {ReactComponent as RecordSVG} from "../assets/clipboard.svg";
import {ReactComponent as ModifySVG} from "../assets/modify.svg";
import {ReactComponent as ProfileSVG} from "../assets/profile.svg";
import {ReactComponent as AboutSVG} from "../assets/about.svg";
import {ReactComponent as ContactSVG} from "../assets/contact.svg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState} from "react";



// style={role===0?{display:'none'}:{}}
// style={role===0?{display:'none'}:{}}

function Sidebar({currPage, role})
{
    return(
        <div className="bar-rect">
            <div className="scorify-box">
                <Link className="link-react-router-dom" to={"/login"}>
                    <div className="scorify-container">
                        <LogoSVG className="logo-svg"/>
                        <h3 className="h3 scorify">scorify.</h3>
                    </div>
                </Link>
            </div>
            {/* ROUTER CAN BE USED HERE */}
            <div className="link-box">
                {/* "link-focus" needs to be concatenated at the end of the link of the page user is on. Example given here. */}
                <Link className="link-react-router-dom" to={"/"}>
                    <div className={"link-container"+(currPage===0?" link-focus":"")}> 
                        <DashboardSVG className="link-logo"/>
                        <h4 className="h4 link-text">Dashboard</h4>
                    </div>
                </Link>
                <Link className="link-react-router-dom" to={"/leaderboard"}>
                    <div className={"link-container"+(currPage===1?" link-focus":"")}>
                        <LeaderboardSVG className="link-logo"/>
                        <h4 className="h4 link-text">Leaderboard</h4>
                    </div>
                </Link>
                {role!==0 && <Link className="link-react-router-dom" to={"/record"}>
                    <div className={"link-container"+(currPage===5?" link-focus":"")}>
                        <RecordSVG className="link-logo"/>
                        <h4 className="h4 link-text">Record</h4>
                    </div>
                </Link>}
               {role===2 && <Link className="link-react-router-dom" to={"/modify"}>
                    <div className={"link-container"+(currPage===6?" link-focus":"")} >
                        <ModifySVG className="link-logo"/>
                        <h4 className="h4 link-text">Modify</h4>
                    </div>
                </Link>}
                <Link className="link-react-router-dom" to={"/personalinfo"}>
                    <div className={"link-container"+(currPage===2?" link-focus":"")}>
                        <ProfileSVG className="link-logo"/>
                        <h4 className="h4 link-text">Personal Info</h4>
                    </div>
                </Link>
                <Link className="link-react-router-dom" to={"/about"}>
                    <div className={"link-container"+(currPage===3?" link-focus":"")}>
                        <AboutSVG className="link-logo"/>
                        <h4 className="h4 link-text">About</h4>
                    </div>
                </Link>
                <Link className="link-react-router-dom" to={"/contact"}>
                    <div className={"link-container"+(currPage===4?" link-focus":"")}>
                        <ContactSVG className="link-logo"/>
                        <h4 className="h4 link-text">Contact</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;