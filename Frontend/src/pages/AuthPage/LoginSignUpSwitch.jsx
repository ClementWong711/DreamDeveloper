import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginSignUpSwitch = () => {
    const [sign, setSign] = useState("SignIn");
    const [user, setUser] = useState(undefined);
    const changeSign = () => {
        if (sign === "SignIn") {
            setSign("SignUp");
        } else {
            setSign("SignIn");
        }
    }

    return (
        <div>
            <div className="w-full flex justify-center">
                <label className="inline-flex items-center p-2 rounded-md cursor-pointer">
                    <input id="SignOnUp" type="checkbox" className="hidden peer" />
                    <span className="px-4 py-2 rounded-l-md dark:bg-[#00f9ff]  peer-checked:dark:bg-[#0e0e0e] disable-text-selection" onClick={changeSign}>Sign In</span>
                    <span className="px-4 py-2 rounded-r-md dark:bg-[#0e0e0e] peer-checked:bg-[#00f9ff] disable-text-selection" onClick={changeSign}>Sign Up</span>
                </label>
            </div>
            <div className={`w-[400px] h-[450px] relative preserve-3d ${sign === "SignIn" ? `` : `dream-rotate-y-180`} duration-700`}>
                {sign === "SignUp" ? <Signup  onAuth={(user) => setUser(user)} /> : <Login user={user} /> }
            </div>
        </div>
    );
}

export default LoginSignUpSwitch;