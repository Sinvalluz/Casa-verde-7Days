import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.4rem;
`;

export const Paragraph = styled.p`
  font-size: 2.2rem;
  opacity: 50%;
  margin-bottom: 1.2rem;
`;

export const Title = styled.h2`
  font-size: 8.2rem;
  font-weight: ${theme.font.weigth.bold};
  font-family: ${theme.font.family.elsie};
  margin-bottom: 0.5rem;

  @media screen and (max-width: 346px) {
    font-size: 5rem;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  place-content: center;
`;

export const Product = styled.div`
  display: flex;
  max-width: 380px;
  box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.06);
`;

export const Image = styled.img`
  width: 60%;

  @media screen and (max-width: 425px) {
    width: 40%;
  }
`;

export const ProductContent = styled.div`
  padding: 2.7rem 0;
`;

export const ProductTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: ${theme.font.weigth.bold};
  font-family: ${theme.font.family.elsie};
  margin-bottom: 0.8rem;
`;

export const Price = styled.p`
  font-size: 1.6rem;
  opacity: 50%;
  margin-bottom: 2.4rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.colors.butoon};
  border: none;
  background: transparent;
  cursor: pointer;
`;
