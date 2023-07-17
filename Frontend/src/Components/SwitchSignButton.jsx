import { Link } from "react-router-dom";

const SwitchSignButton = ({setSign, sign}) => {

    return (
        <div className="w-full flex justify-center p-2">
            <Link
                to={'/login'} 
                className={`px-4 py-2 rounded-l-md ${(sign === 'login')?'bg-[#00f9ff]':'bg-[#0e0e0e]'}`}
            >Login</Link>
            <Link 
                to={'/signup'} 
                className={`px-4 py-2 rounded-r-md ${(sign === 'signup')?'bg-[#00f9ff]':'bg-[#0e0e0e]'}`}

            >Sign Up</Link>
        </div>
    );
}
export default SwitchSignButton;