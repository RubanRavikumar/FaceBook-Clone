import React from "react";
import "./Birthdays.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { GiWhiteBook } from "react-icons/gi";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { IoIosCut } from "react-icons/io";
import { GiBallerinaShoes } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { MdFitnessCenter } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { GiTrowel } from "react-icons/gi";
import { GiHealingShield } from "react-icons/gi";
import { BsFillClipboardHeartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { MdCake } from "react-icons/md";
import { TbVectorTriangle } from "react-icons/tb";
import { PiHandsPrayingFill } from "react-icons/pi";
import { FaBasketShopping } from "react-icons/fa6";
import { FaRibbon } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { FaTheaterMasks } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";

function Birthdays() {
  return (
    <div className="birthdays">
      <div className="row">
        {/* left side box */}
        <div className="col-3 border-end shadow min-vh-100 px-2 py-3 scroll-bar">
          <div>
            <span className="fw-7 fs-4">Events</span>
          </div>
          <div className="rounded-5 d-flex align-items-center px-2 py-1 bg-color-light-gray mt-2">
            <IoSearchSharp className="text-secondary fs-5" />
            <input
              type="text"
              placeholder="Search groups"
              className="border-none bg-transparent"
            />
          </div>
          <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg p-2">
              <FaRegCalendarAlt />
            </div>
            <span className="fw-6">Home</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg p-2">
              <IoPerson />
            </div>
            <span className="fw-6">Your Events</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center fs-5 nav-input-bg p-2">
              <FaBell />
            </div>
            <span className="fw-6">Notifications</span>
          </div>
          <div className="btn btn-primary form-control mt-3">
            <IoMdAdd />
            Create new event
          </div>
          <hr />
          <div className="fw-5 fs-6">Categories</div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <GiWhiteBook />
            </div>
            <span className="fw-6">Classics</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <FaFaceSmileBeam />
            </div>
            <span className="fw-6">Comedy</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <IoIosCut />
            </div>
            <span className="fw-6">Crafts</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <GiBallerinaShoes />
            </div>
            <span className="fw-6">Dance</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <BiSolidDrink />
            </div>
            <span className="fw-6">Drinks</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <MdFitnessCenter />
            </div>
            <span className="fw-6">Fitness & Workouts</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <PiForkKnifeFill />
            </div>
            <span className="fw-6">Foods</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <FaGamepad />
            </div>
            <span className="fw-6">Games</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <GiTrowel />
            </div>
            <span className="fw-6">Gardening</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <GiHealingShield />
            </div>
            <span className="fw-6">Health & Medical</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center  nav-input-bg p-2">
              <BsFillClipboardHeartFill />
            </div>
            <span className="fw-6">Healthy Living & Self-care</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <FaHome />
            </div>
            <span className="fw-6">Home & Garden</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <IoMusicalNotes />
            </div>
            <span className="fw-6">Music & Audio</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <MdCake />
            </div>
            <span className="fw-6">Parties</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <TbVectorTriangle />
            </div>
            <span className="fw-6">Proffessional Networking</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <PiHandsPrayingFill />
            </div>
            <span className="fw-6">Religions</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <FaBasketShopping />
            </div>
            <span className="fw-6">Shopping</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <FaRibbon />
            </div>
            <span className="fw-6">Social Issues</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <IoIosFootball />
            </div>
            <span className="fw-6">Sports</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <FaTheaterMasks />
            </div>
            <span className="fw-6">Theater</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <BsCameraReelsFill />
            </div>
            <span className="fw-6">Tv & Movies</span>
          </div>
          <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect c-pointer">
            <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
              <IoColorPalette />
            </div>
            <span className="fw-6">Visual Arts</span>
          </div>
          <br />
        </div>
        <div className="col-9 bg-color">
          <div className="px-3 py-4 fs-5 fw-7">Today's birthday</div>
        </div>
      </div>
    </div>
  );
}

export default Birthdays;
