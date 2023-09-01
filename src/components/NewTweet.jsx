import React from "react";
import LikeButton from "./LikeButton";

function NewTweet() {
  return (
    <div className="row">
      <div className="col-1">
        <img className="home-img" src="./img/profile.jpg" alt="profileImg" />
      </div>
      <div className="col-11">
        <form action="/tweet" method="post">
          <textarea
            name="content"
            className="form-control home-tweet"
            id="textarea"
            maxlength="140"
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
