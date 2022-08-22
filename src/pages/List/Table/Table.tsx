import styled from "styled-components";
import { Theme } from "../../../designSystem";

export default styled.table<{ theme: Theme }>`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
`;
