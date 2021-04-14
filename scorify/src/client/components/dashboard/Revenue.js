import "./Revenue.css";

function Revenue({hist}){
    let revenue_amount = 25000;
    return(
        <div className="revenue-wrapper" style={hist===1?{transform:'translateY(344px)'}:{}}>
            <div className="revenue-rect">
                <h3 className="h3">Revenue Generated</h3>
                <h1 className="h1 revenue-amount">{"₹"+revenue_amount}</h1>
            </div>
        </div>
    );
}

export default Revenue;