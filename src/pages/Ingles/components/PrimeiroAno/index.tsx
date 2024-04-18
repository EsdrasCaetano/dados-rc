import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

type RenderActiveShapeType = (props: unknown) => JSX.Element;

interface Row {
  [key: string]: string; // Todas as chaves são strings e os valores também são strings
}

interface Counts {
  [key: string]: number; // A chave é a idade (string) e o valor é a quantidade (number)
}

interface BarDataItem {
  name: string;
  Quantidade: number;
  fill: string;
}

// interface Payload {
//   name: string;
//   // Outras propriedades, se houver
// }

interface CustomPieSectorDataItem {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload?: {
    name: string;
  };
  percent?: number;
  value?: number | string;
}

export function PrimeiroAno() {
  const [chartData, setChartData] = useState<BarDataItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const csvFile  = '/src/assets/pesquisarc24.csv'

  const colors = [
    '#005B7A', '#273617', '#618A86', '#6CB097',
    '#858547', '#FFAD0B', '#DA8044', '#B07145', 
  ];

  const renderActiveShape = (props: CustomPieSectorDataItem) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  
  
    // Calcula o raio externo final com base na possibilidade de ser indefinido
    const finalOuterRadius = outerRadius !== undefined ? outerRadius : 0;
  
    // Calcula as coordenadas x e y dos pontos
    const sx = cx + ((finalOuterRadius ?? 0) + 10) * Math.cos(-midAngle);
    const sy = cy + ((finalOuterRadius ?? 0) + 10) * Math.sin(-midAngle);
    const mx = cx + ((finalOuterRadius ?? 0) + 30) * Math.cos(-midAngle);
    const my = cy + ((finalOuterRadius ?? 0) + 30) * Math.sin(-midAngle);
    const ex = mx + (Math.cos(-midAngle) >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = Math.cos(-midAngle) >= 0 ? 'start' : 'end';
  
    // Retorna a estrutura JSX para renderização
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload && payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={finalOuterRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={finalOuterRadius + 6}
          outerRadius={finalOuterRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (Math.cos(-midAngle) >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`Total ${value}`}</text>
        <text x={ex + (Math.cos(-midAngle) >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={fill}>
          {`(Porcentagem  ${(percent ?? 0 * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const onPieEnter = (_: number, index: number) => {
      setActiveIndex(index);
  };

  useEffect(() => {
    const processCSV = async () => {
      try {
        const response = await fetch(csvFile);
        const csv = await response.text();
        const parsedData: Row[] = Papa.parse(csv, { header: true }).data as Row[];

        const column2Data = parsedData.map(row => row['en_primeiro_ano']).filter(value => value !== '');

        const counts: Counts = { "Sim": 0, "Não": 0 }; 
        // Inicializando counts com o tipo correto

        column2Data.forEach(value => {
          counts[value === '1' ? 'Sim' : 'Não']++;
        });

        const chartData = Object.entries(counts).map(([name, value], index) => ({
          name,
          Quantidade: value, // Usando a propriedade Quantidade
          fill: colors[index % colors.length],
        }));

        setChartData(chartData);
      } catch (error) {
        console.error('Ocorreu um erro ao processar o arquivo CSV:', error);
      }
    };

    processCSV();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Primeiro Ano?</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape as RenderActiveShapeType}
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="Quantidade"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p>Carregando gráfico...</p>
      )}
    </div>
  );
}
