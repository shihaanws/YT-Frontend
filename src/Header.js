import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Toggle from "./toggle";
import Sidebar from "./Sidebar";

function Header(props) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        {/* <MenuIcon style={{ color: "yellow" }} /> */}

      <Tooltip title="Youtube Home">
        <IconButton >
          <Link to="/">
            <img className="header__logo" src={logo} alt="" />
          </Link>     
        </IconButton>
      </Tooltip>

        
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          style={{
            flex: 1,
            border: "none",
            padding: "8.3px 20px",
            width: "30vw",
            backgroundColor: "#131313",
            color: "white",
            fontSize: "16px",
          }}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />



        <Link to={`/search/${inputSearch}`}>
          <SearchIcon
            className="header__inputButton"
            style={{ color: "#9b9b9b", padding: "4px 10px" }}
          />
        </Link>
      </div>


<Tooltip title="Notifications">
        <IconButton >
        <Notification style={{ color: "white", marginLeft: "20px" }} />
        </IconButton>
</Tooltip>






        
      <Tooltip title="Create">
        <IconButton >
        <VideoCallIcon className="my"  style={{ color: "white", marginLeft: "10px" }} />
        </IconButton>
      </Tooltip>
<div >

</div>
     

      <Tooltip title="Youtube Apps">
        <IconButton >
        <AppsIcon style={{ color: "white", marginLeft: "20px" }} />
        </IconButton>
      </Tooltip>

      
        <Avatar
          style={{ height: "30px", width: "30px", marginLeft: "20px" }}
          className="avatar"
          src="https://pbs.twimg.com/profile_images/1224745492573085697/Szz-h753_400x400.jpg"
          
          alt="Shihaan"
        />
      </div>
  );
}

export default Header;
