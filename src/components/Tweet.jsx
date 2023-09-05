import React from "react";
import LikeButton from "./LikeButton";
import { useSelector } from "react-redux";

function Tweet({ paramsUser }) {
  return (
    <div className="form-floating mt-2">
      <div className="row border-bottom my-2 py-3">
        <div className="col-1">
          <img src="./img/profile.jpg" alt="" className="home-img" />
        </div>
        <div className="col-11">
          <div id="dat1">
            <a href="/" className="link-dark">
              <h5 className="m-0 d-inline-block">
                user.firstname user.lastname
              </h5>
            </a>
            <p className="m-0 d-inline-block">
              user.username · tweet.createdAt.toLocaleDateString
            </p>
          </div>
          <div>
            <p className="m-0">weet.content</p>
          </div>
          <div className="container-flex">
            <div className="d-flex align-items-center">
              <div className="icono d-flex align-items-center">
                <a href="/tweet/like/" className="p-0 me-2 heart">
                  <i className="bi bi-heart-fill text-danger"></i>
                  <i className="bi bi-heart-fill text-dark"></i>
                </a>
                <p className="m-0">tweet.likes.length</p>
              </div>
              <div className="icono">
                <i className="bi bi-repeat"></i>
              </div>
              <div className="icono">
                <i className="bi bi-chat"></i>
              </div>
            </div>
            <div className="d-flex">
              <form action="/tweet/tweet.id?_method=DELETE" method="get">
                <button href="tweet.id">
                  <i className="bi bi-trash-fill color: tomato"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
