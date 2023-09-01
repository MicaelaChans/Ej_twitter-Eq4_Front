//Como la home. Vista general.
import NavBar from "./NavBar";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import LikeButton from "./LikeButton";
import "./css/profile.css";

import React from "react";
import UserProfile from "./UserProfile";
function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-1 col-2 nav-position">
          <NavBar />
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-10 border">
          <UserProfile />
          <div className="border-bottom">
            <h5 className="m-0 mt-2 pb-2 borderTweet">Tweets</h5>
          </div>
          <Tweet />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-xl-block d-lg-block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Profile;
