import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../components/utils/_var';
import { Alertbox, InputField } from '../components/UserComponents';

export const MypageView = styled.div`
  margin: auto;
  padding-top: 0.7rem;
  box-sizing: border-box;
  width: 19rem;
  height: 15rem;
  background-color: white;
  position: relative;
  text-align: center;

  input:disabled {
    background: ${Colors.lightGray};
    color: ${Colors.gray};
  }
`;

export const MypageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MypageButton = styled.button`
  cursor: pointer;
  width: 5.8rem;
  margin: 0.3rem 0.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 7px;
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  font-size: 0.85rem;
  color: white;
  :hover {
    background-color: ${Colors.green};
    border-color: ${Colors.green};
  }
  &:last-of-type {
    border: 2px solid ${Colors.darkGray};
    background-color: ${Colors.darkGray};
    color: white;
  }
  &:last-of-type:hover {
    background-color: white;
    color: ${Colors.darkGray};
    border: 2px solid ${Colors.darkGray};
  }
`;

const Mypage: React.FC = () => {
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkRetypePassword, setCheckRetypePassword] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [userInfo, setUserInfo] = useState({
    password: ''
  });

  const handleInputValue = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const isValidPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    if (regExp.test(e.target.value)) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '' && e.target.value === userInfo.password) {
      setCheckRetypePassword(true);
    } else {
      setCheckRetypePassword(false);
    }
  };

  const inputCheck = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputValue(key)(e);
    if (key === 'password') {
      isValidPassword(e);
    }
  };

  const handleEditRequest = () => {
    if (userInfo.password === '') {
      setErrorMsg('수정할 비밀번호를 입력해주세요');
    } else if (checkPassword !== true) {
      setErrorMsg('비밀번호 형식을 확인해주세요');
    } else if (checkRetypePassword !== true) {
      setErrorMsg('비밀번호가 일치하지 않습니다');
    } else {
      setErrorMsg('');
    }
  };

  const handleWithdrawalRequest = () => {
    alert('회원탈퇴');
  };

  return (
    <MypageView>
      <MypageInputContainer>
        <InputField disabled placeholder="아이디" />
        <InputField type="password" onChange={inputCheck('password')} placeholder="비밀번호" />
        <InputField type="password" onChange={handleCheckPassword} placeholder="비밀번호 재확인" />
      </MypageInputContainer>
      <MypageButton onClick={handleEditRequest} color={Colors.lightGreen}>
        정보수정
      </MypageButton>
      <MypageButton onClick={handleWithdrawalRequest} color={Colors.darkGray}>
        회원탈퇴
      </MypageButton>
      <Alertbox>{errorMsg}</Alertbox>
    </MypageView>
  );
};

export default Mypage;
