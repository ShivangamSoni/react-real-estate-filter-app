import styled from "styled-components";
import { button } from "../../../styles/common.component";

export const Section = styled.section`
  display: grid;
  place-items: center;

  & h2 {
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  ${button}
`;
