import TopBarCSS from './TopBar.css';
import {ReactComponent as Logo} from './assets/scorifyLogo.svg';
import './index.css';

function TopBar()
{
    return(
        <div className="bar-rect">
            <div className="side">
                <div className="logo-with-text">
                    <Logo className="logo"/>
                    <h4 className="h4 scorify">scorify.</h4>
                </div>
                <h4 className="h4 link dashboard">Dashboard</h4>
                <h4 className="h4 link">History</h4>
                <h4 className="h4 link">Leaderboard</h4>
            </div>
            <div className="empty-div"></div>
            <div className="side">
                <h4 className="h4 link">About</h4>
                <h4 className="h4 link">Contact</h4>
                <div className="profile"></div>
            </div>
        </div>
    );
}

export default TopBar;