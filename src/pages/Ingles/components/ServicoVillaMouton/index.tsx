import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface Row {
  [key: string]: string; // Todas as chaves são strings e os valores também são strings
}

interface Counts {
  [key: string]: number; // A chave é a idade (string) e o valor é a quantidade (number)
}

interface BarDataItem {
  name: string;
  Quantidade: number;
  percentage: number;
}


export function ServicoVillaMouton() {
  const [barChartData, setBarChartData] = useState<BarDataItem[]>([]);

  const csvFile  = '/src/assets/pesquisarc24.csv'

  useEffect(() => {
    const processCSV = async () => {
      try {
        const response = await fetch(csvFile);
        const csv = await response.text();
        const parsedData: Row[] = Papa.parse(csv, { header: true }).data as Row[];

        // Defina os nomes das colunas que deseja exibir no gráfico e seus equivalentes para exibição
        const columnsToDisplay = [
          { dataKey: 'en_central_atendimento_suporte', name: 'Central de atendimento (suporte)' },
          { dataKey: 'en_bilheteria_suporte', name: 'Bilheteria (suporte)' },
          { dataKey: 'en_carneiros_store', name: 'Carneiros Store' },
          { dataKey: 'en_varanda_burger_alimentacao', name: 'Varanda Burguer (alimentação)' },
          { dataKey: 'en_the_poke_alimentacao', name: 'The Poke (alimentação)' },
          { dataKey: 'en_pizza_da_villa_alimentacao', name: 'Pizza da Vila (alimentação)' },
          { dataKey: 'en_ac_up_alimentacao', name: `Aç'up (alimentação)` },
          { dataKey: 'en_expresso_mercado_alimentacao', name: 'Expresso Mercado (alimentação)' },
          { dataKey: 'en_instituto_dr_bernado_guimarares_sb', name: 'Instituto Dr. Bernardo Guimarães (Saúde & Beleza)' },
          { dataKey: 'en_spa_aua_sb', name: 'Spá AUÁ (Saúde & Beleza)' },
          { dataKey: 'en_rom_concept_brae_sb', name: 'ROM Concept + Braé (Saúde & Beleza)' },
          { dataKey: 'en_confraria_barba_sb', name: 'Confraria da Barba (Saúde & Beleza)' },
          { dataKey: 'en_nenhum_servico', name: 'Nenhum' }
        ];

        // Inicializa o objeto de contagem de cada valor para cada coluna
        const counts: Counts = {};

        // Para cada linha, conta a ocorrência de cada valor para cada coluna
        parsedData.forEach(row => {
          columnsToDisplay.forEach(column => {
            if (!counts[column.dataKey]) {
              counts[column.dataKey] = 0;
            }
            if (row[column.dataKey]) {
              counts[column.dataKey]++;
            }
          });
        });

        // Calcular o total de todas as contagens
        const total = Object.values(counts).reduce((acc, cur) => acc + cur, 0);

        // Converte os dados de contagem em um array de objetos para o gráfico
        const chartData = columnsToDisplay.map(column => ({
          name: column.name,
          Quantidade: counts[column.dataKey] || 0,
          percentage: total === 0 ? 0 : (counts[column.dataKey] / total) * 100 // Calcular a porcentagem
        }));

        // Ordena os dados de forma decrescente na quantidade
        chartData.sort((a, b) => b.Quantidade - a.Quantidade);

        setBarChartData(chartData);
      } catch (error) {
        console.error('Ocorreu um erro ao processar o arquivo CSV:', error);
      }
    };

    processCSV();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Serviços utilizados da Villa Mouton</h2>
      {barChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            data={barChartData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Quantidade" fill="#005B7A">
              <LabelList dataKey="Quantidade" position="top" />
              {/* <LabelList dataKey="percentage" position="insideTop" fill='#FFF' formatter={(value) => `${value.toFixed(2)}%`} /> */}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Carregando gráfico...</p>
      )}
    </div>
  );
}
