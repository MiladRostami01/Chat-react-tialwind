import React from "react"
import ChatCard from "../hoc/ChatCard/ChatCard"

function ChatMessage() {
  return (
    <div className="w-full sm:min-h-[436px] min-h-[500px] bg-extraDark lg:col-start-4 lg:col-end-10 col-start-1 col-end-10 p-4  rounded-lg md:overflow-y-auto relative">
      {/* input start  */}
      <div className="absolute bottom-0 left-0 w-full bg-extraDark p-4 flex items-center justify-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Type a message"
          className=" w-full p-2 rounded-lg bg-dark text-textColor active:shadow-none"
        />
      </div>
      {/* input end */}
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

      <div
        className="w-6/12 text-justify bg-ThemeBule p-4 rounded-t-xl rounded-r-xl
    my-4"
      >
        <p className="text-white">Lorem ipsum dolor sit amet</p>
      </div>

      <div className="flex justify-end">
        <p className="text-white w-6/12 text-justify bg-dark p-4 rounded-t-xl rounded-l-xl my-4">
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  )
}

export default ChatMessage
