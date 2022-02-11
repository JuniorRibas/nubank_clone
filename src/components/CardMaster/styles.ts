import styled from "styled-components/native";

export const Container = styled.View`
  height: 191px;

  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  height: 191px;
  width: 90%;
  justify-content: space-between;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background_cads};
`;

export const ContainerLogoCard = styled.View`
  align-items: flex-end;
  margin: 13px 19px;
`;
export const ContainerTextCard = styled.View`
  margin: 13px 19px;
`;

export const TextName = styled.Text`
  color: ${({ theme }) => theme.colors.font_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 24px;
`;
