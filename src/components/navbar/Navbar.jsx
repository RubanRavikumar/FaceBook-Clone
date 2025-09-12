import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import fbprofile from "../images/fbprofile.jpg";
import post1 from "../images/post1.jpg";
import profile1 from "../images/profile1.jpg";
import status1 from "../images/status1.jpg";
import status2 from "../images/status2.jpg";
import status3 from "../images/status3.jpg";
import { FiHome } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { RiGroup2Line } from "react-icons/ri";
import { CgGames } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineEventBusy } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaRegNewspaper } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { RiGamepadLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaStar } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { RiFirstAidKitFill } from "react-icons/ri";
import { FaShoppingBasket } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Navbar({ onLogout }) {
  const [activepopup, setActivepopup] = useState(null);
  const popupRef = useRef(null);

  // Close popup if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivepopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopup = (name) => {
    setActivepopup((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="border-bottom shadow">
      <div className="navbar mx-3 p-0">
        {/* start */}
        <div className="d-flex gap-3 align-items-center">
          {/* fb icon */}
          <div className="fs-1 c-pointer">
            <i className="bi bi-facebook text-primary"></i>
          </div>
          {/* input box */}
          <div className="d-flex align-items-center gap-2 border rounded-5 p-2 s-bg ">
            <i className="bi bi-search text-secondary"></i>
            <input
              type="text"
              placeholder="Search Facebook"
              className="i-border-none"
            />
          </div>
        </div>
        {/* middle */}
        <div className="d-flex">
          {/* home */}
          <div className="fs-3 nav-icon-margin c-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item-active" : "nav-item-inactive"
              }
            >
              <FiHome />
            </NavLink>
          </div>
          {/* video */}
          <div className="fs-3 nav-icon-margin c-pointer">
            <NavLink
              to="/video"
              className={({ isActive }) =>
                isActive ? "nav-item-active" : "nav-item-inactive"
              }
            >
              <MdOutlineOndemandVideo />
            </NavLink>
          </div>
          {/* marketplace */}
          <div className="fs-3 nav-icon-margin c-pointer">
            <NavLink
              to="/marketplace"
              className={({ isActive }) =>
                isActive ? "nav-item-active" : "nav-item-inactive"
              }
            >
              <AiOutlineShop />
            </NavLink>
          </div>
          {/* groups */}
          <div className="fs-3 nav-icon-margin c-pointer">
            <NavLink
              to="/groups"
              className={({ isActive }) =>
                isActive ? "nav-item-active" : "nav-item-inactive"
              }
            >
              <RiGroup2Line />
            </NavLink>
          </div>
          {/* Gaming */}
          <div className="fs-3 nav-icon-margin c-pointer">
            <NavLink
              to="/Gaming"
              className={({ isActive }) =>
                isActive ? "nav-item-active" : "nav-item-inactive"
              }
            >
              <CgGames />
            </NavLink>
          </div>
        </div>
        {/* end */}
        <div ref={popupRef} className="fs-4 d-flex gap-3 align-items-center">
          {/* menu */}
          <div>
            <div
              className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2 hover-effect"
              onClick={() => togglePopup("menu")}
            >
              <TbGridDots />
            </div>
            {activepopup === "menu" && (
              <div className="pop-up-menu rounded-4 border shadow p-2">
                <div className="fw-7">Menu</div>
                <div className="d-flex gap-3 p-2">
                  <div className="social-w scroll-bar-menu">
                    <div className="border rounded-4 shadow p-3">
                      <div className="border d-flex rounded-5 color-gray-bg align-items-center px-2 py-1 fs-6 mt-2">
                        <IoSearchSharp className="text-secondary" />
                        <input
                          type="text"
                          placeholder="Search Messanger"
                          className="border-none bg-transparent w-100"
                        />
                      </div>
                      <div className="my-2 fs-5 fw-5">Social</div>
                      <NavLink to="/event" className="menu-bar">
                        <MdOutlineEventBusy className="text-danger fs-1" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Events</span>
                          <span className="social-content-size">
                            Organize or find event and other things to do online
                            and nearby.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/friends" className="menu-bar">
                        <FaUserFriends className="fs-3" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Friends</span>
                          <span className="social-content-size">
                            Search for friends or people you may know.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/groups" className="menu-bar">
                        <HiUserGroup className="fs-3" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Groups</span>
                          <span className="social-content-size">
                            Connect with people who share your interests.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/feeds" className="menu-bar">
                        <FaRegNewspaper className="fs-1" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Feeds</span>
                          <span className="social-content-size">
                            See the most recent posts from your friends, groups,
                            pages and more.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/pages" className="menu-bar">
                        <FaFlag className="fs-3 text-danger" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Pages</span>
                          <span className="social-content-size">
                            Discover and connect with businesses on Facebook.
                          </span>
                        </div>
                      </NavLink>
                      <hr />
                      <div className="my-2 fs-5 fw-5">Entertainment</div>
                      <NavLink to="/gaming-video" className="menu-bar">
                        <TfiVideoClapper className="fs-2" />
                        <div>
                          <span className="text-dark fs-6 fw-6">
                            Gaming Video
                          </span>
                          <span className="social-content-size">
                            Watch and connect with your favorite games and
                            streamers.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/gaming" className="menu-bar">
                        <RiGamepadLine className="fs-3" />
                        <div>
                          <span className="text-dark fs-6 fw-6">
                            Play games
                          </span>
                          <span className="social-content-size">
                            Play your favorite games.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/video" className="menu-bar">
                        <MdOutlineOndemandVideo className="fs-1" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Video</span>
                          <span className="social-content-size">
                            A Reels destination personalized to your interests
                            and connections.
                          </span>
                        </div>
                      </NavLink>
                      <hr />
                      <div className="my-2 fs-5 fw-5">Shopping</div>
                      <NavLink to="/Orders" className="menu-bar">
                        <FaBox className="fs-3 me-2 text-dark" />
                        <div>
                          <span className="text-dark fs-6 fw-6">
                            Orders and payments
                          </span>
                          <span className="social-content-size">
                            A seamless, secure way to pay on the apps you
                            already use.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/marketplace" className="menu-bar">
                        <AiOutlineShop className="fs-2" />
                        <div>
                          <span className="text-dark fs-6 fw-6">
                            Marketplace
                          </span>
                          <span className="social-content-size">
                            Buy and sell in your community
                          </span>
                        </div>
                      </NavLink>
                      <hr />
                      <div className="my-2 fs-5 fw-5">Personal</div>
                      <NavLink to="/ad-activity" className="menu-bar">
                        <FaImages className="fs-3" />
                        <div>
                          <span className="text-dark fs-6 fw-6">
                            Recent ad activity
                          </span>
                          <span className="social-content-size">
                            See all the ads you interacted with on facebook.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/memories" className="menu-bar">
                        <LuHistory className="fs-2" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Memories</span>
                          <span className="social-content-size">
                            Browse your old photos, videos and posts on
                            Facebook.
                          </span>
                        </div>
                      </NavLink>
                      <NavLink to="/saved" className="menu-bar">
                        <FaBookmark className="fs-2 bookmark" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Saved</span>
                          <span className="social-content-size">
                            Find posts, photos and videos that you saved for
                            later.
                          </span>
                        </div>
                      </NavLink>
                      <hr />
                      <div className="my-2 fs-5 fw-5">Professional</div>
                      <a
                        href="https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=1063807332476570&nav_entry_point=comet_bookmark&nav_source=comet"
                        className="menu-bar"
                      >
                        <MdManageAccounts className="fs-1" />
                        <div>
                          <span className="text-dark fs-6 fw-6">
                            Ads Manager
                          </span>
                          <span className="social-content-size">
                            Create, manage and track the perfomance of your ada.
                          </span>
                        </div>
                      </a>
                      <hr />
                      <div className="my-2 fs-5 fw-5">More from Meta</div>
                      <a
                        href="https://www.meta.ai/?utm_source=facebook_
                                bookmarks&fbclid=IwY2xjawMQB_
                                5leHRuA2FlbQIxMABicmlkETFaRnZHZ3hxc3Q5eGd3dGZwAR48Cp22UP3XiRpjsQdb98IQwroAExbw_
                                MnmNOxgehTYGCgWzb8sncZnl3mOdw_aem_6OiMFQJRGoCvU7Ev0Cdj0w"
                        className="menu-bar"
                      >
                        <FaRegCircle className="fs-1" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Meta AI</span>
                          <span className="social-content-size">
                            Ask questions, brainstorm ideas, create any image
                            you can imagine and more.
                          </span>
                        </div>
                      </a>
                      <NavLink to="/messengerkids" className="menu-bar">
                        <FaFacebookMessenger className="fs-4 kids-messenger" />
                        <div>
                          <span className="text-dark fs-6 fw-6">
                            Messenger Kids
                          </span>
                          <span className="social-content-size">
                            Let kids message with colse friends and famly
                          </span>
                        </div>
                      </NavLink>
                      <a
                        href="https://www.threads.com/?xmt=AQF0r_NxjDQ8jGjkK0p0YDVRVihlly38p1OiuEfwPBtDydE"
                        className="menu-bar"
                      >
                        <FaSquareThreads className="fs-2 text-dark" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Threads</span>
                          <span className="social-content-size">
                            Say more with Threads - Instagram's text - based
                            conversation app.
                          </span>
                        </div>
                      </a>
                      <a href="https://www.whatsapp.com/" className="menu-bar">
                        <FaWhatsapp className="fs-3 text-success" />
                        <div>
                          <span className="text-dark fs-6 fw-6">WhatsApp</span>
                          <span className="social-content-size">
                            Message and call pepole privately on your computer.
                          </span>
                        </div>
                      </a>
                      <a
                        href="https://www.instagram.com/?ref=xav_igxfb_comet_ig_bookmark_mega_menu_launch"
                        className="menu-bar"
                      >
                        <FaInstagramSquare className="fs-3 inst-color" />
                        <div>
                          <span className="text-dark fs-6 fw-6">Instagram</span>
                          <span className="social-content-size">
                            See everyday moments from pepole you love.
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="creat-w border rounded-4 shadow p-2">
                    <div className="fw-7 fs-5 ">Create</div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-3 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <FaRegEdit className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Post</span>
                    </div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-1 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <FaBookOpen className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Story</span>
                    </div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-1 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <TfiVideoClapper className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Reel</span>
                    </div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-1 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <FaStar className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Life event</span>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <FaFlag className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Page</span>
                    </div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-1 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <HiSpeakerphone className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Ad</span>
                    </div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-1 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <HiUserGroup className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Group</span>
                    </div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-1 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <RiFirstAidKitFill className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Event</span>
                    </div>
                    <div className="d-flex align-items-center c-pointer hover-effect gap-2 mt-1 p-1">
                      <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-2">
                        <FaShoppingBasket className="fs-5" />
                      </div>
                      <span className="fs-6 fw-7">Marketplace listing</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* messenger */}
          <div>
            <div
              className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2 hover-effect"
              onClick={() => togglePopup("messenger")}
            >
              <FaFacebookMessenger />
            </div>
            {activepopup === "messenger" && (
              <div className="pop-up rounded-4 shadow py-2 px-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="fw-7">Chats</div>
                  <div className="d-flex gap-2 text-secondary">
                    <div className="rounded-circle d-flex c-pointer p-2 hover-effect">
                      <HiOutlineDotsHorizontal className="fs-5" />
                    </div>
                    <div className="rounded-circle d-flex c-pointer p-2 hover-effect">
                      <HiOutlineArrowsExpand className="fs-5" />
                    </div>
                    <div className="rounded-circle d-flex c-pointer p-2 hover-effect">
                      <FaRegEdit className="fs-5" />
                    </div>
                  </div>
                </div>
                <div className="border d-flex rounded-5 color-gray-bg align-items-center px-2 py-1 fs-6 mt-2">
                  <IoSearchSharp className="text-secondary" />
                  <input
                    type="text"
                    placeholder="Search Messanger"
                    className="border-none bg-transparent w-100"
                  />
                </div>
                <div className="d-flex fs-6 fw-5 mt-3">
                  <span className="hover-effect py-1 px-3 rounded-5 text-primary">
                    All
                  </span>
                  <span className="hover-effect py-1 px-3 rounded-5">
                    Unread
                  </span>
                  <span className="hover-effect py-1 px-3 rounded-5">
                    Groups
                  </span>
                  <span className="hover-effect py-1 px-3 rounded-5">
                    Communities
                  </span>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <img
                    src={profile1}
                    alt="pic"
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-5"
                  />
                  <span className="fs-6 fw-5">Pradeep</span>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <img
                    src={status1}
                    alt="pic"
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-5"
                  />
                  <span className="fs-6 fw-5">Tamil</span>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <img
                    src={status2}
                    alt="pic"
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-5"
                  />
                  <span className="fs-6 fw-5">Subash</span>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <img
                    src={status3}
                    alt="pic"
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-5"
                  />
                  <span className="fs-6 fw-5">Bharani</span>
                </div>
                <div className="my-3 d-flex gap-2">
                  <img
                    src={post1}
                    alt="pic"
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-5"
                  />
                  <span className="fs-6 fw-5">Logesh</span>
                </div>
              </div>
            )}
          </div>
          {/* notifications */}
          <div>
            <div
              className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2 hover-effect"
              onClick={() => togglePopup("notifications")}
            >
              <IoNotifications />
            </div>
            {activepopup === "notifications" && (
              <div className="pop-up rounded-4 shadow px-3 py-2">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="fw-7">Notifications</span>
                  <HiOutlineDotsHorizontal className="text-secondary" />
                </div>
                <div className="d-flex align-items-center gap-3 px-2 my-2">
                  <span className="fs-6 fw-5 rounded-5 p-2 text-primary bg-light-blue">
                    All
                  </span>
                  <span className="fs-6 fw-5">Unread</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-5 fs-6">New</span>
                  <span className="fs-6 text-primary">see all</span>
                </div>
                <div className="d-flex gap-2 mt-2">
                  <div>
                    <img
                      src={profile1}
                      alt="pic"
                      className="rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <p className="fs-6">
                    <span className="fw-6">Tamil cinema Club </span>
                    added to his story.
                    <span className="d-block text-primary fw-5">4h</span>
                  </p>
                </div>
                <div className="fw-5 fs-6">Earlier</div>
                <div className="mt-2">
                  <div className="d-flex gap-2">
                    <div>
                      <img
                        src={post1}
                        alt="pic"
                        className="rounded-circle"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <p className="fs-6">
                      <span className="fw-6">Behind Takies, </span>a page you
                      recently viewed, invited you to join their private group
                      <span className="fw-6"> Tamil...</span>
                      <span className="d-block text-primary fw-5">1d</span>
                    </p>
                  </div>
                  <div className="text-center fs-6">
                    <button className="btn btn-primary p-1 rounded w-25">
                      Join
                    </button>
                    <button className="ms-2 btn bg-secondary-subtle p-1 rounded w-25">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Profile */}
          <div>
            <div className="c-pointer" onClick={() => togglePopup("profile")}>
              <img src={fbprofile} alt="pic" className="profile-pic-nav" />
            </div>
            {activepopup === "profile" && (
              <div className="pop-up rounded-4 shadow p-2">
                {/* profile and username */}
                <div className="mb-2 border shadow p-3 rounded-4">
                  <div className="d-flex align-items-center gap-2">
                    <div className="fs-2">
                      <img
                        src={fbprofile}
                        alt="pic"
                        className="profile-pic-nav"
                      />
                    </div>
                    <div className="fs-5">Ruban Ruban</div>
                  </div>
                  <hr />
                  <div>
                    <button className="form-control fs-6 color-gray-bg d-flex gap-2 align-items-center justify-content-center">
                      <HiMiniUserGroup />
                      See all profiles
                    </button>
                  </div>
                </div>
                {/* settings & privacy*/}
                <div className="d-flex justify-content-between hover-effect p-2 c-pointer mb-1">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-1 fs-3">
                      <IoMdSettings />
                    </div>
                    <div className="fs-6">Settings & privacy</div>
                  </div>
                  <div className="color-gray">
                    <FaChevronRight />
                  </div>
                </div>
                {/*  Help & support */}
                <div className="d-flex justify-content-between hover-effect p-2 c-pointer mb-1">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-1 fs-3">
                      <IoIosHelpCircle />
                    </div>
                    <div className="fs-6">Help & support</div>
                  </div>
                  <div className="color-gray">
                    <FaChevronRight />
                  </div>
                </div>
                {/*  Display & accessibility */}
                <div className="d-flex justify-content-between hover-effect p-2 c-pointer mb-1">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-1 fs-3">
                      <MdDarkMode />
                    </div>
                    <div className="fs-6">Display & accessibility</div>
                  </div>
                  <div className="color-gray">
                    <FaChevronRight />
                  </div>
                </div>
                {/*  Give feedback */}
                <div className="d-flex gap-3 align-items-center hover-effect p-2 mb-1">
                  <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg p-1 fs-3">
                    <MdFeedback />
                  </div>
                  <div className="fs-6">Give feedback</div>
                </div>
                {/* logout */}
                <div
                  onClick={onLogout}
                  className="d-flex gap-2 align-items-center mb-2 hover-effect c-pointer p-1 fs-3"
                >
                  <div className="border rounded-circle d-flex align-items-center justify-content-center nav-input-bg c-pointer p-2">
                    <RiLogoutBoxRFill />
                  </div>
                  <div className="fs-6">Log Out</div>
                </div>
                <div className="fs-6 mb-3">
                  Privacy · Terms · Advertising · Ad Choices · Cookies ·{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
