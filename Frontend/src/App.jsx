import Footer from './Components/Footer'
import SideNav from './Components/SideNav'
import UserBox from './Components/UserBox'
import ChatPage from './pages/ChatPage/ChatPage'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Signup from './pages/AuthPage/Signup'
import Login from './pages/AuthPage/Login'
import { useAuthContext } from './Hooks/useAuthContext'


function App() {
  const { user } = useAuthContext()

  return (
    <Router>
      {user && (
        <>
          <div className="flex flex-col justify-center h-full fixed">
            <SideNav />
          </div>
          <div className="flex w-full justify-end fixed">
            <UserBox />
          </div>
        </>
      )}
      <div className="h-screen w-screen flex justify-center items-center text-white">
        <Switch>
          <Route path="/login" >
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>
          <Route path="/signup" >
            {!user ? <Signup /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/" >
            {user ? <h1>Home</h1> : <Redirect to="/login" />}
          </Route>
          <Route path="/chat" >
            {user ? <ChatPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/post">
            {user ? <h1>IG post</h1> : <Redirect to="/login" />}
          </Route>
          <Route path="/search" >
            {user ? <h1>Search</h1>: <Redirect to="/login" />}
          </Route>
          <Route path="/logout" >
            {user ? <h1>Logout</h1> : <Redirect to="/login" />}   
          </Route>

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
