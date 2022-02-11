import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 19px;
  height: 140px;

  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.View`
  height: 140px;
  width: 90%;
  justify-content: space-between;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background_cads};
`;

export const HeaderCardMoney = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 15px;
`;

export const TextMoney = styled.Text`
  color: ${({ theme }) => theme.colors.font_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 14px;
`;

export const TextValueMoney = styled.Text`
  color: ${({ theme }) => theme.colors.font_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 40px;

  padding: 0px 0px 20px 16px;

  font-weight: bold;
`;
