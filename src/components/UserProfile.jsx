import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function UserProfile() {
  const user = useSelector((state) => state.user);
  const { username } = useParams();
  const [profileUser, setProfileUser] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/users",
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      const profile = response.data.find((user) => user.username === username);
      setProfileUser(profile);
    };
    getUsers();
  }, [username]);

  return (
    profileUser && (
      <div className="row background mb-4">
        <div className="col">
          <img src={profileUser.profilePic} alt="" className="profile-img" />
          <h4 className="mb-0 mt-3">
            {profileUser.firstname} {profileUser.lastname}
          </h4>
          <h6>@{profileUser.username}</h6>
          <p className="mb-0 mt-3">{profileUser.bio}</p>
        </div>
        <div className="col d-flex flex-column-reverse text-end align-items-end">
          <div>
            <div className="d-flex align-items-start justify-content-end">
              <a
                href="/followers/user.username"
                className="btn btn-follow rounded-pill"
              >
                Follow
              </a>
            </div>
            <Link
              to={`/${username}/following`}
              className="profile-text text-decoration-none text-black"
            >
              <span className="me-1">{profileUser.followingUsers.length}</span>
              Following
            </Link>
            <Link
              to={`/${username}/followers`}
              className="ms-2 profile-text text-decoration-none text-black"
            >
              <span className="me-1">{profileUser.followersUsers.length}</span>
              Followers
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
export default UserProfile;
