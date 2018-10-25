import React, { Component } from 'react';
import {RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts';
 
const style = {
    top: 0,
    left: 260,
    lineHeight: '24px'
};

const CustomToolTip = (props) => {
    const active = props.payload[0];
    if(active){
        return (
            <div style={{backgroundColor: "#fff", height: "40px", width: "100%", padding: ".50rem", borderRadius: "6px"}} className="custom-tooltip">
                <p className="text-muted">{`${props.payload[0].payload.name} : ${props.payload[0].value}`}</p>
            </div>
        );
    }
    return null;
}

const SimpleRadialBarChart = (props) => {
    return(
    	<RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={20} outerRadius={100} barSize={10} data={props.data}>
            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv'/>
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
            <Tooltip content={<CustomToolTip />} />
        </RadialBarChart>)
}

class StatisticRadialBarChart extends Component {
    render() {
        return (
            <SimpleRadialBarChart data={this.props.data} />
        );
    }
}

export default StatisticRadialBarChart;
