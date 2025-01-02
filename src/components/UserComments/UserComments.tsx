import styled from "styled-components";
import { UserCommentCard } from "../UserCommentCard";

const UserCommentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #c8c8c8;
  padding: 40px;

  h2 {
    font-size: 4vmin;
    color: #5e5e5e;
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 6vmin;
    }
  }
`;

const UserCommentsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const UserComments = () => {
  return (
    <>
      <UserCommentsContainer>
        <h2> O que estão dizendo?</h2>
        <UserCommentsCardsContainer>
          <UserCommentCard />
          <UserCommentCard />
          <UserCommentCard />
          <UserCommentCard />
          <UserCommentCard />
        </UserCommentsCardsContainer>
      </UserCommentsContainer>
    </>
  );
};

export { UserComments };
