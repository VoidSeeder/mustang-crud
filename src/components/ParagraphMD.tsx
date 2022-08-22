import styled from "styled-components";
import { Theme } from "../designSystem";

export const ParagraphMD = styled.p<{ theme: Theme }>`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 2;
  margin: 0;
`;
