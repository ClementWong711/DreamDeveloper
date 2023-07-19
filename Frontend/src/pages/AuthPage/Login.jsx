import { useState } from "react";
import SwitchSignButton from "../../Components/SwitchSignButton";
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {
    const { login, isLoading, error } = useLogin()
    const [unique_name, setUniquename] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        await login(unique_name, password)
        setUniquename('')
        setPassword('')
    }

    return (
        <div>
            <SwitchSignButton sign='login'/>
            <form className="bg-[#0e0e0e] rounded-lg p-8 h-full w-full"  onSubmit={handleLogin}>
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Username</label>
                    <input 
                        className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none w-[400px]" 
                        type="text" 
                        onChange={(e) => setUniquename(e.target.value)}
                        value={unique_name}
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Password</label>
                    <input 
                        className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none" 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="flex justify-between text-gray-400 text-xs">
                    <p className="flex"><input className="mr-2" type="checkbox" />Remember Password</p>
                    <p>Forget Password</p>
                </div>
                <button disable={isLoading} className="w-full text-center my-5 py-2 bg-black hover:shadow-lg hover:shadow-black duration-300" type="submit">Sign In</button>
                {error && <div className='text-red-500'>* {error}</div>}
            </form>
        </div>
        

    );
}
export default Login;