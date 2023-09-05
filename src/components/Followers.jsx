import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function Followers() {
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
            <h5 class="m-0 mt-2 pb-2 borderFollowers">Followers</h5>
            <h5 class="m-0 mt-2 pb-2">
              <a
                href="/user.username/following"
                class="text-decoration-none text-black"
              >
                Following
              </a>
            </h5>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-4">
            <a href="/follower.username" class="follow-links">
              <div class="d-flex align-items-center">
                <img
                  src="follower.profilePic"
                  /*src="/img/follower.profilePic"*/ alt="profilePic"
                  class="home-img"
                />
                <div class="d-flex align-items-center">
                  <div class="ms-2 d-flex flex-column">
                    <h6 class="mb-0">follower.firstname follower.lastname</h6>
                    <p class="mb-0">@follower.username</p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/followers/follower.username"
              class="btn btn-follow rounded-pill btnFollowers"
            >
              Follow
            </a>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-xl-block d-lg-block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Followers;
