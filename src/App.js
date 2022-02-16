import react from "react"
import Layout from "./layout/Layout"
import { Routes, Route } from "react-router-dom"
import LayoutModeProvider from "./provider/layoutMode-provider"

import Groups from "./pages/Groups"
import Chat from "./pages/Chat"
import Save from "./pages/Save"
import Setting from "./pages/Setting"

function App() {
  return (
    <LayoutModeProvider>
      <Layout>
        <Routes>
          <Route path="chat" element={<Chat />} />
          <Route path="/" element={<Groups />} />
          <Route path="save/*" element={<Save />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </Layout>
    </LayoutModeProvider>
  )
}

export default App
