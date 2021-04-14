import "./About.css";
import {ReactComponent as AboutTeamSVG} from "../../assets/about-team.svg";

function About() {
    return(
        <div className="about-rect">
            <div className="about-text-wrapper">
                <div className="about-tagline-wrapper">
                    <h1 className="h1">Here at&nbsp;</h1>
                    <h1 className="h1" style={{color:'var(--blue-600)'}}>scorify.</h1>
                </div>
                <p className="p1" style={{color:'var(--neutral-500)', marginTop:'24px'}}>We aim to transform an employee’s boring work day into a creative<br/>hustle that inspires them to compete with their mates, track their<br/>progress and most importantly, have a fun challenging environment<br/>that inspires and awakens them.</p>
            </div>
            <div style={{flex:1}}></div>
            <AboutTeamSVG style={{marginRight:'72px'}}/>
        </div>
    );
}

export default About;