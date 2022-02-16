import React from "react";
import ChatCard from "../hoc/ChatCard/ChatCard";

import hiking from "./../../assets/img/hiking.svg";
import yoga from "./../../assets/img/yoga.svg";
import Art from "./../../assets/img/art.svg";

function ChatList() {
  return (
    <div className="w-full h-full lg:col-start-1 hidden lg:block lg:col-end-4 rounded-lg md:overflow-y-auto">
      <ChatCard>
        <div className="w-[50px] h-[50px]">
          <img src={yoga} className="w-full h-full" alt="" />
        </div>
        <div>
          <h2 className="text-textColor font-bold text-sm ml-2">Nancy Fernandez</h2>
          <p className="text-textColor text-sm ml-2">Online</p>
        </div>
      </ChatCard>
      <ChatCard>
        <div className="w-[50px] h-[50px]">
          <img src={hiking} className="w-full h-full" alt="" />
        </div>
        <div>
          <h2 className="text-textColor font-bold text-sm ml-2">Scott Wong</h2>
          <p className="text-textColor text-sm ml-2">12:05 p.m</p>
        </div>
      </ChatCard>
      <ChatCard>
        <div className="w-[50px] h-[50px]">
          <img src={Art} className="w-full h-full" alt="" />
        </div>
        <div>
          <h2 className="text-textColor font-bold text-sm ml-2">Jon Do</h2>
          <p className="text-textColor text-sm ml-2">last seen recently</p>
        </div>
      </ChatCard>
    </div>
  );
}

export default ChatList;
