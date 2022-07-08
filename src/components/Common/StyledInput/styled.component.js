import styled from "styled-components";

export const Control = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  background-color: var(--light);

  border-radius: 5px;
  border: 1px solid var(--gray);

  &:focus-within {
    border-color: var(--primary);
  }
`;

export const Label = styled.span`
  position: absolute;
  top: 50%;
  left: 0.5em;
  padding: 0 0.5em;

  pointer-events: none;

  background-color: var(--light);
  color: var(--gray);

  transform: translateY(-50%);
  transition: all 250ms linear;
`;

export const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;

  color: var(--dark);

  font-size: 1rem;
  padding: 0.5em;

  width: 100%;
  height: 100%;
  border-radius: inherit;

  &::placeholder {
    opacity: 0;
  }

  &:focus-visible,
  &:not(:placeholder-shown) {
    & + ${Label} {
      top: 0;
      left: 0;
      font-size: 0.8em;
    }
  }
`;

export const End = styled.div`
  display: grid;
  place-items: center;

  font-size: 1rem;
  margin: 0.5em;
  margin-left: 0;
  border-radius: inherit;

  aspect-ratio: 1;

  & > * {
    aspect-ratio: 1;
  }
`;
