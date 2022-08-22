import styled from "styled-components";
import { Theme } from "../designSystem";

export const TitleH2 = styled.h2<{ theme: Theme }>`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 0;
`;
