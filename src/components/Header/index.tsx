import React from "react";
import { View } from "react-native";

import { Container } from "./styles";

import LogoNubank from "./../../assets/nubank_logo.svg";
import SettingsLogo from "./../../assets/settings_logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoNubank width={120} height={120} />
      <SettingsLogo width={30} height={30} />
    </Container>
  );
};

export default Header;
