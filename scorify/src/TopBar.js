import './TopBar.css';
import Logo from './assets/scorifyLogo.png';
import Profilephoto from './assets/userpng.png'
import {ReactComponent as LogoSVG} from './assets/scorifyLogo.svg';
import './index.css';

function TopBar()
{
    return(
        <div className="bar-rect">
            <div className="side">
                <div className="logo-with-text">
                    <LogoSVG className="logo"/>
                    {/* <img src={Logo} className="logopng"/> */}
                    <h4 className="h4 scorify">scorify</h4>
                </div>
                <h4 className="h4 link dashboard">Dashboard</h4>
                <h4 className="h4 link">History</h4>
                <h4 className="h4 link">Leaderboard</h4>
            </div>
            <div className="empty-div"></div>
            <div className="side">
                <h4 className="h4 link">About</h4>
                <h4 className="h4 link">Contact</h4>
                <div className="profile">
                    <img className="profile-photo" src={Profilephoto} alt="😎"/>
                </div>
            </div>
        </div>
    );
}

export default TopBar;