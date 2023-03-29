
const Signup = () => {
    return ( 
        <form className="absolute w-full h-full bg-[#0e0e0e] p-8 rounded-lg dream-rotate-y-180 backface-hidden">
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Username</label>
                <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" type="text" />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Email</label>
                <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" type="email" />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Password</label>
                <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" type="password" />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Confirm Password</label>
                <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" type="password" />
            </div>
            <button className="w-full text-center my-5 py-2 bg-black hover:shadow-lg hover:shadow-black duration-300" type="submit">Register</button>
        </form>
    );
}

export default Signup;