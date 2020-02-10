import React, { useState, useContext } from "react"
import { ApiConsumer } from "../ApiContext"
import Overview from './Overview'
import styled from 'styled-components'

const Home = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
overflow:hidden;
font-family: "Poppins", sans-serif;
color: #2d3436;
`;

const Menu = styled.div`
text-align: center;
align-items: center;
background: white;
height: 100%;
padding: 15px 0px 10px 0px;
flex: 1 1 300px;
overflow: hidden;
min-height:820px;
`;

const DisplayName = styled.div`
margin: 0;
margin-top: 10px;
font-size: 2em;
font-weight: 600;
  color:#4834d4;
`;
  
  const Subtitle = styled.div` 
    margin: 0px 0px 5px 0px;
  `;
  
const MenuItems = styled.div`
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
  `;

  const Items = styled.div`
    padding: 20px 0px 20px 20px;
    width: 100%;
    text-align: left;
    display: inline-block;
    color: black;
    background: rgba(0, 0, 0, 0.03);
    transition: all 0.3s;
    text-decoration: none;
    &:hover{
        border-left: 5px solid #4d00ff;
        background: rgba(77, 0, 255, 0.11);
    }
  `;
  
  const Buttom = styled.div` 
    margin: 10px;
    width: 270px;
    height: 40px;
    background: #4834d4;
    color: white;
    border: none;
    border-radius: 5px;
      transition: all 0.3s;
   .&:hover {
      background: rgba(95, 15, 255, 0.76);
   }
  `;


  const Body = styled.div`
  margin: 40px;
  flex: 5 5 calc(100vw - 300px);
  width:100%;
  `;

const BodyHeader = styled.div`
    font-size: 2em;
    font-weight: 600;
  `;

  const Card = styled.div`
    margin: 20px 0px 0px 0px;
      padding: 20px 0px 0px 30px;
    min-height: 200px;
    width: 95%;
    border-radius: 20px;
    background: white;
`;

const CarddHeader = styled.div`
      font-weight: 500;
      font-size: 1.1em;
`;

  const CardSubtitle = styled.div`
      font-size: 0.955em;
      margin-bottom:20px;
  `;
const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
`;

const Table = styled.div `
display:flex;
flex-direction:column;

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


const Dashboard = () => {
    const [view, setView] = useState("overview");
    const consumer = useContext(ApiConsumer);
    const apiData = useContext(ApiConsumer);
    console.log("dashboard context --", consumer);
  return (
    <div id="Dashboard">
        <Home>
            <Menu>
                <DisplayName>Luis Fellipe Furio Raphael</DisplayName>
                <Subtitle>blablabla</Subtitle>
                <MenuItems>
                    <Items>
                    Overview
                    </Items>
                    <Items>
                        Emprestimo Total
                    </Items>
                    <Items>Juros Total</Items>
                    <Items>Total Pago</Items>
                    <Items>Parcelas Emprestimo</Items>
                </MenuItems>
                <Buttom>Logout</Buttom>
            </Menu>
            <Body>
            <BodyHeader>Overview</BodyHeader>
            <Card>
                <CarddHeader>Resumo</CarddHeader>
                <CardSubtitle>Aqui está um resumo do seu empréstimo</CardSubtitle>
                <Container>
                <Table>
                <TableContainer>Emprestimo Total</TableContainer>
                <StatsContainer><Number>R${apiData.amountTaken}</Number></StatsContainer>
                </Table>
                <Table>
                <TableContainer>Juros Total</TableContainer>
                <StatsContainer><Number>R${apiData.totalAmountInTaxes}</Number></StatsContainer>
                </Table>
                <Table>
                <TableContainer>Total Pago</TableContainer>
                <StatsContainer><Number>R${apiData.amountPayd}</Number></StatsContainer>
                </Table>
                <Table>
                <TableContainer>Parcelas Emprestimo</TableContainer>
                <StatsContainer><Number>{apiData.monthlyInterest}%</Number></StatsContainer>
                </Table>
                </Container>
            </Card>
            </Body>
        </Home>
    </div>
  );
};

export default Dashboard;
