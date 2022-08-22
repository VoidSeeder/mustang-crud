import styled from "styled-components";
import { Theme } from "../../designSystem";

type Props = {
  theme: Theme;
  path: string;
};

export default styled.div<Props>`
  ${({ theme, path }) =>
    path === "/"
      ? `
        background-image: url(/mustang_main.svg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: calc(0.5*100vw);
        min-height: 400px;
        width: 100%;
      `
      : `
        background-color: ${theme.color.primary};
      `}
  box-sizing: border-box;
  padding: 1rem;
`;
