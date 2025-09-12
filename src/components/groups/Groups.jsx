import React from "react";
import "./Groups.css";
import group1 from "../images/group1.jpg";
import group2 from '../images/group2.jpg'
import group3 from '../images/group3.jpg'
import { IoIosSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";

function Groups() {
  return (
    <div className="groups">
      <div className="row">
        {/* left side box */}
        <div className="col-3 border-end shadow min-vh-100 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-7 fs-4">Groups</span>
            <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
          </div>
          <div className="rounded-5 d-flex align-items-center px-2 py-1 bg-color-light-gray mt-2">
            <IoSearchSharp className="text-secondary fs-5" />
            <input
              type="text"
              placeholder="Search groups"
              className="border-none bg-transparent"
            />
          </div>
          <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaRegNewspaper />
            </div>
            <span className="fw-5">Your feed</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaCompass />
            </div>
            <span className="fw-5">Discovery</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <HiUserGroup />
            </div>
            <span className="fw-5">Your groups</span>
          </div>
          <div className="d-flex align-items-center justify-content-center p-2 text-primary gap-2 rounded btn-bg fw-5 mt-2">
            <FaPlus />
            Creat new listing
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <span className="fw-5">Groups you've joined</span>
            <span className="text-primary">see all</span>
          </div>
          <div className="mt-2 d-flex gap-2 align-items-center">
            <img
              src={group1}
              alt="pic"
              style={{ width: "55px", height: "50px" }}
              className="rounded"
            />
            <div>
              <span className="fw-5 d-block">Electrical Engineering World</span>
              <span className="text-secondary">Last activity 1 days ago</span>
            </div>
          </div>
          <div className="mt-2 d-flex gap-2 align-items-center">
            <img
              src={group2}
              alt="pic"
              style={{ width: "55px", height: "50px" }}
              className="rounded"
            />
            <div>
              <span className="fw-5 d-block">anbal serndha koottam</span>
              <span className="text-secondary">Last activity 27 weeks ago</span>
            </div>
          </div>
          <div className="mt-2 d-flex gap-2 align-items-center">
            <img
              src={group3}
              alt="pic"
              style={{ width: "55px", height: "50px" }}
              className="rounded"
            />
            <div>
              <span className="fw-5 d-block">
                Tagore Education +2 students 2016
              </span>
              <span className="text-secondary">Last activity 5 years ago</span>
            </div>
          </div>
        </div>
        {/* main box */}
        <div className="col-9">
          <div className="groups-position">
            <div className="text-secondary fw-5">
              Recent activity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
