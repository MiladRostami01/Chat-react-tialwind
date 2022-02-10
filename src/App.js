import react from 'react'
import Layout from "./layout/Layout";
import {Routes,Route} from "react-router-dom"

import TitleProvider from "./provider/title-provider";
import LayoutModeProvider from './provider/layoutMode-provider';

import Groups from "./pages/Groups";
import Chat from './pages/Chat'
import Save from './pages/Save'
import Setting from "./pages/Setting";



function App() {

  return (
    <LayoutModeProvider>
      <TitleProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Groups/>} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/save" element={<Save />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Layout>
      </TitleProvider>
    </LayoutModeProvider>
  );
}

export default App;
