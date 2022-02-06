import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreIcon from "@material-ui/icons/Store";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fdac4-1.fna.fbcdn.net/v/t39.30808-6/273025994_3062688307304188_8199585395123126530_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHUuroFjASfJeDuDnKcyimDHlvBrEJBl4UeW8GsQkGXhSRw9pNrt-MC62xYsRYdPEg3rHz8jmfrWJqXacmWUn5z&_nc_ohc=hHMPcgYW8fcAX9FLL0Y&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fdac4-1.fna&oh=00_AT9MxqYZujZ8WqzJOZVJTjposKOqbtMhEC_pHRChrXZF-A&oe=61FDB1AD"
        title="toufiq"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID_19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
    </div>
  );
};

export default Sidebar;
