//Como la home. Vista general.
import NavBar from "./NavBar";
import Tweet from "./Tweet";
import Sidebar from "./Sidebar";
import "./css/profile.css";
import UserProfile from "./UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState();
  const { username } = useParams();
  console.log(user);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/users",
        headers: {
          Authorization: "Bearer " + (user && user.token),
        },
      });
      const profileUser = response.data.find(
        (user) => user.username === username
      );
      setUsers(profileUser);
    };
    getUsers();
  }, []);

  console.log(username);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-1 col-2 nav-position">
          <NavBar />
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-10 border">
          <UserProfile />
          <div className="border-bottom">
            <h5 className="m-0 mt-2 pb-2 borderTweet">
              Tweets {users && users.username}
            </h5>
          </div>
          <Tweet />
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-xl-block d-lg-block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Profile;
