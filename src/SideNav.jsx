import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import { AiOutlineLogout, AiOutlinePicture, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";

import { Link } from "react-router-dom";


const SideNav = () => {
    const [open, setOpen] = useState(false);
    
    const menus = [
        { name: "Dashboard", link: '/', icon: AiOutlineHome},
        { name: "Chat", link: '/chat', icon: BsChat},
        { name: "Post", link: '/post', icon: AiOutlinePicture},
        { name: "Search", link: '/search', icon: AiOutlineSearch},
        { name: "Logout", link: '/logout', icon: AiOutlineLogout}
    ]

    return (
        <nav className={`text-white bg-[#0e0e0e] h-full ${open ? 'w-60' : 'w-16'} duration-500 m-3 px-4 rounded-xl pb-10`}>
            <div className="py-3 flex justify-end">
                <HiMenu
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {
                    menus.map((menu, i) => (
                        <Link 
                            to={menu.link} 
                            key={i} 
                            className="flex border-b-2 border-[#0e0e0e] items-center text-sm gap-3.5 font-medium p-2 hover:border-b-2 hover:border-[#6138ff] duration-300"
                        >   
                            <div>{React.createElement(menu.icon, {size: "20" })}</div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`
                                }}
                                className={`whitespace-pre duration-500 
                                ${!open && 'opacity-0 translate-x-28 overflow-hidden'
                                    }`}>
                                {menu.name}
                            </h2>
                        </Link>
                    ))
                }

            </div>
        </nav>
    );
}

export default SideNav;