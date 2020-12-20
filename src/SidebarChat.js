import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebar_chat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
      />
      <div className="sidebarChat_info">
        <h2>Chat Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
