import React, { useState } from "react";
import LikeButton from "./LikeButton";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { createTweet } from "../redux/userSlice";
import { formatDistanceToNow, parse } from "date-fns";



function NewTweet({ handleClose }) {
  const user = useSelector((state) => state.user);
  const loggedUser = useSelector((state) => state.user);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:3000/tweets",
      method: "POST",
      data: { content },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
    dispatch(createTweet({ id: uuidv4(), content: content, likes: [""], author: {id: loggedUser.id,
        username: loggedUser.username,
        firstname: loggedUser.firstname,
        lastname: loggedUser.lastname,
      profilePic: loggedUser.profilePic,
    }}));
  };

  return (
    <div className="row">
      <div className="col-1">
        <img
          className="home-img"
          src={loggedUser.profilePic}
          alt="profileImg"
        />
      </div>
      <div className="col-11">
        <form action="" onSubmit={handleSubmit}>
          <textarea
            name="content"
            className="form-control home-tweet"
            id="content"
            maxLength="140"
            cols="4"
            rows="3"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
