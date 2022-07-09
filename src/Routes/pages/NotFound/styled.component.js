import styled, { css, keyframes } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const animateText = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const commonAfterStyles = css`
  content: attr(content);
  position: absolute;
  inset: 0;
  color: transparent;
  background: repeating-linear-gradient(
    -45deg,
    #71b7e6,
    #69a6ce,
    #b98acc,
    #ee8176,
    #b98acc,
    #69a6ce,
    #9b59b6
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 400%;
  text-shadow: 1px 1px 2px #ffffff40;
  text-transform: uppercase;
  animation: ${animateText} 10000ms ease-in-out infinite alternate;
`;

export const Title = styled.h2`
  font-size: 10rem;
  font-weight: bold;
  position: relative;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  &::after {
    ${commonAfterStyles}
    background-color: transparent;
  }
`;

export const Info = styled.p`
  color: #584e4e;
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  text-transform: uppercase;
  text-transform: uppercase;

  &::after {
    ${commonAfterStyles}
  }
`;
