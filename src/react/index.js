import React from 'react';
import ReactDOM from 'react-dom';
import ReChartsComponent from './rechart';
import ChartjsComponent from './chartjs';
import EchartsComponent from './echarts';

ReactDOM.render(
  <div>
    <h1>
      ReCharts
    </h1>
    <ReChartsComponent />
    <h1>
      Chart.js
    </h1>
    <ChartjsComponent />
    <h1>
      Echarts
    </h1>
    <EchartsComponent />
  </div>,
  document.getElementById('app'),
);
