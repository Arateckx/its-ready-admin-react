import React from "react";
import "./NotificationSearchBar.css";
import { ReactComponent as ReactLogo } from "../../assets/search.svg";
import { FormControl, InputGroup } from "react-bootstrap";

const NotificationSearchBar = () => {
  return (
    <InputGroup className="mb-3 ml-auto">
      <FormControl
        placeholder="Zoek bericht"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        className="searchbar-merchants"
      />
      <InputGroup.Append>
        <button
          className="searchbar-button"
          style={{
            padding: "0px",
          }}
        >
          {" "}
          <div className="search-icon">
            <ReactLogo />
          </div>
        </button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NotificationSearchBar;
