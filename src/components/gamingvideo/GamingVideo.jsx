import React from "react";
import "./GamingVideo.css";
import { IoIosSettings } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

function GamingVideo(){
    return (
      <div className="gaming-video">
        <div className="pages">
          <div className="row">
            {/* left side box */}
            <div className="col-3 border-end shadow min-vh-100 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-7 fs-4">Games</span>
                <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
              </div>
              <div className="mt-3 p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg c-pointer p-2">
                  <FaPlay />
                </div>
                <span className="fw-5">Video</span>
              </div>
              <div className="p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg c-pointer p-2">
                  <FaBell />
                </div>
                <span className="fw-5">Notifications</span>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-center p-2 bg-gray gap-2 rounded fw-5 mt-3">
                <CiStreamOn />
                Start Streaming
              </div>
              <hr />
              <div className="fw-5 fs-5">Stream You Follow</div>
              <div className="mt-2 p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                  <IoPieChartOutline />
                </div>
                <span className="fw-5">Blink Esports</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span className="fw-5 fs-5">Recently watched</span>
                <span className="text-primary">See all</span>
              </div>
              <div className="mt-2 p-1 rounded-3 d-flex gap-2 align-items-center hover-effect">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                  <IoLocationOutline />
                </div>
                <span className="fw-5">Nezuko Gaming</span>
              </div>
            </div>
            <div className="col-9">
              <div className="groups-position">
                <div className="text-secondary fw-5">Recent activity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
export default GamingVideo;