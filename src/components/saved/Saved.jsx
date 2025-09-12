import React from "react";
import "./Saved.css";
import status3 from "../images/status3.jpg";
import { IoIosSettings } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";

function Saved() {
  return (
    <div className="saved">
      <div className="row">
        {/* left side box */}
        <div className="col-3 border-end shadow min-vh-100 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-7 fs-4">Saved</span>
            <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
          </div>
          <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaNewspaper />
            </div>
            <span className="fw-6">Saved Items</span>
          </div>
          <hr />
          <div className="fw-5">My collections</div>
          <div className="d-flex gap-2 mt-3">
            <div>
              <img
                src={status3}
                alt="pic"
                className="rounded"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <p className="fs-6">
              <span className="fw-6 d-block">For later</span>
              <span className="d-flex align-items-center gap-1 fs-7 fw-4 text-secondary">
                <FaLock />
                Only me
              </span>
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center p-1 text-primary gap-2 rounded btn-bg fw-5 mt-4">
            <FaPlus />
            Creat new listing
          </div>
        </div>
        <div className="col-9 bg-color">
          <div className="px-3 py-4 fs-5 fw-7">All</div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
