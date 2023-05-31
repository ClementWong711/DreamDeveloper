
import Footer from '../src/Components/Footer';
import LoginSignUpSwitch from "./LoginSignUpSwitch";
import "./App.css";



function App() {
    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <LoginSignUpSwitch />
            <Footer />
        </div>
    );
}

export default App;