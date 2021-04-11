import TeammatesCSS from "./Teammates.css";
import TeamRow from "./TeammateRow";
import {ReactComponent as Chevron} from "../../assets/chevron.svg";

function Rowmaker(details) {
    //Loops through the details array
    return details.map((info, i) => (
        <TeamRow name= {info.name} phno= {info.phno} email= {info.email} role= {info.role} mate_score={info.mate_score} self_score={info.self_score}/>
    ));
}

function Teammates()
{
    //The variable where all rows go. Do note the format.
    //Name, phno, email, role, mate_score, self_score
    const details = [
        {name : 'Alex Prajapati', phno : '9898265423', email : 'alexp98@gmail.com', role : 'Leader', mate_score: 350, self_score: 200},
        {name : 'Kelvin Gupta', phno : '9897277831', email : 'keving1986@gmail.com', role : 'Member', mate_score: 165, self_score: 200},
        {name : 'Jonas Sharma', phno : '6256265423', email : 'jsharma69@gmail.com', role : 'Member', mate_score: 250, self_score: 200},
        {name : 'Ligma Sinha', phno : '9855677831', email : 'ligmab420@gmail.com', role : 'Member', mate_score: 130, self_score: 200},
        {name : 'Raju Sebastain', phno : '9898260328', email : 'rseb666@gmail.com', role : 'Member', mate_score: 400, self_score: 200}
    ];

    return(
        <div className="teammates-rect">
            <h5 className="h5 title">Teammates</h5>
            <div className="title-seperator"></div>
            <div className="header">
                <p className="p1 head" style={{left:'24px'}}>Name</p>
                {/* Add a "no" at the end of chevron classname to remove */}
                <Chevron className="chevron head no" style={{left:'75px'}}/>
                <p className="p1 head" style={{left:'209px'}}>Ph No.</p>
                <p className="p1 head" style={{left:'367px'}}>Email</p>
                <p className="p1 head" style={{left:'615px'}}>Role</p>
                <p className="p1 head" style={{left:'771px'}}>Score Analysis</p>
                <p className="p1 head" style={{left:'1010px'}}>Score</p>
                {/* Add an inverted at the end to show reverse sorting order */}
                <Chevron className="chevron head inverted" style={{left:'1060px'}}/> 
            </div>
            <div className="rows">{Rowmaker(details)}</div>
        </div>
    );
}
export default Teammates;