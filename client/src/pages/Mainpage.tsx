import styled from 'styled-components';

export const MainpageWrapper = styled.div`
  .main {
    display: flex;
    min-height: calc(100vh - 170px);
  }
`;

const Mainpage = () => {
  return (
    <MainpageWrapper>
      <div className="main"></div>
    </MainpageWrapper>
  );
};

export default Mainpage;
