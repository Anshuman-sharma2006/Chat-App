// rafc- shortcut to create compenent bioler  plate as extension required is es7 react something

import React from 'react'
// React ko import karte hain taaki tu React ke features (like JSX) use kar sake.
import { Route, Routes } from 'react-router-dom'
/*
Routes(More like div for route)=> container(Of  Routes) contail multiple render pages routes
Route(Single Page)=>In This Single Page we can render single time(what elemtnt We have) by the given path

*/
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
export const App = () => {

  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] 
    bg-contain">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Profile" element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}
export default App;//Ye line App component ko default export kar rahi hai