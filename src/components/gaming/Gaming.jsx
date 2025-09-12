import React from "react";
import "./Gaming.css";
import { IoIosSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
import { GiBolterGun } from "react-icons/gi";
import { PiSwordBold } from "react-icons/pi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaDice } from "react-icons/fa6";
import { GiCardAceClubs } from "react-icons/gi";
import { FaStopwatch } from "react-icons/fa";

function Gaming() {
  return (
    <div className="gaming">
      <div className="row">
        {/* left side box */}
        <div className="col-3 border-end shadow min-vh-100 p-3 scroll-bar">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-7 fs-4">Games</span>
            <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
          </div>
          <div className="rounded-5 d-flex align-items-center px-2 py-1 bg-color-light-gray mt-2">
            <IoSearchSharp className="text-secondary fs-5" />
            <input
              type="text"
              placeholder="Search games"
              className="border-none bg-transparent"
            />
          </div>
          <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaGamepad />
            </div>
            <span className="fw-5">Play games</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaBell />
            </div>
            <span className="fw-5">Notifications</span>
          </div>
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <span className="fw-5">Your games</span>
              <span className="text-primary">see all</span>
            </div>
            <div className="text-secondary fw-4 game-font pe-2 mt-1">
              Save a game to your games to create a shortcut for it here.
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                <IoIosBookmark />
              </div>
              <span className="fw-5">Saves games</span>
            </div>
          </div>
          <hr />
          <div className="fw-5">Categories</div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaGamepad />
            </div>
            <span className="fw-5">All games</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <GiBolterGun />
            </div>
            <span className="fw-5">Action</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <PiSwordBold />
            </div>
            <span className="fw-5">Battle</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <IoExtensionPuzzle />
            </div>
            <span className="fw-5">Puzzle</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaDice />
            </div>
            <span className="fw-5">Casino</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <GiCardAceClubs />
            </div>
            <span className="fw-5">Card</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
              <FaStopwatch />
            </div>
            <span className="fw-5">Quick play</span>
          </div>
        </div>
        {/* main box */}
        <div className="col-9 ">
          <div className="game-position fw-7 fs-4 m-2">Top picks for you</div>
        </div>
      </div>
    </div>
  );
}

export default Gaming;
