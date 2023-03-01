import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Graph = styled.div`
  flex: 1;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 50px;
  }
`;

const GraphTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const GraphImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

export default function NetZeroAviation() {
  return (
    <Container>
      <Title>Net Zero Emission Policy for Aviation</Title>
      <Text>The aviation industry is responsible for a significant amount of carbon emissions, which contribute to climate change. In order to combat this, the industry is working towards a net zero emission policy. This policy aims to reduce greenhouse gas emissions from aviation to zero by the year 2050.</Text>
      <Text>There are several ways in which the aviation industry is working towards this goal:</Text>
      <List>
        <ListItem>Improving fuel efficiency of aircraft by using lighter materials, better engines, and advanced aerodynamics.</ListItem>
        <ListItem>Developing and using sustainable aviation fuels, which are made from renewable sources like algae, crop waste, and cooking oil.</ListItem>
        <ListItem>Investing in new technologies, such as electric and hydrogen-powered aircraft, which emit no greenhouse gases during flight.</ListItem>
        <ListItem>Offsetting emissions through carbon credits and other mechanisms, which involves funding projects that reduce greenhouse gas emissions or remove carbon dioxide from the atmosphere.</ListItem>
      </List>
      <Subtitle>Improving Fuel Efficiency</Subtitle>
      <GraphContainer>
        <Graph>
          <GraphTitle>How to reach Net Zero Emission by 2050</GraphTitle>
          <GraphImage src="https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_1056x1056/public/2022-11/Aviations-path-towards-zero-emissions.webp?itok=zDyOrbEI" alt="Showing how to reach net zero by 2050" />
        </Graph>
        <Graph>
          <GraphTitle>CO2 Emissions by transportation</GraphTitle>
          <GraphImage src="https://ichef.bbci.co.uk/news/640/cpsprodpb/16D76/production/_108485539_optimised-travel_carbon-nc.png" alt="Graph showing the breakdown of C02 emissions by transportation" />
        </Graph>
      </GraphContainer>
      <Text>One of the key strategies for reducing greenhouse gas emissions from aviation is to improve the fuel efficiency of aircraft. This can be achieved through a variety of measures, including:</Text>
      <List>
        <ListItem>Designing aircraft with lighter materials, such as composites, to reduce weight and improve aerodynamics.</ListItem>
        <ListItem>Improving the efficiency of engines by using advanced technologies like turbofans, geared turbofans, and open rotors.</ListItem>
        <ListItem>Optimizing flight paths and reducing air traffic congestion to minimize fuel consumption and emissions.</ListItem>
        <ListItem>Using ground power instead of aircraft engines when parked at the gate to reduce emissions during idle time.</ListItem>
      </List>
      <Subtitle>Developing Sustainable Aviation Fuels</Subtitle>
      <Text>Sustainable aviation fuels (SAFs) are a promising solution for reducing greenhouse gas emissions from aviation. SAFs can be made from a variety of renewable sources, including:</Text>
      <List>
        <ListItem>Algae, which can be grown in saltwater ponds and produces high-quality fuel with low emissions.</ListItem>
        <ListItem>Crop waste, which is the leftover biomass from crops like wheat, corn, and sugarcane.</ListItem>
        <ListItem>Cooking oil, which can be recycled from restaurants and other food service industries.</ListItem>
      </List>
      <Text>Sustainable aviation fuels have the potential to reduce greenhouse gas emissions by up to 80% and airports have already begun using SAFs in their flights and operations, and the industry is working to scale up production and reduce costs to make them more widely available.</Text>
      <Subtitle>New Technologies</Subtitle>
      <Text>New technologies, such as electric and hydrogen-powered aircraft, have the potential to revolutionize the aviation industry by eliminating greenhouse gas emissions from flight altogether. While these technologies are still in the early stages of development, there has been significant progress in recent years. For example:</Text>
      <List>
        <ListItem>Several small electric planes have already been developed and are being used for short flights and training purposes.</ListItem>
        <ListItem>Major aircraft manufacturers like Airbus and Boeing are working on developing electric and hydrogen-powered planes for commercial use.</ListItem>
        <ListItem>Several airports are investing in infrastructure to support electric and hydrogen-powered planes, such as charging stations and hydrogen refueling stations.</ListItem>
      </List>
      <Text>While it may take some time for these technologies to become widely adopted, they hold great promise for a future with zero greenhouse gas emissions from aviation.</Text>
      <Subtitle>Offsetting Emissions</Subtitle>
      <Text>Offsetting emissions through carbon credits and other mechanisms is another strategy for achieving net zero emissions in aviation. This involves funding projects that reduce greenhouse gas emissions or remove carbon dioxide from the atmosphere, such as:</Text>
      <List>
        <ListItem>Renewable energy projects, such as wind farms and solar power plants.</ListItem>
        <ListItem>Forestry projects, which involve planting trees or preserving existing forests to absorb carbon dioxide from the atmosphere.</ListItem>
        <ListItem>Carbon capture and storage projects, which involve capturing carbon dioxide emissions from power plants and other industrial processes and storing them underground.</ListItem>
      </List>
      <Text>Many airlines and airports have implemented carbon offset programs, which allow passengers to purchase carbon credits to offset the emissions from their flights. While carbon offsets are not a perfect solution, they can help to reduce overall greenhouse gas emissions and support the transition to a net zero emission aviation industry.</Text>
    </Container>


  )
}
