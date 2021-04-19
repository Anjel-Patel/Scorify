import "./Contact.css";
import {ReactComponent as ContactPeopleSVG} from '../../assets/contact-people.svg';

function Contact() {
    return(
        <div className="contact-rect">
            <div className="contact-text-wrapper">
                <h1 className="h1">Here to&nbsp;</h1>
                <h1 className="h1" style={{color:'var(--blue-600)'}}>help.</h1>
            </div>
            <div className="all-dev-wrapper">
                <div className="dev-wrapper" style={{paddingLeft:'0px', border:'none'}}>
                    <h3 className="h3 dev-name">Anjel Patel</h3>
                    <p className="p1 dev-details">+91-7990094151</p>
                    <p className="p1 dev-details">f20190126@hyderabad.bits-pilani.ac.in</p>
                </div>
                <div className="dev-wrapper">
                    <h3 className="h3 dev-name">Atishay Jain</h3>
                    <p className="p1 dev-details">+91-8824836066</p>
                    <p className="p1 dev-details">f20190106@hyderabad.bits-pilani.ac.in</p>
                </div>
                <div className="dev-wrapper">
                    <h3 className="h3 dev-name">Parth Gedia</h3>
                    <p className="p1 dev-details">+91-9167707691</p>
                    <p className="p1 dev-details">f20190151@hyderabad.bits-pilani.ac.in</p>
                </div>
                <div className="dev-wrapper" style={{paddingRight:'0px'}}>
                    <h3 className="h3 dev-name">Mukund Varshney</h3>
                    <p className="p1 dev-details">+91-7340165221</p>
                    <p className="p1 dev-details">f20190113@hyderabad.bits-pilani.ac.in</p>
                </div>
            </div>
            <p className="p1 dev-location">From BITS Pilani Hyderabad Campus</p>
            <div></div>
            <ContactPeopleSVG className="contact-people-svg"/>
        </div>
    );
}

export default Contact;