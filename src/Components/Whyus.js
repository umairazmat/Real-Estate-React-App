import React from "react";
import "./Whyuscss.css";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
function Whyus() {
  return (
    <div>
      <div className="conatiner my-5 px-5 ">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="heading col">
            <h1>What Can We Help You Find?</h1>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <div className="container my-5 px-5">
        <div className="row text-center">
          <div className="col-lg-1 my-3"></div>
          <div className="col-lg-3 my-3">
            <div class="card" style={{ border: "none" }}>
              <img class="card-img-top" src={icon1} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Buy a home</h5>
                <p class="card-text">
                  With over 1 million+ homes for sale available on the website,
                  Trulia can match you with a house.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-3">
            <div class="card" style={{ border: "none" }}>
              <img class="card-img-top" src={icon2} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Rent a home</h5>
                <p class="card-text">
                  With 35+ filters and custom keyword search, Trulia can help
                  you find a home.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-3">
            <div class="card" style={{ border: "none" }}>
              <img class="card-img-top" src={icon3} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">See neighborhoods</h5>
                <p class="card-text">
                  With more neighborhood insights than any other real estate
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
