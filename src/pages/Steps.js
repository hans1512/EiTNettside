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

export default function Steps() {
  return (
    <Container>
          <Title>Stated Policies Scenario</Title>
          <Text>A stated policy scenario is a hypothetical situation that models the potential impact of a specific set of policy decisions or changes on a particular area of interest. This type of scenario is often used in policy analysis and decision-making processes to help stakeholders understand the potential consequences of various policy options</Text>
          <Text>In this setting STEPS is all about how the energy mix will change if all the stated policies are implemented. </Text>
          <Text> Ambitius goals without any plans are not taken into consideration and therfore STEPS is the most pessimistc scenario.</Text>
          <Subtitle>The Paris Agreement</Subtitle>
          <Text>STEPS is based on the Paris Agreement.The Paris Agreement is an international treaty that was adopted at the United Nations Framework Convention on Climate Change (UNFCCC) in Paris, France in December 2015. The agreement aims to strengthen the global response to climate change by keeping the global temperature rise well below 2 degrees Celsius above pre-industrial levels and pursuing efforts to limit the temperature increase to 1.5 degrees Celsius. </Text>
          <Text>Under the Paris Agreement, all countries, including both developed and developing countries, have committed to taking action to reduce their greenhouse gas emissions and enhance their efforts to adapt to the impacts of climate change. The agreement sets out a framework for countries to regularly report on their emissions reduction efforts and to enhance their ambitions over time.</Text>
          <Text>The Paris Agreement also includes provisions for developed countries to provide financial resources to developing countries to support their efforts to mitigate and adapt to climate change. Additionally, the agreement recognizes the importance of cooperation between countries in technology development and transfer, capacity building, and public awareness.
              The Paris Agreement is seen as a significant step forward in the global fight against climate change and has been ratified by 191 countries as of April 2023. </Text>
              <GraphContainer>
              <Graph>
                  <GraphImage src="https://sustainability.yale.edu/sites/default/files/resize/images/paris_3obj_infographic%20%281%29-800x447.png" alt="Main take away from the Paris Agreement" />
              </Graph>
              <Graph>
                <GraphTitle>Participating countries</GraphTitle>
                  <GraphImage src="https://cdn.statcdn.com/Infographic/images/normal/9656.jpeg" alt="Participating countries" />
              </Graph>
          </GraphContainer>      
      
    </Container>


  )
}
