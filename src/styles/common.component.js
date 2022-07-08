import { css } from "styled-components";

export const linkStyles = css`
  appearance: none;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;

  font-size: 1rem;
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
