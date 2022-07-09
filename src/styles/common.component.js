import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  width: min(1200px, 96%);
  margin: 50px auto;
`;

export const buttonLinkReset = css`
  appearance: none;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;

  /* inline-block is needed otherwise Button Styling for {a} tag doesn't work for Chromium Based Browsers  */
  display: inline-block;

  font-size: 1rem;
  text-align: center;
`;

export const linkStyles = css`
  ${buttonLinkReset}

  font-weight: 500;
  color: var(--primary);

  transition: color 350ms linear;
  &:hover {
    color: var(--dark);
  }
`;

export const button = css`
  ${linkStyles}
  padding: 0.5em 1em;
  border-radius: 5px;

  color: var(--light);
  background-color: var(--primary);
  outline: 1px solid var(--primary);

  position: relative;
  isolation: isolate;
  overflow: hidden;

  transition: color 350ms ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background-color: var(--light);
    border-radius: inherit;

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 350ms ease;
  }

  &:hover {
    color: var(--primary);
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  ${({ variant }) => {
    if (variant === "outlined") {
      return {
        "backgroundColor": "var(--light)",
        "color": "var(--primary)",
        "outline": "1px solid var(--gray)",
        "&::after": {
          backgroundColor: "var(--primary)",
        },
        "&:hover": {
          color: "var(--light)",
        },
      };
    }
  }}
`;

export const titleUnderline = css`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;

    width: min(50%, 200px);
    height: 5px;
    background-image: linear-gradient(to right, var(--primary), transparent);
  }
`;
