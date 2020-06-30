import React from 'react';
import './SearchBarUsers.css';
import search from '../../assets/search.png';

const SearchBarUsers = () => {
  return (
    <div className="searchbar float-right mr-4">
      <form className="d-flex">
        <input
          type="text"
          className="form-control rounded bg-light  py-2 mr-1 pr-5 center "
          placeholder="Zoek handelaar"
        />
        <span className="input-group-append">
          <button className="btn  ml-n5 search-button py-2" type="button">
            <img src={search} alt="search" />
          </button>
        </span>
      </form>
    </div>
  );
};

export default SearchBarUsers;
