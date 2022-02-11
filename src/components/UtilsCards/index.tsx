import React, { ReactChild, ReactNode, useMemo } from "react";
import { FlatList, View } from "react-native";

import {
  Container,
  ContainerDescrition,
  TextDescrition,
  ContainerCard,
  ContainerLogo,
  ContainerText,
  TextDescritionCard,
} from "./styles";

import { SvgProps } from "react-native-svg";

import PixLogo from "./../../assets/pix_logo.svg";
import BarCodeLogo from "./../../assets/barcode_logo.svg";
import DolarLogo from "./../../assets/dolar_logo.svg";

const UtilsCards: React.FC = () => {
  const cards = useMemo(
    () => [
      { logo: PixLogo, descrition: "Fazer um Pix" },
      { logo: BarCodeLogo, descrition: "Pagar um boleto" },
      { logo: DolarLogo, descrition: "Fazer um depósito" },
      { logo: DolarLogo, descrition: "Fazer um depósitoo" },
    ],
    []
  );

  return (
    <Container>
      <ContainerDescrition>
        <TextDescrition>Do que precisa?</TextDescrition>
      </ContainerDescrition>

      <View style={{ flexDirection: "row" }}>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.descrition}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Cads Logo={item.logo} descrition={item.descrition} />;
          }}
        />
      </View>
    </Container>
  );
};

interface CardProps {
  Logo: React.FC<SvgProps>;
  descrition: string;
}

const Cads: React.FC<CardProps> = ({ Logo, descrition }) => {
  return (
    <ContainerCard>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <ContainerText>
        <TextDescritionCard>{descrition}</TextDescritionCard>
      </ContainerText>
    </ContainerCard>
  );
};

export default UtilsCards;
