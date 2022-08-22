import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Theme } from "../../../designSystem";

export default styled(Icon)<{ theme: Theme }>`
  height: 1.25rem;
  width: 1.25rem;
  color: ${({ theme }) => theme.color.primary};
`;
