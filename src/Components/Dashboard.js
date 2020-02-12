import React, { useState, useContext } from "react";
import { ApiConsumer } from "../ApiContext";
import Overview from "./Overview";
import styled from "styled-components";
import EmprestimoTotal from "./EmprestimoTotal";
import {
  OVERVIEW,
  EMPRESTIMO_TOTAL,
  JUROS_MENSAL,
  JUROS_TOTAL,
  TOTAL_PAGO
} from "../Constantes";
import JurosTotal from "./JurosTotal";
import TotalPago from "./TotalPago";
import ParcelasEmprestimo from "./JurosMensal";

const Home = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  color: #2d3436;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Menu = styled.div`
  text-align: center;
  align-items: center;
  background: white;
  height: 100%;
  min-height:800px;
  padding: 15px 0px 10px 0px;
  flex: 1 1 300px;
  overflow: hidden;
  @media (max-width: 425px) {
    flex: 1 1 500px;
    min-height:0px;
  }
`;

const DisplayName = styled.div`
  margin: 0;
  margin-top: 10px;
  font-size: 2em;
  font-weight: 600;
  color: #4834d4;
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
  border-left: ${props => (props.selected ? "5px solid #4d00ff" : "none")};
  background: ${props =>
    props.selected ? "rgba(77, 0, 255, 0.11)" : "rgba(0, 0, 0, 0.03)"};
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    border-left: 5px solid #4d00ff;
    background: rgba(77, 0, 255, 0.11);
  }
`;

const Buttom1 = styled.div`
  margin: 10px;
  width: 270px;
  height: 40px;
  background: #4834d4;
  color: white;
  border: none;
  border-radius: 5px;
  line-height: 40px;
  margin-top: 163px;
  transition: all 0.3s;
  .&:hover {
    background: rgba(95, 15, 255, 0.76);
  }
  @media(max-width:425px) {
    display:none;
  }
`;

const Buttom2 = styled.div`
display:none;
  margin: 10px;
  width: 270px;
  height: 40px;
  background: #4834d4;
  color: white;
  border: none;
  border-radius: 5px;
  line-height: 40px;
  margin-top: 163px;
  transition: all 0.3s;
  .&:hover {
    background: rgba(95, 15, 255, 0.76);
  }
  @media(max-width:425px) {
    display:flex;
    margin:auto;
    justify-content:center;
  }
`;

const Dashboard = () => {
  const [view, setView] = useState(OVERVIEW);
  const consumer = useContext(ApiConsumer);
  console.log("dashboard context --", consumer);
  return (
    <div id="Dashboard">
      <Home>
        <Menu>
          <DisplayName>Luis Fellipe Furio Raphael</DisplayName>
          <Subtitle>Front-end Developer</Subtitle>
          <MenuItems>
            <Items
              onClick={() => setView(OVERVIEW)}
              selected={view === OVERVIEW}
            >
              Overview
            </Items>
            <Items
              onClick={() => setView(EMPRESTIMO_TOTAL)}
              selected={view === EMPRESTIMO_TOTAL}
            >
              Emprestimo Total
            </Items>
            <Items
              onClick={() => setView(JUROS_TOTAL)}
              selected={view === JUROS_TOTAL}
            >
              Juros Total
            </Items>
            <Items
              onClick={() => setView(TOTAL_PAGO)}
              selected={view === TOTAL_PAGO}
            >
              Total Pago
            </Items>
            <Items
              onClick={() => setView(JUROS_MENSAL)}
              selected={view === JUROS_MENSAL}
            >
              Parcelas Emprestimo
            </Items>
          </MenuItems>
          <Buttom1>Logout</Buttom1>
        </Menu>
        {view === OVERVIEW && <Overview />}
        {view === EMPRESTIMO_TOTAL && <EmprestimoTotal />}
        {view === JUROS_TOTAL && <JurosTotal />}
        {view === TOTAL_PAGO && <TotalPago />}
        {view === JUROS_MENSAL && <ParcelasEmprestimo />}
        <Buttom2>Logout</Buttom2>
      </Home>
    </div>
  );
};

export default Dashboard;
