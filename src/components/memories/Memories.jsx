import React from "react";
import "./Memories.css";
import { FaUserGroup } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";

function Memories() {
  return (
    <div className="memories">
      <div className="row">
        {/* left side box */}
        <div className="col-3 border-end shadow min-vh-100 px-2 py-3">
          <div className="">
            <span className="fw-7 fs-4">Memories</span>
          </div>
          <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaHome />
            </div>
            <span className="fw-6">Memories Home</span>
          </div>
          <hr />
          <div className="fw-5">Settings</div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg c-pointer p-2">
              <FaBell />
            </div>
            <span className="fw-6">Notifications</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg c-pointer p-2">
              <FaUserGroup />
            </div>
            <span className="fw-6">Hide Pepole</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg c-pointer p-2">
              <FaCalendarTimes />
            </div>
            <span className="fw-6">Hide Dates</span>
          </div>
        </div>
        <div className="col-9 bg-color">
          <div className="px-3 py-4 fs-5 fw-7">No Memories today</div>
        </div>
      </div>
    </div>
  );
}

export default Memories;
