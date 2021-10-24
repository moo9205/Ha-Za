import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CounterContainer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/mypage" component={Mypage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
