import styled from "styled-components";

export default styled.tbody`
  color: ${({ theme }) => theme.color.primary};
  & > tr {
    & > td {
      padding: 1.5rem;
    }
  }
`;
