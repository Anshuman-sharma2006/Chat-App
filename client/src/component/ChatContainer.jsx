
import React from 'react'
import assets, { messagesDummyData, userDummyData } from '../assets/assets'

const loggedInUserId = "680f50e4f10f3cd28382ecf9";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  if (!selectedUser) {
    return (
      <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
        <img src={assets.logo_icon} alt="logo" className='w-16' />
        <p className='text-large font-medium text-white'> Chat, Anytime and Anywhere</p>
      </div>
    )
  }

  // Helper to get user info by _id
  const getUserById = (id) => {
    return userDummyData.find(user => user._id === id) || {};
  }

  // Filter messages between loggedInUserId and selectedUser._id
  const chatMessages = messagesDummyData.filter(
    msg =>
      (msg.senderId === loggedInUserId && msg.receiverId === selectedUser._id) ||
      (msg.senderId === selectedUser._id && msg.receiverId === loggedInUserId)
  );

  return (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={selectedUser.profilePic || assets.avatar_icon} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-red flex items-center gap-2'>{selectedUser.fullName}</p>
        <span className='w-2 h-2 rounded-full bg-green-500'></span>
        <img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} alt="" className='md:hidden max-w-7' />
        <img src={assets.help_icon} alt="" className='max-md:hidden w-5' />
      </div>
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3">
        {chatMessages.map((msg, index) => {
          const isSentByLoggedInUser = msg.senderId === loggedInUserId;
          const sender = getUserById(msg.senderId);
          return (
            <div
              key={index}
              className={`flex items-end gap-2 justify-${isSentByLoggedInUser ? "end" : "start"} ${!isSentByLoggedInUser ? "flex-row-reverse" : ""}`}
            >
              {msg.image ? (
                <img
                  src={msg.image}
                  alt=""
                  className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8'
                />
              ) : (
                <p
                  className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                    isSentByLoggedInUser ? 'rounded-br-none' : 'rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </p>
              )}

              <div className="text-center text-xs">
                <img
                  src={sender.profilePic || assets.avatar_icon}
                  alt=""
                  className='w-7 rounded-full'
                />
                <p className='text-gray-500'>{new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
}

export default ChatContainer

