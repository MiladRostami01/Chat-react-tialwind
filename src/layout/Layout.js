import React, {useState} from 'react';
import Navigation from './navigation/Navigation';
import ContentHeader from './contentHeader/ContentHeader';

import './Layout.css'

function Layout({children}) {
  const [sidebar, setSidebar] = useState(false)

  const sidebarToggleHandler = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className='app-container'>
      <Navigation sidebarToggle={sidebarToggleHandler} sidebar={sidebar} />
      <main className='w-full h-full md:mx-auto sm:px-[20px] px-[0px]'>
        <ContentHeader sidebarToggle={sidebarToggleHandler}/>
        <div className='min-h-[436px] h-auto'>
          {children}
        </div>
      </main>
      <div className={sidebar && 'overlay'} onClick={sidebarToggleHandler} ></div>
    </div>
  )
}

export default Layout;
