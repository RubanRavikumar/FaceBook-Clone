import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import fbprofile from "../images/fbprofile.jpg";
import status1 from "../images/status1.jpg";
import status2 from "../images/status2.jpg";
import status3 from "../images/status3.jpg";
import post1 from "../images/post1.jpg";
import profile1 from "../images/profile1.jpg";
import { FaRegCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineEventBusy } from "react-icons/md";
import { ImGift } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { RiGamepadLine } from "react-icons/ri";
import { FaImages } from "react-icons/fa";
import { TfiVideoClapper } from "react-icons/tfi";
// import { FaAngleUp } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { PiShareFatBold } from "react-icons/pi";
import { LuCandy } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";

function Home() {
  const stories = [
    {
      id: 1,
      name: "Create story",
      img: fbprofile,
      create: true,
    },
    {
      id: 2,
      name: "Tamil selvan",
      img: status1,
    },
    {
      id: 3,
      name: "Subash",
      img: status3,
    },
    {
      id: 4,
      name: "Ravi",
      img: status2,
      tag: "Birthday",
    },
  ];
  return (
    <div className="row mt-4 home">
      {/* left side box */}
      <div className="col-3 scroll-bar">
        <NavLink to="/profile" className="left-side-bar">
          <img src={fbprofile} alt="pic" className="profile-pic" />
          <span className="text-dark">Ruban Ruban</span>
        </NavLink>
        <a
          href="https://www.meta.ai/?utm_source=facebook_
          bookmarks&fbclid=IwY2xjawMQB_
          5leHRuA2FlbQIxMABicmlkETFaRnZHZ3hxc3Q5eGd3dGZwAR48Cp22UP3XiRpjsQdb98IQwroAExbw_
          MnmNOxgehTYGCgWzb8sncZnl3mOdw_aem_6OiMFQJRGoCvU7Ev0Cdj0w"
          className="left-side-bar"
        >
          <FaRegCircle className="fs-3 text-primary" />
          <span className="text-dark">Meta AI</span>
        </a>
        <NavLink to="/friends" className="left-side-bar">
          <FaUserFriends className="fs-3" />
          <span className="text-dark">Friends</span>
        </NavLink>
        <NavLink to="/memories" className="left-side-bar">
          <LuHistory className="fs-3" />
          <span className="text-dark">Memories</span>
        </NavLink>
        <NavLink to="/saved" className="left-side-bar">
          <FaBookmark className="fs-3 bookmark" />
          <span className="text-dark">Saved</span>
        </NavLink>
        <NavLink to="/groups" className="left-side-bar">
          <HiUserGroup className="fs-3" />
          <span className="text-dark">Groups</span>
        </NavLink>
        <NavLink to="/video" className="left-side-bar">
          <MdOutlineOndemandVideo className="fs-3" />
          <span className="text-dark">Video</span>
        </NavLink>
        <NavLink to="/marketplace" className="left-side-bar">
          <AiOutlineShop className="fs-3" />
          <span className="text-dark">Marketplace</span>
        </NavLink>
        <NavLink to="/feeds" className="left-side-bar">
          <FaRegNewspaper className="fs-3" />
          <span className="text-dark">Feeds</span>
        </NavLink>
        <NavLink to="/event" className="left-side-bar">
          <MdOutlineEventBusy className="fs-3 text-danger" />
          <span className="text-dark">Events</span>
        </NavLink>
        <a
          href="https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=1063807332476570&nav_entry_point=comet_bookmark&nav_source=comet"
          className="left-side-bar"
        >
          <MdManageAccounts className="fs-3 text-primary" />
          <span className="text-dark">Ads Manager</span>
        </a>
        <NavLink to="/birthdays" className="left-side-bar">
          <ImGift className="fs-3" />
          <span className="text-dark">Birthdays</span>
        </NavLink>
        <NavLink to="/gaming-video" className="left-side-bar">
          <RiGamepadLine className="fs-3" />
          <span className="text-dark">Gaming Video</span>
        </NavLink>
        <NavLink to="/messenger" className="left-side-bar">
          <FaFacebookMessenger className="fs-3" />
          <span className="text-dark">Messenger</span>
        </NavLink>
        <NavLink to="/messengerkids" className="left-side-bar">
          <FaFacebookMessenger className="fs-3 kids-messenger" />
          <span className="text-dark">Messenger Kids</span>
        </NavLink>
        <NavLink to="/Orders" className="left-side-bar">
          <FaBox className="fs-3 text-dark" />
          <span className="text-dark">Orders and payments</span>
        </NavLink>
        <NavLink to="/pages" className="left-side-bar">
          <FaFlag className="fs-3 text-danger" />
          <span className="text-dark">Pages</span>
        </NavLink>
        <NavLink to="/gaming" className="left-side-bar">
          <RiGamepadLine className="fs-3" />
          <span className="text-dark">Play games</span>
        </NavLink>
        <NavLink to="/ad-activity" className="left-side-bar">
          <FaImages className="fs-3" />
          <span className="text-dark"> Recent ad activity</span>
        </NavLink>
        <NavLink to="/reels" className="left-side-bar">
          <TfiVideoClapper className="fs-3 text-danger" />
          <span className="text-dark">Reels</span>
        </NavLink>
        {/* <div className="left-side-bar">
          <div>
            <IoIosArrowDown />
            See more
          </div>
          <div>
            <FaAngleUp />
            See less
          </div>
        </div> */}
        <hr />
        <div className="shortcuts mb-3">Your shortcuts</div>
        <NavLink to="/gaming" className="left-side-bar">
          <LuCandy className="fs-3 text-danger" />
          <span className="text-dark">Candy Crush Saga</span>
        </NavLink>
        <div className="my-3 privacy-font">
          Privacy · Terms · Advertising · Ad Choices · Cookies
        </div>
        <br /> <br /> <br /> <br />
      </div>
      {/* center box */}
      <div className="col-6">
        <div className="position-center">
          {/* personal activity */}
          <div className="p-2 border rounded-4 shadow bg-light">
            <div className="d-flex align-items-center gap-2">
              <img src={fbprofile} alt="pic" className="profile-pic" />
              <input
                type="text"
                placeholder="What's on your mind, Ruban?"
                className="rounded-5 w-100 border-none s-bg px-2"
              />
            </div>
            <hr />
            <div className="d-flex justify-content-between px-4">
              <div className="p-2 d-flex gap-1 hover-effect">
                <BsFillCameraVideoFill className="fs-3 text-danger" />
                Live video
              </div>
              <div className="p-2 d-flex gap-1 hover-effect">
                <IoMdPhotos className="fs-3 photo-color" />
                Photo/video
              </div>
              <div className=" p-2 d-flex gap-1 hover-effect">
                <FaRegSmile className="fs-3 text-warning" />
                Feeling/activity
              </div>
            </div>
          </div>
          {/* public activity - status*/}
          <div>
            {/* status section */}
            <div className="stories-container d-flex flex-row overflow-auto p-2 mt-2">
              {stories.map((story) => (
                <div key={story.id} className="story-card text-center me-2">
                  <div className="story-img">
                    <img
                      src={story.img}
                      alt={story.name}
                      className="img-fluid"
                    />
                    {story.tag && (
                      <span className="story-tag">{story.tag}</span>
                    )}
                  </div>
                  <p className="story-name">{story.name}</p>
                  {story.create && <div className="create-icon">+</div>}
                </div>
              ))}
            </div>
            {/* post section */}
          </div>
          {/* public activity - post */}
          <div className="border rounded-4 my-2">
            <div className="d-flex align-items-center justify-content-between  px-3 py-2">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={profile1}
                  alt="pic"
                  className="img-w rounded-5 border border-3 border-primary"
                />
                <div>
                  <span className="d-block fw-5"> Tamil Cinema Club</span>
                  <span className="text-secondary">
                    2h . <FaGlobeAmericas />{" "}
                  </span>
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center text-secondary">
                <BsThreeDots className="fs-4" />
                <RxCross2 className="fs-4" />
              </div>
            </div>
            <div>
              <img src={post1} alt="pic" style={{ width: "100%" }} />
            </div>
            <div className="mt-2 px-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex">
                    <div className="border rounded-5 p-1 bg-primary d-flex align-items-center">
                      <FaThumbsUp className="text-light" />
                    </div>
                    <div className="border rounded-5 p-1 bg-danger d-flex align-items-center">
                      <FaHeart className="text-light" />
                    </div>
                  </div>
                  <div className="text-secondary">1.6k</div>
                </div>
                <div className="d-flex gap-2">
                  <div className="text-secondary d-flex align-items-center gap-1">
                    140
                    <FaRegComment />
                  </div>
                  <div className="text-secondary d-flex align-items-center gap-1">
                    20
                    <PiShareFatBold />
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="d-flex align-items-center justify-content-between px-5 mb-2">
              <div className="text-secondary d-flex align-items-center gap-1">
                <LuThumbsUp /> Like
              </div>
              <div className="text-secondary d-flex align-items-center gap-1">
                <FaRegComment /> Comment
              </div>
              <div className="text-secondary d-flex align-items-center gap-1">
                <PiShareFatBold /> Share
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side box */}
      <div className="col-3 p-2 scroll-bar">
        {/* right side birthday section */}
        <div>
          <div className="text-secondary fw-5">Birthdays</div>
          <div className="d-flex gap-2 hover-effect p-2">
            <div className="fs-3 text-primary">
              <ImGift />
            </div>
            <div>
              <b>Vijay </b> and <b>Ganesan Vijakumar G</b> have birthdays today.
            </div>
          </div>
        </div>
        <hr />
        {/* right side friends section */}
        <div>
          {/* heading & icons */}
          <div className="d-flex justify-content-between align-items-center fs-5 text-secondary">
            <div>contacts</div>
            <div className="d-flex gap-3">
              <IoIosSearch />
              <BsThreeDots />
            </div>
          </div>
          {/* friends */}
          <div>
            <div className="left-side-bar mb-2">
              <div className="fs-3 text-primary">
                <FaRegCircle className="border rounded-5 FaRegCircle" />
              </div>
              Meta AI <VscVerifiedFilled className="text-primary" />
            </div>
            <div className="left-side-bar mb-2">
              <img src={status1} alt="pic" className="img-w rounded-5" />
              Ranjith
            </div>
            <div className="left-side-bar mb-2">
              <img src={status2} alt="pic" className="img-w rounded-5" />
              Ravi kumar
            </div>
            <div className="left-side-bar mb-2">
              <img src={status3} alt="pic" className="img-w rounded-5" />
              Subash
            </div>
            <div className="left-side-bar mb-2">
              <img src={profile1} alt="pic" className="img-w rounded-5" />
              Tamil selvan
            </div>
            <div className="left-side-bar mb-2">
              <img src={post1} alt="pic" className="img-w rounded-5" />
              Bharani
            </div>
            <div className="left-side-bar mb-2">
              <img src={status1} alt="pic" className="img-w rounded-5" />
              Siva
            </div>
            <div className="left-side-bar mb-2">
              <img src={status2} alt="pic" className="img-w rounded-5" />
              Santhosh
            </div>
            <div className="left-side-bar mb-2">
              <img src={status3} alt="pic" className="img-w rounded-5" />
              Selva kumar
            </div>
            <div className="left-side-bar mb-2">
              <img src={profile1} alt="pic" className="img-w rounded-5" />
              Udhaya
            </div>
            <div className="left-side-bar mb-2">
              <img src={post1} alt="pic" className="img-w rounded-5" />
              Prabu
            </div>
            <div className="left-side-bar mb-2">
              <img src={status1} alt="pic" className="img-w rounded-5" />
              Kesavan
            </div>
            <div className="left-side-bar mb-2">
              <img src={status2} alt="pic" className="img-w rounded-5" />
              Dhinakaran
            </div>
            <div className="left-side-bar mb-2">
              <img src={status3} alt="pic" className="img-w rounded-5" />
              Reyas
            </div>
            <div className="left-side-bar mb-2">
              <img src={profile1} alt="pic" className="img-w rounded-5" />
              Ragul
            </div>
            <div className="left-side-bar mb-2">
              <img src={[post1]} alt="pic" className="img-w rounded-5" />
              Giri
            </div>
            <div className="left-side-bar mb-2">
              <img src={status1} alt="pic" className="img-w rounded-5" />
              Dheenadhayalan
            </div>
            <div className="left-side-bar mb-2">
              <img src={status2} alt="pic" className="img-w rounded-5" />
              Logesh
            </div>
            <div className="left-side-bar mb-2">
              <img src={status3} alt="pic" className="img-w rounded-5" />
              Jeeva
            </div>
          </div>
        </div>
        <hr />
        {/* right side group section */}
        <div>
          <div className="text-secondary fw-5 mb-2">Group chats</div>
          <div className="mb-2 mb-2 d-flex align-items-center gap-2 fw-5">
            <img src={profile1} alt="pic" className="img-w rounded-5" />
            A3
          </div>
          <div className="mb-2 d-flex align-items-center gap-2 fw-5">
            <IoMdAdd className="fs-1 border rounded-5 p-2 icon-bg" />
            Create group chat
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
