import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";

function UserProfile() {
  const loggedUser = useSelector((state) => state.user.userFound);

  return (
    <div className="row background mb-4">
      <div className="col">
        <img src="./img/profile.jpg" alt="" className="profile-img" />
        <h4 className="mb-0 mt-4">
          {loggedUser.firstname} {loggedUser.lastname}
        </h4>
        <h6>{loggedUser.username}</h6>
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
          <a
            href="/user.username/following"
            className="profile-text text-decoration-none text-black"
          >
            <span>{loggedUser.followingUsers.length}</span>Following
          </a>
          <a
            href="/user.username/followers"
            className="ms-2 profile-text text-decoration-none text-black"
          >
            <span>{loggedUser.followersUsers.length}</span>Followers
          </a>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
