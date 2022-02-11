import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const TextHome = styled.Text`
  color: ${({ theme }) => theme.colors.font_white};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
