import styled from "styled-components";
import { TitleH2 } from "../../../components";
import { Theme } from "../../../designSystem";

interface Props {
  theme?: Theme;
}

export default styled(TitleH2)<Props>`
  color: ${({ theme }) => theme.color.primary};
  width: 100%;
  text-align: center;
`;
