import React from "react"
import ChatCard from "../hoc/ChatCard/ChatCard"

function ChatList() {
  return (
    <div className="w-full h-full lg:col-start-1 hidden lg:block lg:col-end-4 rounded-lg md:overflow-y-auto">
      <ChatCard>
        <div className="w-[50px] h-[50px]">
          <img
            src="https://s6.uupload.ir/files/yoga_xrpy.png"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-textColor font-bold text-sm ml-2">Nancy Fernandez</h2>
          <p className="text-textColor text-sm ml-2">Online</p>
        </div>
      </ChatCard>
      <ChatCard>
        <div className="w-[50px] h-[50px]">
          <img
            src="https://s6.uupload.ir/files/hiking_m05r.png"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-textColor font-bold text-sm ml-2">Sscott Wong</h2>
          <p className="text-textColor text-sm ml-2">12:05 p.m</p>
        </div>
      </ChatCard>
      <ChatCard>
        <div className="w-[50px] h-[50px]">
          <img
            src="https://s6.uupload.ir/files/art_qctn.png"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-textColor font-bold text-sm ml-2">Jon Do</h2>
          <p className="text-textColor text-sm ml-2">last seen recently</p>
        </div>
      </ChatCard>
    </div>
  )
}

export default ChatList
