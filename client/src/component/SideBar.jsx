import React from 'react'
import assets from '../assets/assets'

const SideBar = ({selectedUser,setSelectedUser}) => {
  return (
    /* Left me logo image hai
       Right me menu icon hai
      Flexbox se dono ko ek line me arrange kiya gaya hai 
      Now, use o attributes
      relative → position relative set karta hai (agar future me dropdown banana ho to use hoga).
      py-2/pb-5 → vertical padding/padding-bottom (space neeche).
      justify-between → dono elements ko left aur right corner me alag karta hai.
      items-center → vertically center align karta hai 
      group → Tailwind ka class (hover group styling ke liye).
      max-h-5 → menu icon ki max height 5 units tak rakhta hai.
      cursor-pointer → jab hover karoge to pointer cursor aayega (clickable feel)
      
      */
    <div>
      <div className='pb-5'>
        <div className=' flex justify-between items-center '>
          <img src={assets.logo} alt="logo" className='max-w-40' />
           <div className='relative py-2 group'>
  <img src={assets.menu_icon} alt="logo" className='max-h-5 cursor-pointer' />
         </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar