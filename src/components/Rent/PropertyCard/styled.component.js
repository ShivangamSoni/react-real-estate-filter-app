import styled from "styled-components";
import { buttonLinkReset } from "../../../styles/common.component";

export const Card = styled.li`
  background-color: var(--light);
  border-radius: 7px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 270px auto;
`;

export const Head = styled.div`
  overflow: hidden;
  border-radius: 7px 7px 0 0;
  position: relative;

  & img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Body = styled.div`
  padding: 20px;
  border-radius: 0 0 7px 7px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;

  position: relative;
`;

export const PopularTag = styled.span`
  position: absolute;
  bottom: 100%;
  left: -1em;
  transform: translateY(50%);
  font-size: 0.9rem;

  & span {
    display: flex;
    align-items: center;

    padding: 0.5em 0.5em 0.5em 1.5em;
    border-radius: 7px;

    text-transform: uppercase;
    background-color: var(--primary);
    color: var(--light);
  }

  &::after {
    content: "";
    position: absolute;
    top: 90%;
    left: 0;
    z-index: -1;

    border-width: 0 15px 15px 0;
    border-color: transparent var(--primary) transparent transparent;
    border-style: solid;

    filter: brightness(60%);
  }
`;

export const Info = styled.div`
  position: relative;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: var(--gray);

  & strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary);
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const Address = styled.address`
  color: var(--gray);
`;

export const FavButton = styled.button`
  ${buttonLinkReset}

  display: grid;
  place-items: center;
  font-size: 1.2rem;
  padding: 0.5em;
  aspect-ratio: 1;

  background-color: var(--light);
  border: 1px solid var(--gray);
  border-radius: 100vmax;
  color: var(--primary);

  position: absolute;
  top: 0;
  right: 0;

  transition: all 200ms linear;

  &:hover {
    background-color: var(--secondary);
    color: var(--dark);
  }
`;

export const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid var(--gray);

  margin-top: 10px;
  padding-top: 10px;
`;

export const Detail = styled.span`
  color: var(--gray);

  display: flex;
  align-items: center;

  & svg {
    font-size: 1.3em;
    color: var(--primary);
  }
`;
