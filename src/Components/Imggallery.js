import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";

function Imggallery() {
  return (
    <div>
      <div className="container my-5 px-5">
        <div class="row text-center mt-5 mb-5">
          <div class="col-md-2 col-xs-12 col-md-offset-1">
            <img class="img-responsive my-3" src={img1} />
          </div>
          <div class="col-md-3">
            <img class="img-responsive my-3" src={img2} />
          </div>

          <div class="col-md-2">
            <img class="img-responsive my-3" src={img3} />
          </div>
          <div class="col-md-3">
            <img class="img-responsive my-3" src={img4} />
          </div>
          <div class="col-md-2">
            <img class="img-responsive my-3" src={img5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imggallery;
