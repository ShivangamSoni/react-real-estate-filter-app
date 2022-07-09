import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const List = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
