import React from "react";
import "./HomePage.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import LiveViewCards from "../../components/LiveViewCards/LiveViewCards";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import OrdersChart from "../../components/OrdersChart/OrdersChart";
import IncomesChart from "../../components/IncomesChart/IncomesChart";

const HomePage = () => {
  return (
    <div style={{ paddingBottom: "100px" }}>
      <div className="container-fluid" style={{ marginLeft: "15px" }}>
        <div className="head-title ">
          <h3>HOME</h3>
        </div>
        <div className="row mt-5">
          <div className="col">
            <DatePicker />
          </div>
          <div className="col float-right">
            <DownloadButton />
          </div>
        </div>
      </div>
      <div
        className="row mt-5 container-fluid justify-content-center"
        style={{ margin: "0px", paddingRight: "0px" }}
      >
        <div className="col-md-6">
          <OrdersChart />
        </div>
        <div className="col-md-6">
          <IncomesChart />
        </div>
        <div className="col-12 live-view mt-5">LIVE OVERZICHT</div>
        <div className="col-12 live-view mt-3">
          <LiveViewCards />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
