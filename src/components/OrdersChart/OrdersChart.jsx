import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./OrdersChart.css";

function OrdersChart() {
  const data = [
    {
      name: "01/01",
      pv: 0,
      amt: 2400,
    },
    {
      name: "01/02",
      pv: 10,
      amt: 2210,
    },
    {
      name: "01/03",
      pv: 20,
      amt: 2290,
    },
    {
      name: "01/04",
      pv: 14,
      amt: 2000,
    },
    {
      name: "01/05",
      pv: 30,
      amt: 2181,
    },
  ];

  return (
    <div>
      <div className="d-flex">
        <div className="col ml-3 chart-title" style={{ marginLeft: "0px" }}>
          # BESTELLINGEN
        </div>
        <div className="col text-right chart-total">totaal: 30</div>
      </div>
      <div
        style={{
          width: "100%",
          height: "231px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          fontSize: "14px",
          lineHeight: "19px",
          color: "#000000",
        }}
      >
        <div
          style={{
            marginLeft: "-20px",
            width: "100%",
            height: "100%",
            paddingTop: "20px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              height={231}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis
                axisLine={false}
                tickLine={false}
                tickSize={10}
                dataKey="name"
              />
              <YAxis axisLine={false} tickLine={false} tickSize={20} />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#413E38"
                strokeWidth={3.5}
                width={10}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default OrdersChart;
