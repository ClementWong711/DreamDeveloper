import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const SideNav = () => {
    const [open, setOpen] = useState(true);

    return ( 
        <nav className="flex gap-6">
            <div className={`text-white bg-[#0e0e0e] min-h-screen ${open ? 'w-72':'w-16'} duration-500 m-3 px-4 rounded-xl`}>
                <div className="py-3 flex justify-end">
                    <HiMenu 
                        size={26} 
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
        </nav>
    );
}

export default SideNav;