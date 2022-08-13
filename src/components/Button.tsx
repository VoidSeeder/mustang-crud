import styled from "styled-components";
import designSystem from "../designSystem";

interface Props {
  primary?: boolean;
  theme?: typeof designSystem;
}

export const Button = styled.button<Props>`
  background: none;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-style: normal;
  color: ${({ theme }) => theme.color.white};
  border: none;
  font-size: 20px;
  line-height: 30px;
  border-color: transparent;
  padding: 0;
  border-style: none none solid none;
  margin: 0.25rem;
  &:hover {
    border-color: ${({ theme }) => theme.color.white};
  }
`;
