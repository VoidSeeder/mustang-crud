import styled from "styled-components";
import { TitleH1 } from "../../components";
import { Theme } from "../../designSystem";
import Button from "./Button";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Title = styled(TitleH1)<{ theme: Theme }>`
  color: ${({ theme }) => theme.color.primary};
`;

const ButtonAligner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export default function Header() {
  return (
    <HeaderBox>
      <Title>Lista</Title>
      <ButtonAligner>
        <Button />
      </ButtonAligner>
    </HeaderBox>
  );
}
