import styled from "styled-components";
import { buttonLinkReset } from "../../../styles/common.component";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 5px;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 0.9rem;
  color: var(--gray);
  text-shadow: 0 0 0 var(--gray), 0 0 0 var(--gray);
`;

export const Select = styled.div`
  display: grid;
  position: relative;
`;

export const Selected = styled.span`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;

  padding-right: 1em;

  position: relative;

  & > button {
    ${buttonLinkReset}

    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    display: grid;
    place-items: center;

    border-radius: 100vmax;
    aspect-ratio: 1;

    color: var(--dark);
    background-color: var(--secondary);
  }
`;

export const Options = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  position: absolute;
  top: 120%;
  left: 0;
  z-index: 999;

  width: 100%;
  max-height: 300px;
  border-radius: 7px;
  background-color: var(--light);
  overflow-y: auto;

  box-shadow: 0 0 1em 0 var(--gray);
`;
