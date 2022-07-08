import styled from "styled-components";
import { buttonLinkReset } from "../../../styles/common.component";

export const Form = styled.form`
  width: 250px;
`;

export const Search = styled.button`
  ${buttonLinkReset}

  display: grid;
  place-items: center;

  background-color: var(--secondary);
  color: var(--primary);
  font-size: 1rem;

  border-radius: 10vmax;

  transition: all 200ms linear;

  &:hover {
    background-color: var(--primary);
    color: var(--dark);
  }
`;
