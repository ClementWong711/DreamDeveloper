import { useState } from 'react'
import { useAuthContext } from '../../Hooks/useAuthContext'

const Signup = () => {
    const { dispatch } = useAuthContext()
    const [nick_name, setUsername] = useState('')
    const [unique_name, setUniquename] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newUser = {email,nick_name,unique_name,password}
        const response = await fetch('/user/signup', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setUsername('')
            setUniquename('')
            setEmail('')
            setPassword('')
            console.log('new user created!')
            dispatch({type: 'SIGNUP', payload: json})
        }
    }

    return ( 
        <form className="absolute w-full h-full bg-[#0e0e0e] p-8 rounded-lg dream-rotate-y-180 backface-hidden" onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Username</label>
                <input 
                    className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" 
                    type="text" 
                    onChange={(e) => setUsername(e.target.value)}
                    value={nick_name}
                />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Unique Username</label>
                <input 
                    className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" 
                    type="text" 
                    onChange={(e) => setUniquename(e.target.value)}
                    value={unique_name}
                />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Email</label>
                <input 
                    className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="flex flex-col py-2">
                <label className="text-gray-400">Password</label>
                <input 
                    className="p-2 bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#9c83ff] duration-300 outline-none" 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
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