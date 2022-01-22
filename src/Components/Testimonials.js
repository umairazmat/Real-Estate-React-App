import React from "react";
import "./Testimonialcss.css";
import testimg from "../Assets/testimg.png";
import pos1 from "../Assets/pos1.png";
import pos2 from "../Assets/pos2.png";
import pos3 from "../Assets/pos3.png";
import pos4 from "../Assets/pos4.png";
import pos5 from "../Assets/pos5.png";
import pos6 from "../Assets/pos6.png";
import pos7 from "../Assets/pos7.png";
import pos8 from "../Assets/pos8.png";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <div>
      <div className="container my-5 px-5 ">
        <div className="row">
          <div className="col-lg-4 ">
            <div>
              <img src={pos1} />
            </div>
            <div className="pos2">
              <img src={pos2} />
            </div>
            <div className="pos4">
              <img src={pos4} />
            </div>
            <div className="pos3">
              <img src={pos3} />
            </div>
          </div>
          <div className="col-lg-4 mb-5 mt-5">
            <div>
              <h1 className="head">TESTIMONIALS</h1>
            </div>
            <div>
              <p className="parah">
                Our Clients send us bunch of smilies with our services and we
                love them
              </p>
            </div>
            <div className="text-center">
              <img
                style={{ border: "none" }}
                src={testimg}
                class="img-thumbnail img-fluid "
                alt="Cinque Terre"
              />
            </div>
            <div style={{ backgroundColor: "white" }}>
              <div className="tex-center">
                <p className="p1">
                  "We are very pleased with the way Besnik handled our purchase
                  of a lake home. He was prompt, friendly, and very
                  knowledgeable. He followed up on any and all concerns.
                </p>
                <div>
                  <h2 className="h22">Becky Nelson</h2>
                </div>
                <div className="text-center">
                  <span class="fa fa-star checked">
                    <FaStar />
                  </span>
                  <span class="fa fa-star checked">
                    <FaStar />
                  </span>
                  <span class="fa fa-star checked">
                    <FaStar />
                  </span>
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <img src={pos5} />
            </div>
            <div className="pos6">
              <img src={pos6} />
            </div>
            <div className="pos8">
              <img src={pos8} />
            </div>
            <div className="pos7">
              <img src={pos7} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
