import Footer from './Components/Footer';
import LoginSignUpSwitch from './pages/AuthPage/LoginSignUpSwitch';
import SideNav from './Components/SideNav';
import ChatPage from './pages/ChatPage/ChatPage';
import UserBox from './pages/ChatPage/UserBox';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="flex flex-col justify-center h-full fixed">
        <SideNav />
      </div>
      <div className="flex w-full justify-end fixed">
        <UserBox/>
      </div>
      <div className="h-screen w-screen flex justify-center items-center text-white">
        <Switch>
          <Route exact path="/" >
            <h1>Home</h1>
          </Route>
          <Route path="/login">
            <LoginSignUpSwitch/>
          </Route>
          <Route path="/chat">
            <ChatPage/>
          </Route>
          <Route path="/post">
            <h1>IG post</h1>
          </Route>
          <Route path="/search">
            <h1>Search</h1>
          </Route>
          <Route path="/logout">
            <h1>Logout</h1>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
