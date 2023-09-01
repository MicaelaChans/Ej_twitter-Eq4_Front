import React from "react";

function UserProfile() {
  return (
    <div className="row background mb-4">
      <div className="col">
        <img src="user.profilePic" alt="" className="profile-img" />
        <h4 className="mb-0 mt-4">user.firstname user.lastname</h4>
        <h6>user.username</h6>
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
            <span>user.followingUsers.length</span>Following
          </a>
          <a
            href="/user.username/followers"
            className="ms-2 profile-text text-decoration-none text-black"
          >
            <span>user.followersUsers.length</span>Followers
          </a>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
