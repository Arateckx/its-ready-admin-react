import React from "react";
import "./Settings.css";
import SettingsButton from "../../components/SettingsButton/SettingsButton";
import SettingsTable from "../../components/SettingsTable/SettingsTable";
import SettingsButtonFirst from "../../components/SettingsButtonFirst/SettingsButtonFirst";
import SettingsButtonSecond from "../../components/SettingsButtonSecond/SettingsButtonSecond";

const Settings = () => {
  return (
    <div>
      <div className="settings-button-first">
        <SettingsButtonFirst />
      </div>
      <div className="settings-button-second">
        <SettingsButtonSecond />
      </div>
      <div className="row d-flex settings-title">
        <div className="col head-title">
          <h3>BEHEERDERS</h3>
          <div className="col float-right">
            <SettingsButton />
          </div>
        </div>
      </div>
      <div className="settings-table">
        <SettingsTable />
      </div>
    </div>
  );
};

export default Settings;
