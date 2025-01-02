import styled from "styled-components";
import { ProductCard } from "../ProductCard";

const CatalogContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px;

  h2 {
    color: #5e5e5e;
    font-size: 5vmin;
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 500px){
    width: 100%;

    h2{
    font-size: 8vmin;
    }
  }
`;

const ProductCardsListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Catalog = () => {
  return (
    <>
      <CatalogContainer>
        <h2>Venha nos visitar</h2>
        <ProductCardsListContainer>
          <ProductCard />
          <ProductCard />
        </ProductCardsListContainer>
      </CatalogContainer>
    </>
  );
};

export { Catalog };
