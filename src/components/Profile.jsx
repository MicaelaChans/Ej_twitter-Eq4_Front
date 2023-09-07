//Como la home. Vista general.
import NavBar from "./NavBar";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import "./css/profile.css";
import UserProfile from "./UserProfile";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import LikeButton from "./LikeButton";
import { formatDistanceToNow } from "date-fns";
import { likeTweet } from "../redux/userSlice";

function Profile() {
  const user = useSelector((state) => state.user);
  const [paramsUser, setParamsUser] = useState();
  const { username } = useParams();
  const dispatch = useDispatch();
  const userLogged = user;

 useEffect(() => {
    if (username === userLogged.username) {
      setParamsUser(userLogged);
    } else {
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
    }
  },);

  const handleDelete = async (tweetId) => {
    const response = await axios({
      url: `http://localhost:3000/tweets/${tweetId}`,
      method: "DELETE",
      data: { tweetId },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
  };

  const handleLike = async (tweetId) => {
    const response = await axios({
      url: `http://localhost:3000/tweets/like/${tweetId}`,
      method: "PATCH",
      data: { tweetId },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
    dispatch(likeTweet(tweetId));
    console.log("Me gusta el Tweet front")
  }

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
                        <NavLink to="/" className="link-dark">
                          <h5 className="m-0 d-inline-block">
                            {paramsUser.firstname} {paramsUser.lastname}
                          </h5>
                        </NavLink>
                        <p className="m-0 d-inline-block">
                          @{paramsUser.username} ·
                          {/* {tweet.createdAt} */}
                        </p>
                      </div>
                      <div>
                        <p className="m-0">{tweet.content}</p>
                      </div>
                      <div className="container-flex">
                        <div className="d-flex align-items-center">
                          <div className="icono d-flex align-items-center">
                              <button id={tweet._id} onClick={()=>handleLike(tweet._id)} className="p-0 me-2 heart">
                                {tweet.likes.includes(userLogged.id)?
                                <i className="bi bi-heart-fill text-danger"></i> :
                                <i className="bi bi-heart-fill text-dark"></i>}
                              </button>
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
                          {`${window.location.href}` ===
                          `http://localhost:5173/${user.username}` ? (
                            <button
                              type="submit"
                              onClick={() => handleDelete(tweet._id)}
                            >
                              <i className="bi bi-trash-fill"></i>
                            </button>
                          ) : (
                            ""
                          )}
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
