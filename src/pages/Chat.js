import React from "react";
import { useLayoutMode } from "../provider/layoutMode-provider";
import ChatList from "../components/chatList/ChatList";
import ChatMessage from "../components/chatMessage/ChatMessage";

function Chat() {
  const layoutMode = useLayoutMode();

  const layoutStyle = layoutMode === "grid" ? "md:grid-cols-9 " : "md:grid-cols-9";

  return (
    <div
      className={`w-full grid gap-4 row-auto sm:min-h-[436px] min-h-full  ${layoutStyle}`}
    >
      <ChatList />
      <ChatMessage />
    </div>
  );
}

export default Chat;
