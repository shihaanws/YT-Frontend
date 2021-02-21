import React, {Fragment,useState}from "react";
import {Drawer} from '@material-ui/core';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import MenuIcon from '@material-ui/icons/Menu';
const Sidebar= () => {
   const [open,setOpen]= useState(false)
   const handleDrawer =()=>{
     setOpen(true)
   }
  return (
    <div className="sidebar">
      <div className="menu">
      <MenuIcon  onClick={handleDrawer} />
      <p>MENU</p>
      </div>

      <Drawer
      anchor='left'
      open={open}
      onClose={()=> setOpen(false)}
      >
        <div style={{color:"white", backgroundColor:"#363636", width : "250px" }}>
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your Videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
        </div>
      
        </Drawer>

    </div>
  );
}

export default Sidebar;
