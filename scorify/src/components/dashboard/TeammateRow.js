import './TeammateRow.css';
import Chart from "react-google-charts";

function TeammateRow({name, phno, email, role, mate_score, self_score}) {
    mate_score = parseInt(mate_score);
    self_score = parseInt(self_score);
    let bar_color = (mate_score<self_score)?"#EF4444":"#22C55E";
    let sign = (mate_score>self_score)?"+":"-";
    let ratio = Math.round(
        (mate_score>self_score)?
        ((mate_score-self_score)*100/self_score):
        ((self_score-mate_score)*100/self_score)).toFixed(1);
    return(
        <div className="row-rect">
            <p className="p1 details" style={{left : '24px'}}>{name}</p>
            <p className="p1 details" style={{left : '209px'}}>{phno}</p>
            <p className="p1 details" style={{left : '367px'}}>{email}</p>
            <p className="p1 details" style={{left : '615px'}}>{role}</p>
            <p className="p1 details" style={{left : '1010px'}}>{mate_score}</p> {/*Do not move this row*/}

            <h5 className="h5 details" style={{right : '267px', color: bar_color}}>{sign+ratio+"%"}</h5>

            <Chart className="details-chart" style={{left : '835px'}}
            width={'100px'}
            height={'28px'}
            chartType="BarChart"
            loader={<div></div>}
            data={[
                ['Score', 'Your Score', {role: "style"}],
                ['Scores1', self_score, "color: #64748B"],
                ['Scores2', mate_score, "color:"+bar_color],
            ]}
            options={{
                animation: {duration: 500, easing: 'in', startup: true},
                bar: {groupWidth: "57.1428%"},
                chartArea: { width: '100%' , height: "100%"},
                backgroundColor: "transparent",
                enableInteractivity: 'false',
                legend: 'none',
                colors: ["#64748B", bar_color],
                hAxis: {
                minValue: 0,
                gridlines:{color: 'transparent'},
                baselineColor: {color: 'var(--neutral-500'},
                },
                vAxis: {
                },
            }}
            />
        </div>
    )

}
export default TeammateRow;