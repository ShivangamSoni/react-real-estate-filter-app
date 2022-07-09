import styled from "styled-components";

import { navLinkCommon } from "../styled.component";

export const Container = styled.div`
  position: relative;

  & .subNav {
    list-style: none;
    padding: 0 10px 10px;
    margin: 0;

    position: absolute;
    top: 102%;
    left: 0;
    z-index: 999;
    width: 100%;

    background-color: var(--light);
    box-shadow: 0 0 0.3em 0 var(--gray);
    border-radius: 7px;

    opacity: 0;
    visibility: hidden;
    transform: translateX(20px);
    transition: all 300ms linear;

    &.visible {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }

    & li {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      margin-top: 10px;
    }
  }
`;

export const NavDrawerButton = styled.a`
  ${navLinkCommon}

  width: 100%;
  text-align: left;

  & span {
    display: inline-block;
    margin-right: 1em;
  }

  & svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 1.2rem;
  }
`;
