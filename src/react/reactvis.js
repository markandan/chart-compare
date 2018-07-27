import React from 'react';
import { data } from "../data/data";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';

data["New vs Returning Visitors"].dataPoints = data["New vs Returning Visitors"].dataPoints.map((datapoint) => Object.assign({}, datapoint, {x: datapoint.name.toString()}));
data["New Visitors"].dataPoints = data["New Visitors"].dataPoints.map((datapoint) => Object.assign({}, datapoint, {x: datapoint.name.toString()}));
data["Returning Visitors"].dataPoints = data["Returning Visitors"].dataPoints.map((datapoint) => Object.assign({}, datapoint, {x: datapoint.name.toString()}));

class ReactvisChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: data["New vs Returning Visitors"].dataPoints,
      barClicked: false
    }
    this.barClick = this.barClick.bind(this);
  }
  barClick(dataPoint, e) {
    this.setState({
      chartData: data[dataPoint.x].dataPoints,
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
        <XYPlot
          width={800}
          height={300}
          xType="ordinal">
          <HorizontalGridLines />
          <VerticalBarSeries
            color="blue"
            onValueClick={this.barClick}
            data={this.state.chartData}/>
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}

export default ReactvisChart;
