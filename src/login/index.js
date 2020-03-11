import React from 'react';
import { SafeAreaView, Image, StatusBar } from 'react-native';

import logo from '../../assets/Logo.png';
import ilustra from '../../assets/Ilustra.png';

import { Container, ViewTop, ImageBG, TextHeader } from './styles';

export default function home() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#6356fd" />
      <Container>
        <ViewTop>
          <ImageBG>
            <Image source={logo} />
          </ImageBG>
          <Image source={ilustra} />
        </ViewTop>
        <TextHeader>Preencha com seu usuário e senha</TextHeader>
        <FormLogin>
          <input title="Usuário" />
        </FormLogin>
      </Container>
    </SafeAreaView>
  );
}
