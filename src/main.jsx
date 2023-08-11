import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes, Route, BrowseRouter} from "react-router-dom";

import App from './app'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowseRouter>
    <Routes>
      <Route path="app" element={App}></Route>
      <Route path='home' element={<Home/>}></Route>
    </Routes>
    </BrowseRouter>
  </React.StrictMode>,
)
