/* Left me logo image hai
   Right me menu icon hai
  Flexbox se dono ko ek line me arrange kiya gaya hai 
  Now, use o attributes
  mx/my=>margin x/y-axis
  relative → position relative set karta hai (agar future me dropdown banana ho to use hoga).
  py-2/pb-5 → vertical padding/padding-bottom (space neeche).
  justify-between → dono elements ko left aur right corner me alag karta hai.
  items-center → vertically center align karta hai 
  group → Tailwind ka class (hover group styling ke liye).
  max-h-5 → menu icon ki max height 5 units tak rakhta hai.
  cursor-pointer → jab hover karoge to pointer cursor aayega (clickable feel)
  
  */
import React from "react";
import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SideBar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : " "
      }`}
    >
      <div className="p-5">
        <div className=" flex justify-between items-center ">
          <img src={assets.logo} alt="logo" className="max-w-40" />
          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-h-5 cursor-pointer"
            />
            <div
              className=" absolute top-full right-0 bg-gray-600 text-white p-2 rounded-md
               border border-gray-500 text-gray-100 hidden group-hover:block"
            >
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                EditProfile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p className="cursor-pointer text-auto">LogOut</p>
            </div>
          </div>
        </div>
          <div className="bg-[#282142] rounded-full flex items-center  gap-2 py-3 px-4 mt-5">
            <img src={assets.search_icon} alt="search" className="w-3" />
            <input
              type="text"
              className="bg-transparent outline-none border-none text-white text-xs placeholder-[#c8c8c8] flex-2"
              placeholder="Search User..."
            />
          </div>
        <div className="flex flex-col">
          {userDummyData.map((user,index) => (
          <div
          onClick={() => setSelectedUser(user)}
          key={index} 
          className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${selectedUser?._id === user._id ? "bg-[#282142]/50" : "" }`}>
            <img src={ user?.profilePic || assets.avatar_icon } alt="" 
          className=" w-[35px] aspect-[1/1] rounded-full "
          />
          <div className="flex flex-col leading-5">
            <p>{user.fullName}
              {
                index < 3
                ? <span className="text-green-400 text-xs "> Online </span>
                : <span className="text-neutral-400 text-xs "> Offline </span>

              }
            </p>
            </div>
            {index > 2 && <p className="absolute top-4 right-4 text-xs w-5 flex justify-center items-center rounded-full bg-violet-500/50">{index}</p>  }
          </div>
          ) ) }
        </div>
      </div>
    </div>
  );
};

export default SideBar;
