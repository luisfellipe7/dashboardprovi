import React, { useContext } from "react";
import { ApiConsumer } from "../ApiContext";

const Overview = () => {
    const apiData = useContext(ApiConsumer);
    return (
      <div class="dash-view">
        <h2 class="view-heading">Aqui está um resumo do seu empréstimo</h2>
        <div>
          <h4 class="card-heading">Seu resumo mensal</h4>
          <div class="dash-card">
            <div id="stats-container">
              <div>
                <h5 class="lg-nmbr">R${apiData.totalAmountInTaxes}</h5>
                <p>Juros Total</p>
              </div>
              <div>
                <h5 class="lg-nmbr">R${apiData.amountPayd}</h5>
                <p>Total pago esse mês</p>
              </div>
              <div>
                <h5 class="lg-nmbr">R${apiData.amountTaken}</h5>
                <p>Total da dívida</p>
              </div>
              <div>
                <h5 class="lg-nmbr">{apiData.monthlyInterest}%</h5>
                <p>% mensal de juros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Overview;