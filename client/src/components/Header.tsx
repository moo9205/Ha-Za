import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { userLogout } from '../modules/user';
import axios from 'axios';
import { Colors } from '../components/utils/_var';
import logo from '../images/logo.png';

const HeaderWrapper = styled.div`
  button:focus {
    outline: none;
  }
  .header {
    display: grid;
    height: 3.5rem;
    width: 100vw;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(150, 150, 150, 0.2);
    grid-template-areas: 'logo pages';
    grid-template-columns: 50% 50%;
  }
  .header-container-1 {
    grid-area: logo;
    text-align: left;
    padding-left: 1rem;
    max-width: 8rem;
    /* background-color: lightsteelblue; */
  }
  .header-container-2 {
    grid-area: pages;
    justify-self: end;
    padding-right: 1rem;
    margin-top: 0rem;
    /* background-color: lavenderblush; */
  }
  a {
    text-decoration: none;
  }
  .logo {
    font-size: 1.2rem;
  }
  .logo-image {
    padding-top: 0.1rem;
    width: 5.75rem;
  }
  .btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .login,
  .logout,
  .signup,
  .mypage {
    font-size: 0.85rem;
    font-family: 'Noto Sans KR', sans-serif;
    padding-left: 0.5rem;
    color: ${Colors.gray};
  }
  button:hover {
    color: ${Colors.green};
  }
  .display-none {
    display: none;
  }
`;

type HeaderProp = {
  login: () => void;
  signup: () => void;
  modal: () => void;
  handleMessage: (a: string) => void;
  handleNotice: (a: boolean) => void;
};

const Header = ({ login, signup, modal, handleMessage, handleNotice }: HeaderProp) => {
  const isLogin = useSelector((state: RootState) => state.user).token;
  const isExpired = useSelector((state: RootState) => state.user).isExpired;
  console.log(isLogin);
  const dispatch = useDispatch();

  const handleLogoutRequest = () => {
    const token = isLogin;

    if (isExpired) {
      modal();
    } else {
      // JUST FOR TESTING PURPOSES
      dispatch(userLogout());
      localStorage.clear();
      handleNotice(true);
      handleMessage('로그아웃 성공!');

      /*
      axios
        .post(process.env.REACT_APP_API_URL + '/logout', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        .then(() => {
          dispatch(userLogout());
          localStorage.clear();
          handleNotice(true);
          handleMessage('로그아웃 성공!');
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
      */
    }
  };

  return (
    <HeaderWrapper>
      <div className="header">
        <div className="header-container-1">
          <Link to="/">
            <div className="logo">
              <img src={logo} className="logo-image" alt="logo_img" />
            </div>
          </Link>
        </div>
        <div className="header-container-2">
          {!isLogin ? (
            <button className="btn login" onClick={login}>
              로그인
            </button>
          ) : (
            <button className="btn logout" onClick={handleLogoutRequest}>
              로그아웃
            </button>
          )}
          {!isLogin ? (
            <button className="btn signup" onClick={signup}>
              회원가입
            </button>
          ) : (
            <Link to="/mypage">
              <button className="btn mypage">마이페이지</button>
            </Link>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
