import React from 'react'
import assets, { messagesDummyData } from '../assets/assets'

 const ChatContainer = ({ selectedUser, setSelectedUser })=> 
  {
  return selectedUser ? 
  (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex item-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" srcset=""  className=' w-8 rounded-full'/>
        <p className=' flex-1 text-lg text-red flex item-center gap-2'>martin jhonson</p>
        <span className='w-2 h-2 rounded-full bg-green-500'></span>
        <img  onClick={() => setSelectedUser(null)} src={assets.arrow_icon} alt="" srcset=""className='md:hidden max-w-7' />
       <img src={assets.help_icon} alt="" srcset="" className='max-md:hidden max-w-5' />
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3">
{messagesDummyData.map((msg,index) => (
  <div key={index} className={`flex items-end gap-2 justify-end gap-2 ${msg.sender !== "680f50e4f10f3cd28382ecf9"&& 'flex-row-reverse'}`}>
(msg.image ?(
  <img src={assets.image} alt="" srcset="" className='w-10 h-10 object-cover rounded-full' />
):(
  <p className={``}>{msg.text}</p>
))
  </div>
  
))}
      </div>
      </div>
      </div>
     
  ) : 
  (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img src={assets.logo_icon} alt="" className='max-w-16' />
      <p className='text-large font-medium text-white' > Chat,Anytime and Anywhere</p>
    </div>
  )

       }

export default ChatContainer