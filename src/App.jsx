import './App.css';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <SideNav />
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className='content'>
          <Switch>
            <Route exact path="/" >
              <Login />
            </Route>
            <Route path="/chat">
              <h1>Chatroom</h1>
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
