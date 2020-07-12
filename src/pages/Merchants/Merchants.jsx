import React from "react";
import "./Merchants.css";
import SearchBarMerchants from "../../components/SearchBar/SearchBarMerchants";
import AddButton from "../../components/AddButton/AddButton";
import MerchantsTable from "../../components/MerchantsTable/MerchantsTable";

const Merchants = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex" style={{ marginTop: "10px" }}>
        <div className="page-title">HANDELAARS</div>
        <div className="ml-auto merchants-components">
          <SearchBarMerchants />
        </div>
        <div className="merchants-components-second">
          <AddButton />
        </div>
      </div>
      <div className="">
        <MerchantsTable />
      </div>
    </div>
  );
};

export default Merchants;
