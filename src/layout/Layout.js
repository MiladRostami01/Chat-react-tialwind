import React, { useState, useEffect, useRef } from "react"
import Navigation from "./navigation/Navigation"
import ContentHeader from "./contentHeader/ContentHeader"

import "./Layout.css"

function Layout({ children }) {
  const [sidebar, setSidebar] = useState(false)
  const [title, setTitle] = useState("Groups")

  // useEffect(() => {
  //   window.history.pushState("", "", "/")
  // }, [])

  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    window.history.pushState("", "", "/")
  }

  const showSidebar = () => {
    setSidebar(true)
    console.log(sidebar)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <div className="app-container">
      <Navigation closeSidebar={closeSidebar} sidebar={sidebar} setTitle={setTitle} />
      <main className="w-full h-full md:mx-auto sm:px-[20px] px-[0px]">
        <ContentHeader showSidebar={showSidebar} title={title} />
        <div className="min-h-[436px] h-auto">{children}</div>
      </main>
      <div className={sidebar && "overlay"} onClick={closeSidebar}></div>
    </div>
  )
}

export default Layout
