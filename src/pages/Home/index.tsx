import React from "react";
import Header from "../../components/Header";
import CardMaster from "../../components/CardMaster";

import { Container } from "./styles";
import Money from "../../components/Money";
import UtilsCards from "../../components/UtilsCards";

function Home() {
  return (
    <Container>
      <Header />
      <CardMaster />
      <Money />
      <UtilsCards />
    </Container>
  );
}

export default Home;
