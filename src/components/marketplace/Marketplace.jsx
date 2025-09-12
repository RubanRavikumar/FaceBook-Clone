import React from "react";
import "./Marketplace.css";
import { IoIosSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { GiTrowel } from "react-icons/gi";
import { FaPenNib } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { FaGuitar } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";
import { FaPersonRunning } from "react-icons/fa6";
import { SlGameController } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi2";

function Marketplace (){
    return (
      <div className="marketplace">
        <div className="row">
          {/* left side box */}
          <div className="col-3 border-end shadow min-vh-100 p-3 scroll-bar">
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-7 fs-4">Marketplace</span>
              <IoIosSettings className="border rounded-5 bg-color-gray icon-size" />
            </div>
            <div className="rounded-5 d-flex align-items-center px-2 py-1 bg-color-light-gray mt-2">
              <IoSearchSharp className="text-secondary fs-5" />
              <input
                type="text"
                placeholder="Search Marketplace"
                className="border-none bg-transparent"
              />
            </div>
            <div className="mt-3 p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <AiOutlineShop />
              </div>
              <span className="fw-5">Browse all</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <IoIosNotifications />
              </div>
              <span className="fw-5">Notifications</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaShieldAlt />
              </div>
              <span className="fw-5">Marketplace access</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center justify-content-between hover-effect">
              <div className="d-flex gap-2 align-items-center">
                <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                  <FaShoppingBag />
                </div>
                <span className="fw-5">Buying</span>
              </div>
              <BsChevronRight className="text-secondary" />
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center justify-content-between hover-effect">
              <div className="d-flex gap-2 align-items-center">
                <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                  <FaTag />
                </div>
                <span className="fw-5">Selling</span>
              </div>
              <BsChevronRight className="text-secondary" />
            </div>
            <div className="d-flex align-items-center justify-content-center p-2 text-primary gap-2 rounded btn-bg fw-5 mt-2">
              <FaPlus />
              Creat new listing
            </div>
            <hr />
            <div>
              <span className="d-block fw-5 mb-2">Location</span>
              <span className="fw-5 text-primary">
                Coimbatore, Tamil Nadu . Within 65 km
              </span>
            </div>
            <hr />
            <div className="fw-5">Categories</div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaCarRear />
              </div>
              <span className="fw-5">Vechicles</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaHouseChimney />
              </div>
              <span className="fw-5">Property Rentals</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaTshirt />
              </div>
              <span className="fw-5">Apparel</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaTag />
              </div>
              <span className="fw-5">Classifieds</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaMobileScreen />
              </div>
              <span className="fw-5">Electronics</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <BsCameraReelsFill />
              </div>
              <span className="fw-5">Entertainment</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <IoHeart />
              </div>
              <span className="fw-5">Family</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <GiTrowel />
              </div>
              <span className="fw-5">Garden & Outdoor</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaPenNib />
              </div>
              <span className="fw-5">Hobbies</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <MdMapsHomeWork />
              </div>
              <span className="fw-5">Home Goods</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <AiFillTool />
              </div>
              <span className="fw-5">Home Improvement Supplies</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <TiHome />
              </div>
              <span className="fw-5">Home Sales</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaGuitar />
              </div>
              <span className="fw-5">Musical Instruments</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaTag />
              </div>
              <span className="fw-5">Office Supplies</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <IoPaw />
              </div>
              <span className="fw-5">Pet Supplies</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <FaPersonRunning />
              </div>
              <span className="fw-5">Sporting Goods</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <SlGameController />
              </div>
              <span className="fw-5">Toys & Games</span>
            </div>
            <div className="p-2 rounded-3 d-flex gap-2 align-items-center hover-effect">
              <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                <HiUserGroup />
              </div>
              <span className="fw-5">Buy and sell groups</span>
            </div>
          </div>
          {/* main box */}
          <div className="col-9 bg-color">
            <div className="fw-7 fs-5 m-3">Today's picks</div>
          </div>
        </div>
      </div>
    );
}
export default Marketplace;