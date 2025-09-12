import React from "react";
import "./Feeds.css";
import { FaNewspaper } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaFlag } from "react-icons/fa";

function Feeds() {
  return (
    <div className="feeds">
      <div className="row">
        {/* left side box */}
        <div className="col-3 border-end shadow min-vh-100 px-2 py-3">
          <div className="">
            <span className="fw-7 fs-4">Feeds</span>
          </div>
          <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaNewspaper />
            </div>
            <span className="fw-6">All</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaStar />
            </div>
            <span className="fw-6">Favorites</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaUserGroup />
            </div>
            <span className="fw-6">Friends</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <HiMiniUserGroup />
            </div>
            <span className="fw-6">Groups</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaFlag />
            </div>
            <span className="fw-6">Pages</span>
          </div>
        </div>
        <div className="col-9 bg-color">
          <div className="px-3 py-4 fs-5 fw-7">Feeds</div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
