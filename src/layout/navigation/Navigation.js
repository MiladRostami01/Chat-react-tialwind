import React from "react"
import { NavLink } from "react-router-dom"

import "./Navigation.css"

import Chat from "./../../assets/icons/chat.svg"
import Groups from "./../../assets/icons/user.svg"
import save from "./../../assets/icons/save.svg"
import setting from "./../../assets/icons/setting.svg"

function Navigation({ closeSidebar, sidebar, setTitle }) {
  return (
    <nav className={sidebar ? "navbar navbar-active" : "navbar"}>
      <ul className="navbar-ul" onClick={closeSidebar}>
        <li>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive ? "icon-size icon-size-hover" : "icon-size"
            }
            onClick={() => setTitle("Chat")}
          >
            <img src={Chat} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "icon-size icon-size-hover" : "icon-size"
            }
            onClick={() => setTitle("Groups")}
          >
            <img src={Groups} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/save"
            className={({ isActive }) =>
              isActive ? "icon-size icon-size-hover" : "icon-size"
            }
            onClick={() => setTitle("Save")}
          >
            <img src={save} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              isActive ? "icon-size icon-size-hover" : "icon-size"
            }
            onClick={() => setTitle("Setting")}
          >
            <img src={setting} alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
