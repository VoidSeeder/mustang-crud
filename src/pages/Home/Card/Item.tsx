import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";
import { ParagraphSM } from "../../../components";

type Props = {
  iconSrc: string;
  children?: React.ReactNode;
};

const ItemContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
`;

export default function Item({ iconSrc, children }: Props) {
  return (
    <ItemContainer>
      <StyledIcon icon={iconSrc} />
      <ParagraphSM>{children}</ParagraphSM>
    </ItemContainer>
  );
}
