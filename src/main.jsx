import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import home from "./home/home.jsx"
import tudo from './tudo/tudo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes> 
      <Route path='/home' element={<home/>}></Route>
      <Route path='/tudo' element={<tudo/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
