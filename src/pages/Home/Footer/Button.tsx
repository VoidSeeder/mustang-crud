import styled from "styled-components";
import { Theme } from "../../../designSystem";

const Aligner = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledButton = styled.button<{ theme: Theme }>`
  font-size: 1rem;
  background: none;
  border: solid;
  border-width: 2px;
  border-color: white;
  border-radius: 0.25rem;
  color: white;
  padding: 0.5rem 6rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  box-sizing: border-box;
  height: 3rem;
  max-width: 17rem;
  cursor: pointer;
`;

type Props = {
  link?: string;
};

export default function Button({ link }: Props) {
  return (
    <Aligner>
      <StyledButton onClick={() => window.open(link, "_blank")?.focus()}>
        Ver carro
      </StyledButton>
    </Aligner>
  );
}
