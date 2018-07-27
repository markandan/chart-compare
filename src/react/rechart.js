import React from 'react';
import { data } from "../data/data";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";

class ReChartsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: data["New vs Returning Visitors"].dataPoints,
      barClicked: false
    }
    this.barClick = this.barClick.bind(this);
  }
  barClick(e) {
    this.setState({
      chartData: data[e.activeLabel].dataPoints,
      barClicked: true
    });
  }
  render() {
    return (
      <div>
        {this.state.barClicked && <input type='button' value='Return' onClick={() => {
          this.setState({
            chartData: data["New vs Returning Visitors"].dataPoints,
            barClicked: false
          });
        }} />}
        <BarChart width={730} height={250} data={this.state.chartData} onClick={this.barClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="y" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

export default ReChartsComponent;
