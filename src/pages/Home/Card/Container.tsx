import styled from "styled-components";
import { Container } from "../../../components";
import { Theme } from "../../../designSystem";

export default styled(Container)<{ theme: Theme }>`
  position: relative;
  width: 17.5rem;
  height: 22.5rem;
  border-radius: 1.5rem;
  border: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.color.primary};
  margin-top: 5.5rem;
  padding: 2rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
