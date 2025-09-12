import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Video from "./components/video/Video";
import Login from "./components/login/Login";
import Marketplace from "./components/marketplace/Marketplace";
import Groups from "./components/groups/Groups";
import Gaming from "./components/gaming/Gaming";
import Friends from "./components/friends/Friends";
import Profile from "./components/profile/Profile";
import Memories from "./components/memories/Memories";
import Saved from "./components/saved/Saved";
import Feeds from "./components/feeds/Feeds";
import Event from "./components/event/Event";
import Ads from "./components/ads/Ads";
import Birthdays from "./components/birthdays/Birthdays";
import GamingVideo from "./components/gamingvideo/GamingVideo";
import Messenger from "./components/messenger/Messenger";
import MessengerKids from "./components/messengerkids/MessengerKids";
import Orders from "./components/orders/Orders";
import Pages from "./components/pages/Pages";
import AdActivity from "./components/adactivity/AdActivity";
import Reels from "./components/reels/Reels";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (userdata) => {
    const emailvalidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const passvalidate =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (
      userdata.email !== "" &&
      emailvalidate.test(userdata.email) &&
      userdata.password !== "" &&
      passvalidate.test(userdata.password)
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid valid Username or Password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div>
          <Navbar onLogout={handleLogout} />
          <div className="content mx-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video" element={<Video />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/gaming" element={<Gaming />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/feeds" element={<Feeds />} />
              <Route path="/event" element={<Event />} />
              <Route path="/ads" element={<Ads />} />
              <Route path="/birthdays" element={<Birthdays />} />
              <Route path="/gaming-video" element={<GamingVideo />} />
              <Route path="/messenger" element={<Messenger />} />
              <Route path="/messengerkids" element={<MessengerKids />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/ad-activity" element={<AdActivity />} />
              <Route path="/reels" element={<Reels />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
