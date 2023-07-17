import SwitchSignButton from "../../Components/SwitchSignButton";

const Login = () => {

    return (
        <div>
            <SwitchSignButton sign='login'/>
            <form className="bg-[#0e0e0e] rounded-lg p-8 h-full w-full"
            >
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Username</label>
                    <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none w-[400px]" type="text" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Password</label>
                    <input className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none" type="password" />
                </div>
                <div className="flex justify-between text-gray-400 text-xs">
                    <p className="flex"><input className="mr-2" type="checkbox" />Remember Password</p>
                    <p>Forget Password</p>
                </div>
                <button className="w-full text-center my-5 py-2 bg-black hover:shadow-lg hover:shadow-black duration-300" type="submit">Sign In</button>
            </form>
        </div>
        

    );
}
export default Login;