
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home'
import Navbar from './components/Navbar';

import useAuthContext from './hooks/useAuthContext';

function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div className="app">
      {/* react gaurding */}
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to='/login'/>}
              {user && <Home/>}
            </Route>
            <Route path="/login">
              {user && <Redirect to='/'/>}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {!user && <SignUp />}
              {user && <Redirect to='/'/>}
            </Route>
          </Switch>
        </BrowserRouter>
        )}
    </div>
  );
}

export default App;
