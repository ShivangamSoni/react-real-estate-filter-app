import styled, { css } from "styled-components";
import {
  button,
  buttonLinkReset,
  linkStyles,
  responsiveWidth,
} from "../../styles/common.component";

export const Container = styled.header`
  background-color: var(--light);
  padding: 30px 50px;
  box-shadow: 0 0 0.5em var(--gray);

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 40px;

  position: relative;
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

  @media screen and (${responsiveWidth}) {
    display: block;
    padding: 30px;
    overflow: auto;

    position: absolute;
    top: 101%;
    left: 0;
    z-index: 999;
    transform: translateX(200%);

    width: 100%;
    height: 100vh;

    background-color: var(--light);

    transition: transform 750ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.visible {
      transform: translateX(0);
    }

    & > ul {
      flex-flow: column nowrap;
      gap: 20px;

      & li {
        width: 100%;
      }
    }

    & ul + ul {
      margin-top: 20px;
    }
  }
`;

export const NavToggle = styled.button`
  ${buttonLinkReset}

  display: grid;
  place-items: center;

  color: var(--dark);
  background-color: transparent;
  font-size: 1.2rem;
  padding: 0.3em;

  display: none;

  @media screen and (${responsiveWidth}) {
    display: block;
  }
`;

export const navLinkCommon = css`
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

export const NavLink = styled.a`
  ${navLinkCommon}
`;

export const ButtonLink = styled.a`
  ${button}
`;
