import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #3C9AF0;
  color: #fff;
  
  @media (max-width: 500px){
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h4>@dscarrostop</h4>
        <h4>Rua da pipoca, 150</h4>
      </FooterContainer>
    </>
  );
};

export { Footer };
