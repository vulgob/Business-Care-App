import React from 'react';

import './financeiro.css'

const FinanceiroPage = () => {
  // Dados fictícios
  const monthlyData = [
    { month: 'Jan', receita: 15000, despesas: 8000, lucro: 7000 },
    { month: 'Fev', receita: 18000, despesas: 9000, lucro: 9000 },
    { month: 'Mar', receita: 16000, despesas: 8500, lucro: 7500 },
    { month: 'Abr', receita: 20000, despesas: 10000, lucro: 10000 },
    { month: 'Mai', receita: 22000, despesas: 11000, lucro: 11000 },
    { month: 'Jun', receita: 19000, despesas: 9500, lucro: 9500 },
  ];

  return (
    <div className="layout">
      <div className="content">
        <h2>Dashboard Financeiro</h2>

        <div className="summary">
          <div className="card receita">
            <h4>Receita</h4>
            <p>R$ 22.000</p>
          </div>
          <div className="card despesas">
            <h4>Despesas</h4>
            <p>R$ 11.000</p>
          </div>
          <div className="card lucro">
            <h4>Lucro</h4>
            <p>R$ 11.000</p>
          </div>
        </div>

        <div className="charts">
          <div className="chart">
            <h3>Evolução Financeira</h3>
            <div className="simulated-chart">[Gráfico de Linhas Simulado]</div>
          </div>

          <div className="chart">
            <h3>Comparativo Mensal</h3>
            <div className="simulated-chart">[Gráfico de Barras Simulado]</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceiroPage;
