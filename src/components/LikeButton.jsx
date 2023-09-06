import React from "react";

function LikeButton() {
  return (
    <button className="p-0 me-2 heart">
      <i className="bi bi-heart-fill text-danger"></i>
      <i className="bi bi-heart-fill text-dark"></i>
    </button>
  );
}

export default LikeButton;

//href="/tweet/like/"
