import  "./Attendance.css";
import Chart from "react-google-charts";

//Change these variables
let present = 10;
let absent = 2;

function Attendance({hist})
{
    return(
        <div className="attendance-wrapper">
            <div className={"attendance-rect"+(hist===1?" low":"")}>
                <h5 className="h5 title">Attendance</h5>
                <div className="title-seperator"></div>
                <div className="full-pie-chart">
                    <Chart
                        className="pie-chart"
                        width={"150px"}
                        height={"150px"}        
                        chartType="PieChart"
                        loader={<div></div>}
                        data={[
                            ['Task', 'Hours per Day'],
                            ['Absent', absent],
                            ['Present', present],        //Number of days directly
                        ]}
                        options={{
                            // Just add this option
                            pieSliceBorderColor : "transparent",
                            enableInteractivity: 'false',
                            legend: 'none',
                            pieHole: 0.8,
                            pieSliceText: "none",
                            backgroundColor: "transparent",
                            chartArea: {'width': '100%', 'height': '100%'},
                            colors: ["#EF4444", "#22C55E"]
                        }}
                    />
                    <Chart
                        className="pie-chart-blur"
                        width={"150px"}
                        height={"150px"}        
                        chartType="PieChart"
                        loader={<div></div>}
                        data={[
                            ['Task', 'Hours per Day'],
                            ['Absent', absent],
                            ['Present', present],        //Number of days directly 
                        ]}
                        options={{
                            // Just add this option
                            pieSliceBorderColor : "transparent",
                            enableInteractivity: 'false',
                            legend: 'none',
                            pieHole: 0.8,
                            pieSliceText: "none",
                            backgroundColor: "transparent",
                            chartArea: {'width': '100%', 'height': '100%'},
                            colors: ["#F4B1B2", "#A2E5BD"]
                        }}
                    />
                </div>

                <div className="legend">
                    <div className="absent-legend">
                        <p className="p2 absent-text">Absent</p>
                        <h4 className="h4 absent-value">{absent}</h4>
                    </div>
                    <div className="present-legend">
                        <p className="p2 present-text">Present</p>
                        <h4 className="h4 present-value">{present}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Attendance;