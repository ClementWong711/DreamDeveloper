import './App.css';
import Footer from './Footer';
import SideNav from './SideNav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideNav />
      <div className="flex gap-6">
        <div className='content'>
          <Switch>
            <Route exact path="/" >

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
