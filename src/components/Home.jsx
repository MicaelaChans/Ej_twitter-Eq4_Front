import React from "react";
import NavBar from "./NavBar";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import LikeButton from "./LikeButton";
import TweetModal from "./tweetModal";
import "./css/home.css";
import "./css/styles.css";
import NewTweet from "./NewTweet";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (!user) return navigate("/login");
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-1 col-2 nav-position">
          <NavBar />
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-10 border py-3">
          <h2 className="mb-3">Home</h2>
          <NewTweet /> <hr />
          <Tweet />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-xl-block d-lg-block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Home;

/*
<div className="form-floating ">
<div className="row border-bottom my-2 py-3">
<div className="col-1">
  <img src="following.profilePic" alt="" className="home-img" />
</div>
<div className="col-11">
  <div id="dat1">
    <a href="/following.username" className="link-dark">
      <h6 className="m-0 d-inline-block">
        following.firstname following.lastname
      </h6>
    </a>
    <p className="m-0 d-inline-block">
      following.username · tweet.createdAt.toLocaleDateString
    </p>
  </div>
  <div>
    <p className="mb-1 p-0">tweet.content</p>
  </div>
  <div className="container-flex">
    <div className="d-flex align-items-center">
      <div className="icono d-flex align-items-center">
        <a href="/tweet/like/tweet.id" className="p-0 me-2 heart">
          <i className="bi bi-heart-fill text-danger"></i>
          <i className="bi bi-heart-fill text-dark"></i>
        </a>
        <p className="m-0">tweet.likes.length </p>
      </div>
      <div>
        <i className="bi bi-repeat"></i>
      </div>
      <div>
        <i className="bi bi-chat"></i>
      </div>
    </div>
  </div>
</div>
</div>
</div>
*/
