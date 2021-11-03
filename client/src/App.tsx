import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

const AppWrapper = styled.div`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .App {
    font-family: 'Noto Sans KR', sans-serif;
  }
  .space {
    margin-bottom: 3rem;
  }
`;

const App: React.FC = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState('');
  const [openNotice, setOpenNotice] = useState(false);

  const handleLoginModalOpen = () => {
    setOpenLogin(true);
  };
  const handleSignupModalOpen = () => {
    setOpenSignup(true);
  };
  const handleLoginModalClose = () => {
    setOpenLogin(false);
  };
  const handleSignupModalClose = () => {
    setOpenSignup(false);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleMessage = (msg: string) => {
    setMessage(msg);
  };

  const handleNotice = (boolean: boolean) => {
    setOpenNotice(boolean);
  };

  return (
    <BrowserRouter>
      <AppWrapper>
        <div className="App">
          <Header
            login={handleLoginModalOpen}
            signup={handleSignupModalOpen}
            modal={handleModalOpen}
            handleMessage={handleMessage}
            handleNotice={handleNotice}
          />
          {/* <div className="space" /> */}
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/mypage" component={Mypage} />
          </Switch>
          <Footer />
          {openSignup ? (
            <Signup
              handleModal={handleSignupModalClose}
              handleMessage={handleMessage}
              handleNotice={handleNotice}
            />
          ) : null}
          {openLogin ? (
            <Login
              signup={handleSignupModalOpen}
              handleModal={handleLoginModalClose}
              handleMessage={handleMessage}
              handleNotice={handleNotice}
            />
          ) : null}
        </div>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
