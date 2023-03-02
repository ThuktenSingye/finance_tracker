
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home'
import Navbar from './components/Navbar';

import useAuthContext from './hooks/useAuthContext';

function App() {
  const {authIsReady} = useAuthContext()

  return (
    <div className="app">
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
          </Switch>
        </BrowserRouter>
        )}
    </div>
  );
}

export default App;
