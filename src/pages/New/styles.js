import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 1137px;
  margin: 38px auto;

  > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 36px;

    a {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h1 {
      margin-top: 24px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
`;