import "./Revenue.css";
import Axios from "axios";
import { useState, useEffect } from 'react';
function Revenue({hist, role}){
    const [revenue, setRevenue] = useState(0);
    useEffect(() => {
        (async () => {
            const response= await Axios.get("http://localhost:8000/revenue");
        setRevenue((response.data).revenue);
          })();
        },[]);
    // let revenue_amount = 25000; //i think not needed display part code 
    return(
        // <div className="revenue-wrapper" style={role !==1 ?{display:'none'}:{}}> 
            <div className="revenue-rect" style={hist===1?{transform:'translateY(344px)'}:{}}>
                <h3 className="h3">Revenue Generated</h3>
                <h1 className="h1 revenue-amount">{"₹"+revenue}</h1>
            </div>
        // </div>
    );
}

export default Revenue;