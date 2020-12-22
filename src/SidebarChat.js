import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase";

function SidebarChat({ id, name, addNewChat }) {
  const createChat = () => {
    const roomName = prompt("ENTER A CHAT ROOM NAME ?");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
      />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2 style={{ margin: "0px auto" }}>Add New Chat Room !!!</h2>
    </div>
  );
}

export default SidebarChat;
