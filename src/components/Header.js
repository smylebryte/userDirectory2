import React, { Component } from "react";

function Header(props) {
  return (
    <header>
      <div>
        <h1>Employee User Directory</h1>
      </div>
      <form className="row g-3">
        <div className="col-auto">
          <label className="visually-hidden">Search for Employee</label>
          <input
            type="text"
            value={props.search}
            onChange={props.input}
            name="search"
            className="form-control"
            id="search"
            placeholder="Search"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;
