import React from 'react';
import styled from 'styled-components';
import iae from "./../images/iae.png";
import iae_20 from "./../images/iae-20.png";

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

export default function Aps() {
  return (
    <Container>
          <Title>Announced Pledges Scenario</Title>
          <Text>Announced Pledges Scenario(APS) is the likely outcome that will occur if the government's announced goals and measures are achieved on time and at full scale. It also requires that long-term net-zero emission goals are on track, and that what is to be achieved by 2050 is established.</Text>
          <Text> As the other scenarios APS was introduced bye IAE as a way to show how close do current pledges get the world towards the target of limiting global warming to 1.5 °C, it highlights the “ambition gap” that needs to be closed to achieve the goals agreed at Paris in 2015. It also shows the gap between current targets and achieving universal energy access. </Text>
          <GraphContainer>
            <Graph>
                <GraphTitle>Comparision between APS and NZE</GraphTitle>
                <GraphImage src={iae} />
                <GraphImage src={iae_20} />
            </Graph>
          </GraphContainer>
    </Container>


  )
}