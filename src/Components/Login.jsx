import React from "react";

const Login = () => {
    return (
        <form className="w-[400px] bg-[#0e0e0e] p-8 rounded-lg">
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Username</label>
                <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#6138ff] focus:border-[#9c83ff] duration-300 outline-none" type="text" />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Password</label>
                <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#6138ff] focus:border-[#9c83ff] duration-300 outline-none" type="password" />
            </div>
            <div className="flex justify-between text-gray-400 text-xs">
                <p className="flex"><input className="mr-2" type="checkbox" />Remember Password</p>
                <p>Forget Password</p>
            </div>
            <button className="w-full text-center my-5 py-2 bg-black hover:shadow-lg hover:shadow-black duration-300" type="submit">Sign In</button>
        </form>
    );
}
export default Login;