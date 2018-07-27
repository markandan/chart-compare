import React from 'react';
import { data } from "../data/data";
import {Bar} from 'react-chartjs-2';

const originalData = {...data};
const initialData = {
  labels: ['New Visitors', 'Returning Visitors'],
  datasets: [{
    data: originalData['New vs Returning Visitors'].dataPoints.map((datapoint) => {
      return datapoint.y;
    }),
    "label": "New vs Returning Visitors"
  }]
};

class ChartjsComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      chartData: {...initialData},
      barClicked: false
    }
    this.barClick = this.barClick.bind(this);
  }


  barClick(e) {
    let clickedElement = e[0]._view.label;
    let dataVal = {
      labels: originalData[clickedElement].dataPoints.map((datapoint) => {
        return datapoint.name;
      }),
      datasets: [{
        data: originalData[clickedElement].dataPoints.map((datapoint) => {
          return datapoint.y;
        }),
        "label": clickedElement
      }]
    }
    this.setState({
      chartData: dataVal,
      barClicked: true
    });
  }
  render() {
    console.log(initialData);
    return (
      <div>
        {this.state.barClicked && <input type='button' value='Return' onClick={() => {
          console.log(initialData);
          this.setState({
            chartData: {...initialData},
            barClicked: false
          });
        }} />}
        <Bar
          data={this.state.chartData}
          width={200}
          height={250}
          onElementsClick={this.barClick}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default ChartjsComponent;
