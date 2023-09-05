import React from "react";
import LikeButton from "./LikeButton";
import { useSelector } from "react-redux";

function NewTweet() {
  const loggedUser = useSelector((state) => state.user.userFound);

  return (
    <div className="row">
      <div className="col-1">
        <img className="home-img" src={loggedUser.profilePic} alt="profileImg" />
      </div>
      <div className="col-11">
        <form action="/tweet" method="post">
          <textarea
            name="content"
            className="form-control home-tweet"
            id="textarea"
            maxLength="140"
            cols="4"
            rows="3"
            placeholder="What's happening?"
          ></textarea>
          <div className="d-flex justify-content-end mt-2 mb-2">
            <button className="btn rounded-pill" type="submit" id="btnTweet">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTweet;
