import styled from "styled-components";
import { button, responsiveWidth } from "../../../styles/common.component";

export const Section = styled.section`
  background-color: var(--light);
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;

  @media screen and (${responsiveWidth}) {
    gap: 30px;
  }

  & > div {
    display: grid;
    place-items: center flex-start;

    &:not(:last-child) {
      flex: 1;
      position: relative;

      ::after,
      ::before {
        content: "";
        position: absolute;
        top: 0;
        right: -10px;
        width: 1px;
        height: 100%;
        background-color: var(--gray);
      }

      @media screen and (${responsiveWidth}) {
        ::before {
          right: none;
          left: -10px;
        }
      }
    }

    @media screen and (${responsiveWidth}) {
      &:last-child {
        width: 100%;
      }
    }
  }
`;

export const Button = styled.a`
  ${button}
`;
