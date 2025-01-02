import styled from "styled-components";
import AudiCardImg from "../../../public/AudiCardImg.png";

const ProductCardContainer = styled.div`
  width: 100%;
  border: 1px solid #3c9af0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 40px;

  h3 {
    color: #5e5e5e;
  }

  @media (max-width: 768px) {
    img {
      width: 50%;
    }
  }
`;

const ProductCard = () => {
  return (
    <>
      <ProductCardContainer>
        <img src={AudiCardImg} />
        <h3>Audi TT 2024</h3>
      </ProductCardContainer>
    </>
  );
};

export { ProductCard };
