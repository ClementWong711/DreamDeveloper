import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";
import { Link } from "react-router-dom";


const UserBox = () => {
    const [option, setOption] = useState(false)
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const nickname = (user !== null)?(user.nick_name):''
    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <div 
                className="bg-[#0e0e0e] text-white mt-5 mr-5 px-6 p-4 flex space-x-4 rounded-xl cursor-pointer"
                onClick={() => {setOption(!option)}}
            >
                <span className="text-xl">{nickname}</span>
                <span className="flex justify-item-center items-center">{React.createElement(FaRegUserCircle, {size: 20})}</span>
            </div>
            <Link 
                className={`bg-[#0e0e0e] text-white m-3 mr-5 px-6 p-2 rounded-xl text-lg flex space-x-4 cursor-pointer duration-500 whitespace-pre
                            ${!option && 'opacity-0 -translate-y-10 overflow-hidden'
                        }`}
                onClick={handleLogout}
                to={'/login'}
            >
                <span>Logout</span><span className="flex justify-item-center items-center">{React.createElement(AiOutlineLogout, {size: 20})}</span>
            </Link>
        </div>
        
    );
}

export default UserBox;