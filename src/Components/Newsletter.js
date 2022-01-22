import React from "react";
import "./Newslettercss.css";

function Newsletter() {
  return (
    <div>
      <div
        style={{ background: "#0F2A47", height: "auto" }}
        className="container-fluid "
      >
        <div className="row b-5">
          <div className="col-lg-1 mt-5 mb-5"></div>
          <div className="col-lg-5">
            <div>
              <p className="head1 mt-5 text-center">Talk to a Redfin Agent</p>
            </div>
            <div>
              <p className="head2 mt-1 text-center">
                Start your search with an expert local agent—there's no pressure
                or obligation.
              </p>
            </div>
          </div>
          <div className="col-lg-3 mt-5 ">
            <div>
              <p className="p33">Where are you searching for homes?</p>
            </div>
            <form class="form-inline">
              <div class="form-group mx-sm-3 mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-2 mt-5 mb-5">
            <div>
              <p className="p33">Search Here</p>
            </div>
            <p className="text-center">
              <button
                style={{ fontSize: "18px" }}
                type="submit"
                class="btn btn-sm btn-primary mb-2 "
              >
                Search Here
              </button>
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
