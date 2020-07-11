import React from "react";
import "./HomePage.css";
import DatePicker from "../../components/DatePicker/DatePicker";
import LiveViewCards from "../../components/LiveViewCards/LiveViewCards";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import OrdersChart from "../../components/OrdersChart/OrdersChart";
import IncomesChart from "../../components/IncomesChart/IncomesChart";

const HomePage = () => {
  return (
    <div>
      <div className="col-3 head-title">
        <h3>HOME</h3>
      </div>
      <div className="row mt-5 d-flex">
        <div className="col">
          <DatePicker />
        </div>
        <div className="col float-right">
          <DownloadButton />
        </div>
      </div>
      <div className="row mt-5 d-flex container-fluid justify-content-center">
        <div className="col-md-6">
          <OrdersChart />
        </div>
        <div className="col-md-6">
          <IncomesChart />
        </div>
      </div>
      <div className="col-3 live-view mt-3">LIVE OVERZICHT</div>
      <div className="live-view-card-container">
        <LiveViewCards />
      </div>
    </div>
  );
};

export default HomePage;
