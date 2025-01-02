import styled from "styled-components";

const UserCommentCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  border: 1px solid #3C9AF0;
  border-radius: 10px;
  background-color: #fff;
  color: #3C9AF0;
  font-size: 2.2vmin;

   @media (max-width: 500px) {
    width: 100%;
    font-size: 3.5vmin;
  }
`;

const UserCommentCard = () => {
  return (
    <>
      <UserCommentCardContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi enim eum</p>
      </UserCommentCardContainer>
    </>
  );
};

export { UserCommentCard };
