import styled from "styled-components";

export const PurpleHover = styled.a`
  background: #5d9c77;
  color: #fff;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-size: 1.125rem;

  padding: 0.65rem 2rem;
  border-radius: 5rem;
  border: none;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #4a0751;
  }
`;

export const OrangeHover = styled.a`
  background: #5d9c77;
  color: #fff;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-size: 1.125rem;
  padding: 0.65rem 1rem;
  border-radius: 5rem;
  margin-top: 2rem;
  border: none;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #fa5a03;
  }
`;

export const OutlineButton = styled.a`
  background: none;
  color: #5d9c77;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-size: 1.125rem;
  border: 2px solid #5d9c77;

  padding: 0.65rem 2rem;
  border-radius: 5rem;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #5d9c77;
    color: #fff;
  }
`;

export const Separator = styled.div`
  border: 1px solid #f8f8f8;
  margin-top: 5rem;
`;

export const Card = styled.div`
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: start;
  justify-content: center;
  background: #fa5a03;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #fff;
`;
