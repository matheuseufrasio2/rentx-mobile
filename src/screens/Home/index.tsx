import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { RootStackParamList } from '../../@types/navigation';

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const carDataOne = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "5 dias",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png"
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails');
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
        renderItem={({ item }) =>
          <Car data={carDataOne} onPress={handleCarDetails} />
        }
      />

    </Container>
  );
}