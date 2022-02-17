import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home() {
  const carDataOne = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "5 dias",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png"
  }
  const carDataTwo = {
    brand: "renault",
    name: "sandero",
    rent: {
      period: "10 dias",
      price: 750,
    },
    thumbnail: "https://brfrance.com.br/uploads/products/versions/colors/renault-sandero-branco-glacier-1.png"
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carDataOne} />}
      />

    </Container>
  );
}