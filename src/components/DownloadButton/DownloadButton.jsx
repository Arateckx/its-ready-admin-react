import React from "react";
import "./DownloadButton.css";
import Button from "react-bootstrap/Button";

const DownloadButton = () => {
  return (
    <div className="float-right download-text">
      <Button variant="primary">Download cijfers in PDF</Button>
    </div>
  );
};

export default DownloadButton;
