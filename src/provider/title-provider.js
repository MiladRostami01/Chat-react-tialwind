import react, { useState ,createContext, useContext } from 'react'

const titleContext = createContext()
const setTitleContext = createContext()

function TitleProvider({children}) {
  const [title, setTitle] = useState('Groups')

  return (
    <titleContext.Provider value={title}>
      <setTitleContext.Provider value={setTitle}>
        {children}
      </setTitleContext.Provider>
    </titleContext.Provider>
  )
}

function useTitle () {
  return useContext(titleContext)
}

function useSetTitle () {
  return useContext(setTitleContext)
}

export {useTitle, useSetTitle}
export default TitleProvider