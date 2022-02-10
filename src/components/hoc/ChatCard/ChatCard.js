import React from 'react'

function ChatCard({children}) {
  return (
    <div className='bg-extraDark rounded-[10px] flex flex-row items-center justify-start h-[70px] p-2.5 mb-2 cursor-pointer'>
      {children}
    </div>
  )
}

export default ChatCard