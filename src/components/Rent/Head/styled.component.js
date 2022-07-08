import styled from "styled-components";
import { titleUnderline } from "../../../styles/common.component";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;

  ${titleUnderline}
`;
