//Como la home. Vista general.
import NavBar from "./NavBar";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import "./css/profile.css";
import UserProfile from "./UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  const [paramsUser, setParamsUser] = useState();
  const { username } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/users",
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      const profileUser = response.data.find(
        (user) => user.username === username
      );
      setParamsUser(profileUser);
    };
    getUsers();
  }, [username]);

  return (
    paramsUser && (
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
            {paramsUser.tweetsList
              .map((tweet) => (
                <div key={tweet._id} className="form-floating mt-2">
                  <div className="row border-bottom my-2 py-3">
                    <div className="col-1">
                      <img
                        src={paramsUser.profilePic}
                        alt=""
                        className="home-img"
                      />
                    </div>
                    <div className="col-11">
                      <div id="dat1">
                        <a href="/" className="link-dark">
                          <h5 className="m-0 d-inline-block">
                            {paramsUser.firstname} {paramsUser.lastname}
                          </h5>
                        </a>
                        <p className="m-0 d-inline-block">
                          @{paramsUser.username} ·{" "}
                          {tweet.createdAt.toLocaleDateString}
                        </p>
                      </div>
                      <div>
                        <p className="m-0">{tweet.content}</p>
                      </div>
                      <div className="container-flex">
                        <div className="d-flex align-items-center">
                          <div className="icono d-flex align-items-center">
                            <a href="/tweet/like/" className="p-0 me-2 heart">
                              <i className="bi bi-heart-fill text-danger"></i>
                              <i className="bi bi-heart-fill text-dark"></i>
                            </a>
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
    )
  );
}
export default Profile;
