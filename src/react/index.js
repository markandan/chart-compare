import React from 'react';
import ReactDOM from 'react-dom';
import ReChartsComponent from './rechart';
import ChartjsComponent from './chartjs';
import EchartsComponent from './echarts';
import ReactvisChart from './reactvis';

ReactDOM.render(
  <div>
    <h2>
      ReCharts
    </h2>
    <ReChartsComponent />
    <h2>
      Chart.js
    </h2>
    <ChartjsComponent />
    <h2>
      Echarts
    </h2>
    <EchartsComponent />
    <h2>React Vis
    </h2>
    <ReactvisChart></ReactvisChart>
  </div>,
  document.getElementById('app')
);
