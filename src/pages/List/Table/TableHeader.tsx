import styled from "styled-components";
import { Theme } from "../../../designSystem";

export default styled.tr<{ theme: Theme }>`
  background-color: transparent;
  & > th {
    &:first-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }
    &:last-child {
      border-radius: 0 0.5rem 0.5rem 0;
    }
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.primary};
    padding: 1.5rem;
    color: white;
  }
`;
