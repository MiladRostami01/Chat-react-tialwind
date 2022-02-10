import React from 'react';
import {Link} from 'react-router-dom'

import './Navigation.css'

import Chat from './../../assets/icons/chat.svg'
import Groups from './../../assets/icons/user.svg'
import save from './../../assets/icons/save.svg'
import setting from './../../assets/icons/setting.svg'
import {useTitle ,useSetTitle} from './../../provider/title-provider'

function Navigation({sidebarToggle , sidebar}) {
  const setTitle = useSetTitle()
  const title = useTitle()

  return (
    <nav className={sidebar? 'navbar navbar-active': 'navbar'}>
      <ul className='navbar-ul' onClick={sidebarToggle}>

        <li className={`icon-size ${title === 'Chat' && 'icon-size-hover'}`} >
          <Link to="/chat" onClick={() => setTitle('Chat')}><img src={Chat} alt="" /></Link>
        </li>
        <li className={`icon-size ${title === 'Groups' && 'icon-size-hover'}`}>
          <Link to="/" onClick={() => setTitle('Groups')}><img src={Groups} alt="" /></Link>
        </li>
        <li className={`icon-size ${title === 'Save' && 'icon-size-hover'}`}>
          <Link to="/save" onClick={() => setTitle('Save')}><img src={save} alt="" /></Link>
        </li>
        <li className={`icon-size ${title === 'Setting' && 'icon-size-hover'}`}>
          <Link to="/setting" onClick={() => setTitle('Setting')}><img src={setting} alt="" /></Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navigation;
