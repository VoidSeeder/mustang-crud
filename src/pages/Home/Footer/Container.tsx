import styled from "styled-components";
import { Container } from "../../../components";
import { Theme } from "../../../designSystem";

export default styled(Container)<{ theme: Theme }>`
  background-image: url(/mustang_footer.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(0.4 * 100vw);
  min-height: 26.5rem;
  width: 100%;
  position: relative;
`;
