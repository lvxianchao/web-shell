import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from './App.tsx'
import Servers from "./pages/servers";
import Terminals from "./pages/terminals";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Servers/>} index/>
          <Route path="/terminals" element={<Terminals/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
