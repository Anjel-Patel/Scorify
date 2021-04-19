import './Modify.css';
import InsertEmployee from './InsertEmployee';
import InsertProject from './InsertProject';

function Modify() {
    const fname = "Ramirez";
    return(
        <div classname="page-rect">
            <h1 className="h1 hello-text">Hello {fname}</h1>
            <div className="modify-wrapper">
                <InsertEmployee></InsertEmployee>
                <InsertProject></InsertProject>
            </div>
        </div>
    );
}

export default Modify;