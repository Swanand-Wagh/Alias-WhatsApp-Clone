import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { AttachFile, InsertEmoticon, Mic, MoreVert } from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="header_info">
          <h3>Chat Name</h3>
          <p>Last seen...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_receiver"}`}>
          <span className="chat_name">Alias</span>
          Hey Lotus!!!
          <span className="timestamp">3:20 pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <form action="#">
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send</button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
