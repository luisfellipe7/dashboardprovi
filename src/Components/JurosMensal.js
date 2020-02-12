import React, { useContext } from "react";
import { ApiConsumer } from "../ApiContext";
import styled from "styled-components";

const Body = styled.div`
  margin: 40px;
  flex: 5 5 calc(100vw - 300px);
  width: 100%;
`;

const BodyHeader = styled.div`
  font-size: 2em;
  font-weight: 600;
`;

const Card = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 15px 30px 0px 30px;
  min-height: 200px;
  width: 95%;
  border-radius: 20px;
  background: white;
  @media (max-width:768px) {
    width:85%;
  }
  @media (max-width: 425px) {
    width:60%;
}
`;

const CarddHeader = styled.div`
  font-weight: 500;
  font-size: 1.1em;
`;

const CardSubtitle = styled.div`
  font-size: 0.955em;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width:768px) {
    flex-direction: column;
  }
  @media (max-width:425px) {
    flex-direction: column;
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`;

const StatsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const Number = styled.div`
  font-size: 3em;
  color: #4834d4;
`;

const JurosMensal =(props) => {
    const apiData = useContext(ApiConsumer);
      return (
        <Body>
        <BodyHeader>Juros Mensal</BodyHeader>
        <Card>
          <CarddHeader>Juros Mensal</CarddHeader>
          <CardSubtitle>Aqui está o valor do juros mensal</CardSubtitle>
          <Container>
            <Table>
              <TableContainer>Juros</TableContainer>
              <StatsContainer>
                <Number>% {apiData.monthlyInterest}</Number>
              </StatsContainer>
            </Table>
          </Container>
        </Card>
      </Body>
      )
  }
  
  export default JurosMensal