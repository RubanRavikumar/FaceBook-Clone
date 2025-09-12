import React from "react";
import "./Pages.css";
import { IoIosSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";
import { IoPieChartOutline } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { MdPersonAddAlt1 } from "react-icons/md";

function Pages() {
  return (
    <div className="pages">
      <div className="row">
        {/* left side box */}
        <div className="col-3 border-end shadow min-vh-100 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-7 fs-4">Pages</span>
            <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
          </div>
          <div className="d-flex align-items-center justify-content-center p-2 text-primary gap-2 rounded btn-bg fw-5 mt-3">
            <FaPlus />
            Creat new listing
          </div>
          <hr />
          <div className="p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <IoPieChartOutline />
            </div>
            <span className="fw-5">Meta Business Suite</span>
          </div>
          <div className="p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaCompass />
            </div>
            <span className="fw-5">Discovery</span>
          </div>
          <div className="p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <BiSolidLike />
            </div>
            <span className="fw-5">Liked Pages</span>
          </div>
          <div className="p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <MdPersonAddAlt1 />
            </div>
            <span className="fw-5">Invites</span>
          </div>
        </div>
      </div>
      <div className="col-9">
        <div className="groups-position">
          <div className="text-secondary fw-5">Recent activity</div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
