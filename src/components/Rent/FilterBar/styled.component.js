import styled from "styled-components";
import { button } from "../../../styles/common.component";

export const Section = styled.section`
  background-color: var(--light);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
  column-gap: 20px;

  & > div {
    display: grid;
    place-items: center flex-start;

    &:not(:last-child) {
      flex: 1;
      position: relative;

      ::after {
        content: "";
        position: absolute;
        top: 0;
        right: -10px;
        width: 1px;
        height: 100%;
        background-color: var(--gray);
      }
    }
  }
`;

export const Button = styled.a`
  ${button}
`;
