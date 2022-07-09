import styled from "styled-components";

export const Li = styled.li`
  padding: 0.2em 0.5em;
  cursor: pointer;
  transition: all 200ms linear;

  ${({ disabled }) => {
    if (disabled) {
      return {
        backgroundColor: "var(--gray)",
        color: "var(--light)",
      };
    } else {
      return {
        "&:hover": {
          color: "var(--primary)",
          backgroundColor: "var(--secondary)",
        },
      };
    }
  }}
`;
