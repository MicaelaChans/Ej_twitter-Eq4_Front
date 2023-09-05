import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Following() {
  const { username } = useParams();
  const user = useSelector((state) => state.user);
  const [paramsUser, setParamsUser] = useState();

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
          <div className="col-xxl-2 col-xl-2 col-lg-1 col-2">
            <NavBar />
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-10 py-3 border">
            <div className="d-flex align-items-center">
              <NavLink to={`/${user.userFound.username}`}>
                <i className="bi bi-arrow-left-short me-2"></i>
              </NavLink>
              <div>
                <h4 className="m-0">
                  {" "}
                  {paramsUser.firstname} {paramsUser.lastname}
                </h4>
                <h6>@{paramsUser.username}</h6>
              </div>
            </div>
            <div className="d-flex justify-content-evenly my-3 border-bottom">
              <h5 className="m-0 mt-2 pb-2">
                <NavLink
                  to={`/${paramsUser.username}/followers`}
                  className="text-decoration-none text-black"
                >
                  Followers
                </NavLink>
              </h5>
              <h5 className="m-0 mt-2 pb-2 borderFollowers">Following</h5>
            </div>
            {paramsUser.followingUsers.map((following) => (
              <div key={following._id}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={following.profilePic}
                      alt="profilePic"
                      className="home-img"
                    />
                    <div className="ms-2 d-flex flex-column">
                      <NavLink
                        to={`/${following.username}`}
                        className="follow-links"
                      >
                        <h6 className="mb-0">
                          {following.firstname} {following.lastname}
                        </h6>
                        <p className="mb-0">@{following.username}</p>
                      </NavLink>
                    </div>
                  </div>
                  <NavLink
                    to="/following/following.username"
                    className="btn btn-outline-dark rounded-pill"
                  >
                    Following
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-xl-block d-lg-block">
            <Sidebar />
          </div>
        </div>
      </div>
    )
  );
}

export default Following;
