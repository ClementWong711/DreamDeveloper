import './App.css';
import Footer from '../src/Components/Footer';
import SideNav from './ChatPage/SideNav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignUpSwitch from './LoginSignUpSwitch';
import Chatroom from './ChatPage/ChatPage';
import UserBox from './ChatPage/UserBox';

function App() {
  
  return (
    <Router>
      <div className="flex flex-col justify-center h-full fixed">
        <SideNav />
      </div>
      <div className="flex w-full justify-end fixed">
        <UserBox/>
      </div>
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className='content'>
          <Switch>
            <Route exact path="/" >
              <LoginSignUpSwitch/>
            </Route>
            <Route path="/chat">
              <Chatroom/>
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
        
      </div>
      <Footer />
    </Router>

  );
}

export default App;
