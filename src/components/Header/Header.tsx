import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #3c9af0;
  padding: 40px;

  @media (max-width: 500px){
    font-size: 4vmin;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <h1>DSCarrosTop</h1>
      </HeaderContainer>
    </>
  );
};

export { Header };
