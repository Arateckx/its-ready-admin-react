import React from 'react';
import { Chart } from 'react-charts';
import './OrdersChart.css';

function OrdersChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          { x: 1, y: 15 },
          { x: 2, y: 3 },
          { x: 3, y: 19 },
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div>
      <div className="d-flex">
        <div className="col ml-3 chart-title"># BESTELLINGEN</div>
        <div className="col text-right chart-total">totaal: 30</div>
      </div>
      <div
        style={{
          width: '550px',
          height: '231px',
          background: '#FFFFFF',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
          borderRadius: '10px',
          fontSize: '14px',
          lineHeight: '19px',
          color: '#000000',
          marginLeft: '30px',
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    </div>
  );
}

export default OrdersChart;
