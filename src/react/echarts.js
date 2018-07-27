import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { data } from '../data/data';


class EchartsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataKey: 'New vs Returning Visitors',
      barClicked: false,
    };
    this.barClick = this.barClick.bind(this);
    this.getOption = this.getOption.bind(this);
  }

  getOption() {
    const { chartDataKey } = this.state;
    return {
      title: {
        text: chartDataKey,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Count'],
      },
      toolbox: {
        feature: {
          saveAsImage: {
            title: 'Save',
          },
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          data: data[chartDataKey].dataPoints.map(dataPoint => dataPoint.name),
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Count',
          type: 'bar',
          data: data[chartDataKey].dataPoints.map(dataPoint => dataPoint.y),
        },
      ],
    };
  }

  barClick(e) {
    const clickedElement = e.name;
    const validDataKeys = ['New Visitors', 'New vs Returning Visitors', 'Returning Visitors'];
    if (validDataKeys.indexOf(clickedElement) > -1) {
      this.setState({
        chartDataKey: e.name,
        barClicked: true,
      });
    }
  }

  render() {
    const { barClicked } = this.state;
    const chartOption = this.getOption();
    return (
      <div>
        {barClicked && (
        <input
          type="button"
          value="Return"
          onClick={() => {
            this.setState({
              chartDataKey: 'New vs Returning Visitors',
              barClicked: false,
            });
          }}
        />
        )}
        <ReactEcharts
          option={chartOption}
          style={{ height: '350px', width: '100%' }}
          className="react_for_echarts"
          onEvents={{
            click: this.barClick,
          }}
        />
      </div>
    );
  }
}

export default EchartsComponent;
