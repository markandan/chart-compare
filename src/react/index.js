import React from 'react';
import ReactDOM from 'react-dom';
import ReChartsComponent from "./rechart";
import ChartjsComponent from './chartjs';

ReactDOM.render(
  <div>
    <ReChartsComponent></ReChartsComponent>
    <ChartjsComponent></ChartjsComponent>
  </div>,
  document.getElementById('app'),
);

