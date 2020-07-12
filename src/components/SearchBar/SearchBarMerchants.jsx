import React from "react";
import "./SearchBarMerchants.css";
import { ReactComponent as ReactLogo } from "../../assets/search.svg";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchBarMerchants = () => {
  return (
    <InputGroup className="mb-3 ml-auto">
      <FormControl
        placeholder="Zoek handelaar"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        className="searchbar-merchants"
        style={{ fontFamily: "Track" }}
      />
      <InputGroup.Append>
        <button
          className="searchbar-button"
          style={{
            padding: "0px",
          }}
        >
          <div className="search-icon">
            <ReactLogo />
          </div>
        </button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBarMerchants;
