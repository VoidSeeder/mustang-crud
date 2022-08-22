import styled from "styled-components";
import { Theme } from "../../designSystem";

const StyledButton = styled.button<{ theme: Theme }>`
  font-size: 1rem;
  background-color: white;
  border-radius: 1.3rem;
  border: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.color.primary};
  padding: 0.5rem 4.5rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  box-sizing: border-box;
  height: 3rem;
  cursor: pointer;
`;

type Props = {
  link?: string;
};

export default function Button({ link }: Props) {
  return (
    <StyledButton onClick={() => window.open(link, "_blank")?.focus()}>
      + Adicionar Novo
    </StyledButton>
  );
}