import React from 'react'
/* Rembere That when ur rendering and bringing something check import file first
./=>current folder(same folder operation )
../=>parent folder(go open up more like order folder to perform when your on another folder,another folder perform on another folder)
../../=>grand parent folder(Go up two folders) */
import SideBar from '../component/SideBar'
import ChatContainer from '../component/ChatContainer'  
import RightSideBar from '../component/rightSideBar'
export const Homepage = () => {
  return (
    // px=>x axis padding on left/right;h=>height
    // py=>y axis padding on top/bottom;w=>width

    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%] '>
        <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative'>
          <SideBar/>
          <ChatContainer/>
          <RightSideBar/>

         
        </div>
        
    </div>
  )
}
export default Homepage