import React from 'react';
import './SettingsButtonFirst.css';

const SettingsButtonFirst = () => {
  return (
    <div className="first-button d-flex align-items-center justify-content-center">
      <a href="/settings" className="first-button-text">
        Beheerders
      </a>
    </div>
  );
};

export default SettingsButtonFirst;
