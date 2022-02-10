import react, {useState, createContext, useContext} from 'react'

const layoutModeContext = createContext()
const setlayoutModeContext = createContext()

function LayoutModeProvider ({children}) {
  const [layoutMode, setLayoutMode] = useState('grid')

  return (
    <layoutModeContext.Provider value={layoutMode}>
      <setlayoutModeContext.Provider value={setLayoutMode}>
        {children}
      </setlayoutModeContext.Provider>
    </layoutModeContext.Provider>
  )
}

function useLayoutMode () {
  return useContext(layoutModeContext)
}

function useSetLayoutMode () {
  return useContext(setlayoutModeContext)
}

export {useLayoutMode, useSetLayoutMode}
export default LayoutModeProvider

