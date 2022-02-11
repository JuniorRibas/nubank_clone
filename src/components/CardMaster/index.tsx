import React from "react";
import { View } from "react-native";

import MasterCardLogo from "./../../assets/master_card_logo.svg";

import {
  Container,
  Card,
  TextName,
  ContainerLogoCard,
  ContainerTextCard,
} from "./styles";

const CardMaster: React.FC = () => {
  return (
    <Container>
      <Card>
        <ContainerLogoCard>
          <MasterCardLogo />
        </ContainerLogoCard>
        <ContainerTextCard>
          <TextName>Ribeiro</TextName>
        </ContainerTextCard>
      </Card>
    </Container>
  );
};

export default CardMaster;
