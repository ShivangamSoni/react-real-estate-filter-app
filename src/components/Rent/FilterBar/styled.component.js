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

    &:last-child {
      display: grid;
      place-items: center;

      flex: 0.5;

      @media screen and (${responsiveWidth}) {
        flex: unset;
        place-items: unset;
      }
    }
  }
`;

export const Field = styled.div`
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

export const Button = styled.a`
  ${button}
`;
