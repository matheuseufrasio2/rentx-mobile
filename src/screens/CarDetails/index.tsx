import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  About,
  Footer,
} from './styles';
import { Button } from '../../components/Button';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>
      <CarImage>
        <ImageSlider
          imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>Lambhorgini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 480</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quae vitae quidem debitis nemo culpa eius optio autem sapiente aut sint, repudiandae recusandae assumenda consectetur officiis deserunt consequatur repellat quod.
        </About>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quae vitae quidem debitis nemo culpa eius optio autem sapiente aut sint, repudiandae recusandae assumenda consectetur officiis deserunt consequatur repellat quod.
        </About>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quae vitae quidem debitis nemo culpa eius optio autem sapiente aut sint, repudiandae recusandae assumenda consectetur officiis deserunt consequatur repellat quod.
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}