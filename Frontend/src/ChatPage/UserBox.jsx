import React, {useEffect} from "react";
import { FaRegUserCircle } from "react-icons/fa";

const UserBox = () => {

    //useEffect(() => {
    //    fetch("http://localhost:3000/user")
    //        .then(res => {
    //            return res.json();
    //        })
    //        .then(data => {
    //            console.log(data)
    //        })
    //},[])

    const user = "Clement";

    return (
        <div className="bg-[#0e0e0e] text-white m-5 px-6 p-4 flex space-x-4 rounded-xl"><span className="text-xl">{user}</span><span className="flex justify-item-center items-center">{React.createElement(FaRegUserCircle, {size: 20})}</span></div>
    );
}

export default UserBox;