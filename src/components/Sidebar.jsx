import React from "react";

function Sidebar() {
  return (
    <aside className="py-3">
      <section id="whatsHappening" className="rounded bg-light p-3">
        <h4 className="trends-principal-text mb-3">What's happening</h4>
        <div className="mb-3">
          <p className="m-0 text-black-50 trends-terciary-text">
            Programming - Trending
          </p>
          <h5 className="m-0 trends-secondary-text">#MongoVsSequelize</h5>
          <p className="m-0 text-black-50 trends-terciary-text">96,5 Tweets</p>
        </div>
        <div className="mb-3">
          <p className="m-0 text-black-50 trends-terciary-text">
            Entertaiment - Trending
          </p>
          <h5 className="m-0 trends-secondary-text">#StarWars</h5>
          <p className="m-0 text-black-50 trends-terciary-text">96,5 Tweets</p>
        </div>
        <div className="mb-3">
          <p className="m-0 text-black-50 trends-terciary-text">
            News - Trending
          </p>
          <h5 className="m-0 trends-secondary-text">#LifeInMars</h5>
          <p className="m-0 text-black-50 trends-terciary-text">35,5 Tweets</p>
        </div>
      </section>
      <section id="whoToFollow" className="my-3 rounded bg-light p-3 w100">
        <h4 className="trends-principal-text mb-3">Who to follow</h4>
        <div className="follow-user mb-3">
          <img
            src="/img/profile.jpg"
            alt="profile picture"
            className="follow-img"
          />
          <div className="d-flex align-items-center follow-box">
            <div>
              <h3 className="follow-text m-0">Hack Academy Dev</h3>
              <p className="follow-text text-black-50 m-0">@HackAcademy</p>
            </div>
            <span className="btn btn-follow btn-sm rounded-pill">Follow</span>
          </div>
        </div>
        <div className="follow-user mb-3">
          <img
            src="/img/profile.jpg"
            alt="profile picture"
            className="follow-img"
          />
          <div className="d-flex align-items-center follow-box">
            <div>
              <h3 className="follow-text m-0">JavaScript</h3>
              <p className="follow-text text-black-50 m-0">@JavaScript</p>
            </div>
            <span className="btn btn-follow btn-sm rounded-pill">Follow</span>
          </div>
        </div>
        <div className="follow-user mb-3">
          <img
            src="/img/profile.jpg"
            alt="profile picture"
            className="follow-img"
          />
          <div className="d-flex align-items-center follow-box">
            <div>
              <h3 className="follow-text m-0">MongoDB</h3>
              <p className="follow-text text-black-50 m-0">@MongoDB</p>
            </div>
            <span className="btn btn-follow btn-sm rounded-pill">Follow</span>
          </div>
        </div>
        <div className="follow-user mb-3">
          <img
            src="/img/profile.jpg"
            alt="profile picture"
            className="follow-img"
          />
          <div className="d-flex align-items-center follow-box">
            <div>
              <h3 className="follow-text m-0">Node.js</h3>
              <p className="follow-text text-black-50 m-0">@nodejs</p>
            </div>
            <span className="btn btn-follow btn-sm rounded-pill">Follow</span>
          </div>
        </div>
        <div className="follow-user mb-3">
          <img
            src="/img/profile.jpg"
            alt="profile picture"
            className="follow-img"
          />
          <div className="d-flex align-items-center follow-box">
            <div>
              <h3 className="follow-text m-0">MDN Web Docs</h3>
              <p className="follow-text text-black-50 m-0">@MozDevNet</p>
            </div>
            <span className="btn btn-follow btn-sm rounded-pill">Follow</span>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
