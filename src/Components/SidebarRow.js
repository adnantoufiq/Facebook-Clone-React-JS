import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {/* iff there is find src and Icon then get the src avatar */}
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
