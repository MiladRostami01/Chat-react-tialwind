import React from 'react'
import { useLayoutMode } from '../../provider/layoutMode-provider'
import ToggleBtn from './../toggleButton/ToggleButton'

function SettingOption() {
  const layoutMode = useLayoutMode()

  const gridStyle = 'bg-extraDark md:flex md:flex-row md:items-center md:justify-between md:h-[150px] rounded-lg'
  const listStyle = 'bg-extraDark md:flex md:flex-row md:items-center md:justify-between md:h-[110px] md:p-5 rounded-lg'
  const layoutStyle = layoutMode === 'grid' ? gridStyle : listStyle
  const smStyle = 'bg-extraDark flex flex-row items-center justify-between h-[110px] p-5'

  return (
    <div className={`${layoutStyle} ${smStyle}`}>
      <div>
        <h2 className='text-2xl font-semibold text-textColor'>Title</h2>
        <p className='text-lg text-textColor'>description</p>
      </div>
      <ToggleBtn />
    </div>
  )
}

export default SettingOption