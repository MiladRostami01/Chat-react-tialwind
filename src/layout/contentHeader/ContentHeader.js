import React, {useState} from 'react';

import {useTitle} from './../../provider/title-provider'
import { useLayoutMode, useSetLayoutMode } from '../../provider/layoutMode-provider';

import arrow from './../../assets/icons/arrow.svg'
import four from './../../assets/icons/four.svg'
import two from './../../assets/icons/two.svg'

import './ContentHeader.css'

function ContentHeader({sidebarToggle}) {
  const title = useTitle()
  const layoutMode = useLayoutMode()
  const setLayoutMode = useSetLayoutMode()

  const gridStyle = layoutMode === 'grid' ? 'layout-icon layout-icon-active' : 'layout-icon layout-icon-hover'
  const listStyle = layoutMode === 'list' ? 'layout-icon layout-icon-active' : 'layout-icon layout-icon-hover'

  return (
    <header className='title-header'>
      <div className='hamburger-menu' onClick={sidebarToggle}>
        <svg fill='#B1B9D8' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="35px" height="35px" viewBox="0 0 92 92" enable-background="new 0 0 92 92">
        <path id="XMLID_101_" d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
          c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
          H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"/>
        </svg>
      </div>

      <div className='flex items-center justify-between text-textColor'><img src={arrow} alt="" /> <span className='text-3xl ml-[5px] '>{title}</span></div>

      <div className='hidden lg:flex items-center justify-between border-extraDark border-solid border-[3px] rounded-[10px] overflow-hidden'>
        <div 
          className={gridStyle} 
          onClick={() => setLayoutMode('grid')}
        >
          <img src={four} alt="" className='w-full h-full' />
        </div>
        <div 
          className={listStyle} 
          onClick={() => setLayoutMode('list')}
        >
          <img src={two} alt="" className='w-full h-full'/>
        </div>
      </div>
    </header>
  )
}

export default ContentHeader;
