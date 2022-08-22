import styled from "styled-components";
import { ParagraphMD, TitleH1 } from "../../../components";
import Box from "./Box";
import Button from "./Button";
import FooterContainer from "./Container";
import Divisor from "./Divisor";

export default function Footer() {
  return (
    <FooterContainer>
      <Divisor>
        <Box>
          <TitleH1>Mustang</TitleH1>
          <ParagraphMD>
            O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
            Company. O carro foi apresentado ao público em 17 de abril de 1964
            durante a New York World's Fair. O Mustang, apesar de ter sofrido
            grandes alterações ao longo dos anos é a mais antiga linha de
            automóveis da Ford.
          </ParagraphMD>
          <Button />
        </Box>
      </Divisor>
    </FooterContainer>
  );
}
