import { useState } from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";
import useFetch from "../../Hooks/useFetch";

const UserProfilePage = () => {
    const { user } = useAuthContext()
    const userData = useFetch(`/user/${user.unique_name}`)
    const [nick_name, setUsername] = useState(null)
    const [unique_name, setUniquename] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cfmpassword, setCFMPassword] = useState(null)

    const oldNickName = (userData !== null) ? userData[0].nick_name : ""
    const oldUniqueName = (userData !== null) ? userData[0].unique_name : ""
    const oldEmail = (userData !== null) ? userData[0].email : ""
    const oldPassword = (userData !== null) ? userData[0].password : ""

    const handleUpdateProfile = () => {
        setUsername(oldNickName)
        setUniquename(oldUniqueName)
        setEmail(oldEmail)
    }
    const handleSave = (e) => {
        e.preventDefault()

        setUsername(null)
        setUniquename(null)
        setEmail(null)
    }

    return (
        <div className="w-[500px]">
            <h1 className="text-xl py-5">User Profile</h1>
            <div className="bg-[#0e0e0e] rounded-lg p-8 h-full w-full">

                <div className="flex py-2 justify-between">
                    <label className="text-gray-400">Username: </label>
                    {
                        (nick_name == null) ?
                            oldNickName :
                            <input
                                className="bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none text-center"
                                type="text"
                                onChange={(e)=>setUsername(e.target.value)}
                                value={nick_name}
                            />
                    }
                </div>
                <div className="flex py-2 justify-between">
                    <label className="text-gray-400">Unique Username: </label>
                    {
                        (unique_name == null) ?
                            oldUniqueName :
                            <input
                                className="bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none text-center"
                                type="text"
                                onChange={(e)=>setUniquename(e.target.value)}
                                value={unique_name}
                            />
                    }
                </div>
                <div className="flex py-2 justify-between">
                    <label className="text-gray-400">Email: </label>
                    {
                        (email == null) ?
                            oldEmail :
                            <input
                                className="bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none text-center w-[200px]"
                                type="text"
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                            />
                    }
                </div>
                <div className="hidden">
                    <div className="flex py-2 justify-between">
                        <label className="text-gray-400">Email: </label>
                        {
                            (email == null) ?
                                oldEmail :
                                <input
                                    className="bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none text-center w-[200px]"
                                    type="text"
                                    value={oldEmail}
                                />
                        }
                    </div>
                    <div className="flex py-2 justify-between">
                        <label className="text-gray-400">Email: </label>
                        {
                            (email == null) ?
                                oldEmail :
                                <input
                                    className="bg-[#0e0e0e] border-b-2 border-[#00f9ff] focus:border-[#1a1084] duration-300 outline-none text-center w-[200px]"
                                    type="text"
                                    value={oldEmail}
                                />
                        }
                    </div>
                </div>

                <div className="flex justify-center pt-4">
                    {
                        (nick_name == null) ?
                            <div>
                                <button
                                    className="bg-[#1a1084] rounded-lg p-3 mr-4"
                                    onClick={handleUpdateProfile}
                                >Update Profile</button>
                                <button className="bg-[#1a1084] rounded-lg p-3">Update Password</button>
                            </div>:
                            <button className="bg-[#1a1084] rounded-lg p-3 pl-6 pr-6"
                                onClick={handleSave}
                            >Save Profile</button>
                    }
                </div>
            </div>
        </div>

    );
}

export default UserProfilePage;