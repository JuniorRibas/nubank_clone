import React from "react";

import LogoMoney from "./../../assets/bag_logo.svg";
import {
  Container,
  CardContainer,
  HeaderCardMoney,
  TextMoney,
  TextValueMoney,
} from "./styles";

const Money: React.FC = () => {
  return (
    <Container>
      <CardContainer>
        <HeaderCardMoney>
          <TextMoney>Saldo Disponível</TextMoney>
          <LogoMoney />
        </HeaderCardMoney>
        <TextValueMoney>R$ 240,74</TextValueMoney>
      </CardContainer>
    </Container>
  );
};

export default Money;
