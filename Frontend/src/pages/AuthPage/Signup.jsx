import { useState } from 'react'
import SwitchSignButton from '../../Components/SwitchSignButton'
import { useSignup } from '../../Hooks/useSignup'

const Signup = () => {
    const [nick_name, setUsername] = useState('')
    const [unique_name, setUniquename] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cfmpassword, setCFMPassword] = useState('')
    const { signup, isLoading, error } = useSignup()
    const [wrongPW, setWrongPW] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(cfmpassword === password){
            await signup(email, nick_name, unique_name, password)

            setUsername('')
            setUniquename('')
            setEmail('')
            setPassword('')
            setCFMPassword('')
        }else{
            setWrongPW(true)
        }
    }

    return ( 
        <div>
            <SwitchSignButton sign='signup'/>
            <form className="bg-[#0e0e0e] rounded-lg p-8 h-full w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Username</label>
                    <input 
                        className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none w-[400px]" 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={nick_name}
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Unique Username</label>
                    <input 
                        className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none" 
                        type="text" 
                        onChange={(e) => setUniquename(e.target.value)}
                        value={unique_name}
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Email</label>
                    <input 
                        className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none" 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                <div className="flex flex-col py-2">
                    <label className="text-gray-400">Confirm Password</label>
                    <input 
                        className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none" 
                        type="password"
                        onChange={(e) => setCFMPassword(e.target.value)}
                        value={cfmpassword}
                    />
                </div>
                <button disable={isLoading} className="w-full text-center my-5 py-2 bg-black hover:shadow-lg hover:shadow-black duration-300" type="submit">Register</button>
                {error && <div className='text-red-500'>* {error}</div>}
                {wrongPW && <div className='text-red-500'>* Incorrect Password</div>}
            </form>
        </div>
        
    );
}

export default Signup;