import './Sidebar.css';
import {ReactComponent as LogoSVG} from '../assets/scorifyLogo.svg';
import {ReactComponent as DashboardSVG} from "../assets/dashboard.svg";
import {ReactComponent as LeaderboardSVG} from "../assets/leaderboard.svg";
import {ReactComponent as ProfileSVG} from "../assets/profile.svg";
import {ReactComponent as AboutSVG} from "../assets/about.svg";
import {ReactComponent as ContactSVG} from "../assets/contact.svg";

function TopBar()
{
    return(
        <div className="bar-rect">
            <div className="scorify-box">
                <div className="scorify-container">
                    <LogoSVG className="logo-svg"/>
                    <h3 className="h3 scorify">scorify.</h3>
                </div>
            </div>
            {/* ROUTER CAN BE USED HERE */}
            <div className="link-box">
                {/* "link-focus" needs to be concatenated at the end of the link of the page user is on. Example given here. */}
                <div className="link-container link-focus"> 
                    <DashboardSVG className="link-logo"/>
                    <h4 className="h4 link-text">Dashboard</h4>
                </div>
                <div className="link-container">
                    <LeaderboardSVG className="link-logo"/>
                    <h4 className="h4 link-text">Leaderboard</h4>
                </div>
                <div className="link-container">
                    <ProfileSVG className="link-logo"/>
                    <h4 className="h4 link-text">Personal Info</h4>
                </div>
                <div className="link-container">
                    <AboutSVG className="link-logo"/>
                    <h4 className="h4 link-text">About</h4>
                </div>
                <div className="link-container">
                    <ContactSVG className="link-logo"/>
                    <h4 className="h4 link-text">Contact</h4>
                </div>
            </div>
        </div>
    );
}

export default TopBar;