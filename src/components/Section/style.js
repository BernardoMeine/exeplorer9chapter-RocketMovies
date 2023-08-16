import  styled  from "styled-components";

export const Container = styled.section`
  margin:24px 0;

  > h2 {
    padding-bottom: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px ;
    font-weight: 400;
  }

  > div {
    display: flex;
    padding: 16px;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

    border-radius: 8px;
    background: #0D0C0F;
  }
`