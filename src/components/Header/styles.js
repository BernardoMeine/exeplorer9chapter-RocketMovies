import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display:flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.PINK}
  }

  > input {
    display: flex;
    padding: 19px 24px;
    align-items: flex-start;
    margin: 0 64px 0;
    flex: 1 0 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: #262529;
    border: none;

    & placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

export const Profile = styled(Link) `
  display: flex;
  align-items: center;
  
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

