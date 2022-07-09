import styled from "styled-components";
import {
  responsiveWidth,
  titleUnderline,
} from "../../../styles/common.component";
import { Form } from "../../Common/SearchBar/styled.component";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (${responsiveWidth}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    ${Form} {
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;

  ${titleUnderline}
`;
