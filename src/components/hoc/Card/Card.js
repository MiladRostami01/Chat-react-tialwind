import React from 'react';
import {useLayoutMode} from './../../../provider/layoutMode-provider'

function Card({children}) {
  const layoutMode = useLayoutMode()

  const gridStyle = 'md:flex md:flex-col md:items-center md:justify-center md:h-[210px]'
  const listStyle = 'md:flex md:flex-row md:items-center md:justify-start md:h-[110px] md:p-5'
  const layoutStyle = layoutMode === 'grid' ? gridStyle : listStyle
  const smStyle = 'flex flex-row items-center justify-start h-[110px] p-5'

  return (
  <div className={`bg-extraDark rounded-[10px] 
    ${layoutStyle} ${smStyle}
   `}
  >
    {children}
  </div>
  )
}

export default Card;
