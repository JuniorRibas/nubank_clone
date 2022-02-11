import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 20px 25px;
`;

export const ContainerDescrition = styled.View`
  margin-bottom: 20px;
  margin: 20px 25px;
`;
export const TextDescrition = styled.Text`
  color: ${({ theme }) => theme.colors.font_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 16px;
`;

export const ContainerCard = styled.View`
  height: 140px;
  width: 110px;

  justify-content: space-between;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background_cads};

  padding: 21px;
  margin: 3px 5px 0px 0px;
`;

export const ContainerLogo = styled.View``;

export const ContainerText = styled.View``;

export const TextDescritionCard = styled.Text`
  color: ${({ theme }) => theme.colors.font_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 12px;
`;
