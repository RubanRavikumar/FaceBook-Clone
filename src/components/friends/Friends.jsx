import React from "react";
import "./Friends.css";
import { IoIosSettings } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { BsChevronRight } from "react-icons/bs";
import { MdPersonRemove } from "react-icons/md";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Friends (){
    return (
      <div className="friends">
        <div className="row">
          {/* left side box */}
          <div className="col-3 border-end shadow min-vh-100 px-2 py-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-7 fs-4">Friends</span>
              <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
            </div>
            <div
              className={({ isActive }) =>
                isActive ? "item-active" : "item-inactive"
              }
            >
              <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg p-2">
                  <FaUserGroup />
                </div>
                <span className="fw-6">Home</span>
              </div>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center justify-content-between hover-effect c-pointer">
              <div className="d-flex gap-2 align-items-center">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg p-2">
                  <MdPersonRemove />
                </div>
                <span className="fw-6">Friend Requests</span>
              </div>
              <BsChevronRight className="text-secondary" />
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center justify-content-between hover-effect c-pointer">
              <div className="d-flex gap-2 align-items-center">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg p-2">
                  <MdPersonAddAlt1 />
                </div>
                <span className="fw-6">Suggestions</span>
              </div>
              <BsChevronRight className="text-secondary" />
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center justify-content-between hover-effect c-pointer">
              <div className="d-flex gap-2 align-items-center">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg p-2">
                  <BsFillPersonLinesFill />
                </div>
                <span className="fw-6">All friends</span>
              </div>
              <BsChevronRight className="text-secondary" />
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
              <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg p-2">
                <FaGift />
              </div>
              <span className="fw-6">Birthdays</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center justify-content-between hover-effect c-pointer">
              <div className="d-flex gap-2 align-items-center">
                <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg p-2">
                  <BsFillPersonLinesFill />
                </div>
                <span className="fw-6">Custom Lists</span>
              </div>
              <BsChevronRight className="text-secondary" />
            </div>
          </div>
          {/* main box */}
          <div className="col-9 bg-color">
            <div className="px-3 py-4 fs-5 fw-7">Friend Requests</div>
          </div>
        </div>
      </div>
    );
}
export default Friends;
