
import Footer from '../src/Components/Footer';
// import LoginSignUpSwitch from "./LoginSignUpSwitch";
import "./App.css";
import SideNav from './ChatPage/SideNav';



function App() {
    return (
        <div className="flex flex-col justify-center h-full fixed">
            <SideNav />
        </div>
        /* <div className="min-h-screen flex items-center justify-center text-white">
            <LoginSignUpSwitch />
            <Footer />
        </div> */
    );
}

export default App;