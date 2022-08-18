import React from "react";
import "./Profile.css";
import NavBarProfile from "../../ComponentJSX/NavBarProfile/NavBarProfile";
import Posts from "../../ComponentJSX/Posts/Posts";

function Profile() {

  return (
    <div className="profile">
      <NavBarProfile />
      <div className="profileBlock">
        <Posts/>
      </div>
    </div>
  );
}

export default Profile;
 