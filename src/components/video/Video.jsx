import React from 'react'
import './Video.css'
import { IoIosSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { GoRocket } from "react-icons/go";
import { IoBookmark } from "react-icons/io5";

function Video (){
    return (
      <div className="video">
        <div className="row">
          {/* left side box */}
          <div className="col-3 border-end shadow min-vh-100 px-2 py-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-7 fs-4">Video</span>
              <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
            </div>
            <div className="rounded-5 d-flex align-items-center px-2 py-1 bg-color-light-gray mt-2">
              <IoSearchSharp className="text-secondary fs-5" />
              <input
                type="text"
                placeholder="Search videos"
                className="border-none bg-transparent"
              />
            </div>
            <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                <MdOutlineOndemandVideo />
              </div>
              <span className="fw-5">Home</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                <BsFillCameraVideoFill />
              </div>
              <span className="fw-5">Live</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                <TfiVideoClapper />
              </div>
              <span className="fw-5">Reels</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                <GoRocket />
              </div>
              <span className="fw-5">Explore</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center fs-4 nav-input-bg c-pointer p-2">
                <IoBookmark />
              </div>
              <span className="fw-5">Saved Videos</span>
            </div>
          </div>
          {/* main box */}
          <div className="col-9 bg-color">
            <div className='video-position fs-5 fw-7'>New videos</div>
          </div>
        </div>
      </div>
    );
}
export default Video;
