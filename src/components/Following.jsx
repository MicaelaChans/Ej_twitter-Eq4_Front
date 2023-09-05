import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function Following() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xxl-2 col-xl-2 col-lg-1 col-2">
          <NavBar />
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-10 py-3 border">
          <div class="d-flex align-items-center">
            <a href="/user.username">
              <i class="bi bi-arrow-left-short me-2"></i>
            </a>
            <div>
              <h4 class="m-0"> user.firstname user.lastname</h4>
              <h6>@user.username</h6>
            </div>
          </div>
          <div class="d-flex justify-content-evenly my-3 border-bottom">
            <h5 class="m-0 mt-2 pb-2">
              <a
                href="/user.username/followers"
                class="text-decoration-none text-black"
              >
                Followers
              </a>
            </h5>
            <h5 class="m-0 mt-2 pb-2 borderFollowers">Following</h5>
          </div>
          <a href="/following.username" class="follow-links">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="d-flex align-items-center">
                <img
                  src="following.profilePic"
                  /*src="/img/following.profilePic"*/
                  alt="profilePic"
                  class="home-img"
                />
                <div class="ms-2 d-flex flex-column">
                  <h6 class="mb-0">following.firstname following.lastname</h6>
                  <p class="mb-0">@following.username</p>
                </div>
              </div>
              <a
                href="/following/following.username"
                class="btn btn-outline-dark rounded-pill"
              >
                Following
              </a>
            </div>
          </a>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-xl-block d-lg-block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Following;
