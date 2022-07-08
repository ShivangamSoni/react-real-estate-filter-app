import styled from "styled-components";
import { button, linkStyles } from "../../styles/common.component";

export const Container = styled.header`
  background-color: var(--light);
  padding: 30px 50px;
  box-shadow: 0 0 0.5em var(--gray);

  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 40px;
`;

export const Logo = styled.h1`
  color: var(--dark);
`;

export const NavBar = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > ul {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
  }
`;

export const NavLink = styled.a`
  ${linkStyles}

  padding: 0.5em;
  border-radius: 5px;

  position: relative;
  isolation: isolate;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;

    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 50%,
      var(--secondary) 51%,
      var(--secondary) 100%
    );
    background-size: 100% 200%;
    background-position: top;

    transition: background 300ms linear;
  }

  &:hover,
  &.active {
    &::after {
      background-position: bottom;
    }
  }
`;

export const ButtonLink = styled.a`
  ${button}
`;
