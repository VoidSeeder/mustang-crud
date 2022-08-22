import styled from "styled-components";

export default styled.div`
  background: linear-gradient(
    to right,
    rgba(29, 37, 39, 0),
    rgba(29, 37, 39, 0.8)
  );
  backdrop-filter: blur(10px);
  min-width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  box-sizing: border-box;
`;
