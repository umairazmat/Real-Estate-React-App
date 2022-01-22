import React from "react";
import "./Headercss.css";
import header from "../Assets/header.png";
import onheader from "../Assets/onheader.png";
function Header() {
  return (
    <div>
      <div className="container my-5 px-5">
        <div className="row">
          <div className="col-md-6">
            <div className="jumbotron">
              <h1 className="display-4">
                Search for Homes in your Neighborhood
              </h1>
              <p className="lead">
                Online Estate Agency, the modern way to sell your own home. You
                can use griffin residential to market your property.
              </p>
              <p className="lead">
                <div className="d-flex">
                  <div>
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="587 Bridgeton Road"
                    />
                  </div>
                  <div>
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="El Paso, Texas"
                    />
                  </div>
                  <div className="">
                    <label className="form-label">Search</label>
                    <button
                      style={{ fontSize: "18px" }}
                      type="button"
                      class="btn btn-sm btn-primary"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <img
              style={{
                position: "absolute",
                right: "0vh",
                top: "60vh",
              }}
              className="img-fluid"
              src={onheader}
            />
            <img className="img-fluid" src={header} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
