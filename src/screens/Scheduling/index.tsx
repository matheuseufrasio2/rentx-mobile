import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { RootStackParamList } from '../../@types/navigation';

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

type SchedulingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Scheduling'
>;

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation<SchedulingScreenNavigationProp>();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          onPress={() => { }}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma{'\n'}
          data de inicio e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={true}>18/08/2020</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button
          onPress={handleConfirmRental}
          title="Confirmar"
        />
      </Footer>
    </Container>
  );
}