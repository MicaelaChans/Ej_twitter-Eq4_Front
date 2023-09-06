import React from "react";
import NavBar from "./NavBar";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import LikeButton from "./LikeButton";
import TweetModal from "./TweetModal";
import "./css/home.css";
import "./css/styles.css";
import NewTweet from "./NewTweet";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const followingTweets = useSelector((state) => state.user.followingTweets);

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
          {followingTweets
            .map((tweet) => (
              <div key={tweet._id} className="form-floating mt-2">
                <div className="row border-bottom my-2 py-3">
                  <div className="col-1">
                    <img
                      src={tweet.author.profilePic}
                      alt=""
                      className="home-img"
                    />
                  </div>
                  <div className="col-11">
                    <div id="dat1">
                      <NavLink to="/" className="link-dark">
                        <h5 className="m-0 d-inline-block">
                          {tweet.author.firstname} {tweet.author.lastname}
                        </h5>
                      </NavLink>
                      <p className="m-0 d-inline-block">
                        @{tweet.author.username} ·{" "}
                        {formatDistanceToNow(new Date(tweet.createdAt), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="m-0">{tweet.content}</p>
                    </div>
                    <div className="container-flex">
                      <div className="d-flex align-items-center">
                        <div className="icono d-flex align-items-center">
                          <LikeButton />
                          <p className="m-0">{tweet.likes.length}</p>
                        </div>
                        <div className="icono">
                          <i className="bi bi-repeat"></i>
                        </div>
                        <div className="icono">
                          <i className="bi bi-chat"></i>
                        </div>
                      </div>
                      <div className="d-flex">
                        <form
                          action="/tweet/tweet.id?_method=DELETE"
                          method="get"
                        >
                          <button href="tweet.id">
                            <i className="bi bi-trash-fill color: tomato"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            .sort()
            .reverse()}
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
