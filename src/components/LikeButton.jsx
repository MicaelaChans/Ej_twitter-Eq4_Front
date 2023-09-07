import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function LikeButton() {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userLogged = user;
  const likedTweets = useSelector((state) => state.user.likedTweets);

  return (
    <button className="p-0 me-2 heart">
      <i className="bi bi-heart-fill text-danger"></i>
      <i className="bi bi-heart-fill text-dark"></i>
    </button>
  );
}

export default LikeButton;

//href="/tweet/like/"
