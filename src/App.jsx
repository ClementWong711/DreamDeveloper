import './App.css';
import Footer from './Footer';
import SideNav from './SideNav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App flex gap-6">
        <SideNav />
        <div className='content'>
          <Switch>
            <Route exact path="/" >
              <h1>Dashboard</h1>
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
        <Footer />
      </div>
    </Router>

  );
}

export default App;
