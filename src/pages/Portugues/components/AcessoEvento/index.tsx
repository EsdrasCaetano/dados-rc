import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, LabelList } from 'recharts';

interface Row {
  [key: string]: string; // Todas as chaves são strings e os valores também são strings
}

interface AgeCount {
  [age: string]: number; // A chave é a idade (string) e o valor é a quantidade (number)
}

interface BarDataItem {
  name: string;
  Quantidade: number;
  percentage: number;
}

export function AcessoEvento() {
  const [barChartData, setBarChartData] = useState<BarDataItem[]>([]);
  // const [media, setMedia] = useState<number | null>(null); // Estado para armazenar a média calculada
  const csvFile  = '/src/assets/pesquisarc24.csv'


  // function calcularMedia(valores: number[]): number {
  //   if (valores.length === 0) return 0; // Retorna 0 se o array estiver vazio
  
  //   let soma = 0;
  //   for (const valor of valores) {
  //     soma += valor; // Adiciona cada valor à soma
  //   }
  //   return soma / valores.length; // Calcula a média dividindo a soma pelo número de valores
  // }

  useEffect(() => {
    const processCSV = async () => {
      try {
        const response = await fetch(csvFile);
        const csv = await response.text();
        const parsedData: Row[] = Papa.parse(csv, { header: true }).data as Row[];


        // Filtra os dados com nome undefined e uv igual a 0
        const filteredData = parsedData.filter(row => row['acesso_evento'] !== undefined && row['acesso_evento'] !== '' && parseInt(row['acesso_evento']) !== 0);

        // Agrupa os dados por idade e calcula a quantidade correspondente
        const ageCounts: AgeCount = filteredData.reduce((acc: AgeCount, row: Row) => {
          const age = row['acesso_evento'];
          acc[age] = (acc[age] || 0) + 1;
          return acc;
        }, {});

        // Converte os dados agrupados em um array de objetos
        const barData: BarDataItem[] = Object.entries(ageCounts)
          .map(([idade, quantidade]) => ({
            name: idade,
            Quantidade: quantidade,
            percentage: (quantidade / filteredData.length) * 100
          }))
          // .sort((a, b) => b.name - a.name); // Ordena por idade de forma crescente
          .sort((a, b) => parseFloat(b.name) - parseFloat(a.name));


        setBarChartData(barData);
      } catch (error) {
        console.error('Ocorreu um erro ao processar o arquivo CSV:', error);
      }
    };

    processCSV();
    // setMedia(calcularMedia(barChartData.map(item => item.Quantidade)));
  }, [barChartData]); // Executa o efeito sempre que 'barChartData' é atualizado

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Acesso ao evento</h2>
      {barChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
            // formatter={(value, name, props) => {
            //   return `${value} | Porcentagem: ${props.payload.percentage.toFixed(2)}%`;
            // }}
            />
            <Bar dataKey="Quantidade" fill="#005B7A" barSize={115}>
              <LabelList dataKey="Quantidade" position="top" />
              {/* <LabelList dataKey="percentage" position="insideTop" fill='#FFF' formatter={(value) => `${value.toFixed(2)}%`} /> */}
            </Bar>
          </BarChart>
         
        </ResponsiveContainer>
      ) : (
        <p>Carregando gráfico...</p>
      )}

  {/* {media !== null && <p>Média: {media.toFixed(2)}</p>} Exibe a média se estiver disponível */}
    </div>
  );
}
