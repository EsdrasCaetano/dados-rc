import { useRef, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,  Cell, Tooltip } from 'recharts'; // Certifique-se de importar os componentes necessários


interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Esportes',
    items: [
        'Crossfight', 
        'corrida',
        'Trilhas ecológicas',
        'Futevôlei',
        'Water Sports',
        'Acho que deveria ter esportes, quadra de volei por exemplo',
    ]
  },
  {
    name: 'Estética',
    items: [
        'Salão de beleza'
    ]
  },
  {
    name: 'Estrutura',
    items: [
        'Aumentar a doma da rituals e vidya para caber mais pessoas! Ficava sempre lotado e pessoas na parte de fora no sol!', 
        'existia a necessidade de cobertura ao menos igual do mangue gym na área da bio ritmo no funcional. Calor está a surreal, sendo perigoso para saúde.',
        'Local com sombra.',
        'Sugiro que a tenda do yoga e ritual seja maior e na sombra.',
        'Mais equipamentos no mangue gym',
        'Aumentar o espaço das aulas de yoga',
        'ampliar mais os espaços, esse ano ficou pequeno',
        'meus amigos foram e falaram sobre a academia no sol, que o ambiente e a ideia eram super legais, mas não rolava no sol quente',
        'O funcional naquele horário, embaixo do sol? Era impossível!!! As atividades do rituaus foram incríveis!!!',
        'O funcional poderia ter sido mais completo e a academia mais bem equipada',
        'Mais sessões de meditação',
        'Mais vagas',
        'melhor sinalização',
        'LOCAL MAIS APROPRIADO',
        'Mais disponibilidade',
        'Mas sugestão seria aumentar áreas com sombras pro amanhecer.',
        'A academia poderia ser maior e com mais equipamentos e com mais sombra. Malhar no sol com aquele calor e impossivel',
        'ACADEMIA MELHOR',
        'Mais espaço para fazer yoga, poderia ser embaixo das árvores assim mais pessoas poderiam participar',
    ]
  },
  {
    name: 'Horários',
    items: [
        'horário menos quente', 
        'Ter aulas o dia todo na academia',
        'Mais horários de aulas funcionais e yoga',
        'Mais horarios disponiveis kkk',
        'o horario da academia ficava limitado por conta do beach Club',
        'Os horário, ser do meio dia em diante'
    ]
  },
  {
    name: 'Informações',
    items: [
        'Divulgar melhor sobre como utilizar, não sabiamos se era aberto pra todos participar, assim como divulgar que o beach club fica aberto durante o dia para as pessoas frequentar', 
    ]
  },
  {
    name: 'Outros',
    items: [
        'Acho que poderia ser mais facil para marcação e atividades aquaticas tambem, passeios, etc', 
        'Outro2',
        'Para mim é mais pagação do que usar',
        'Retirar elas 😂',
        `1. Apesar de não ter visto no evento, vi um post sobre soro anti-ressaca e outras medicações endovenosas que estavam sendo fornecidas por um suposto "médico". Achei isso ridículo e carece de evidências científicas. Lembrando que adm de medicações podem levar a efeitos adversos graves. 
        2. Perdi meu óculos no evento, mesmo preenchendo o forms não recebi nenhuma resposta, mesmo que negativa. Total descaso do achados e perdidos.`,
        'Massagens, nos pés, principalmente',
        'Atividades com interações artísticas guiadas, como por exemplo uma oficina de pintura com tintas naturais feita em papel reciclado',
        'Mais vagas',
        'Cerimônia do Cacau',
        'Mais restaurantes',
        'mais opções de refeições na Villa, e estender o horário um pouco..!',
        'Pool party'
    ]
  }
];

export function SugestaoAtividade(){
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  // Referência para o elemento contendo os botões
  const categoryButtonsRef = useRef<HTMLDivElement>(null); 

  const handleCategorySelect = (index: number) => {
    setSelectedCategoryIndex(index === selectedCategoryIndex ? null : index);
    // Abrir a lista quando uma categoria é selecionada
    setIsListOpen(true); 
  };

  const handleCloseList = () => {
    setSelectedCategoryIndex(null);
    // Fechar a lista quando o botão "Fechar Lista" é clicado
    setIsListOpen(false); 
     // Scroll para o topo dos botões "Positiva" e "Negativa"
     categoryButtonsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

// Calculando a quantidade total de items
  // const totalItems = categories.reduce((total, category) => total + category.items.length, 0);

  // Criando os dados para o gráfico de pizza
  const data = categories.map(category => ({
    name: category.name,
    value: category.items.length
  }));

   // Definição das cores personalizadas
   const colors = [
    '#005B7A', '#273617', '#618A86', '#6CB097',
    '#858547', '#FFAD0B', '#DA8044', '#B07145', 
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} ref={categoryButtonsRef}> {/* Referência para o elemento contendo os botões */}
      <h2>Sugestão sobre as atividades oferecidas</h2>
      <div style={{ width: '100%', marginTop: '20px' }}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(2)}%)`}
            >
              <Tooltip formatter={(value: number, name: string, props) => [`${value} (${(props.payload.percent * 100).toFixed(2)}%)`, name]} />
              {data.map((_, index) => (
                 <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: '100%'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {categories.map((category, index) => (
            <div key={index} style={{ margin: '0 10px' }}>
              <button
                onClick={() => handleCategorySelect(index)}
                className={selectedCategoryIndex === index ? 'selected' : ''}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>

        {isListOpen && selectedCategoryIndex !== null && (
          <div style={{ marginTop: '20px', width: "100%" }}>
            <h3>{categories[selectedCategoryIndex].name}</h3>
            <ul>
              {categories[selectedCategoryIndex].items.map((item, index) => (
                <li className='lista' key={index}>{item}</li>
              ))}
            </ul>
            <button className='backRef' onClick={handleCloseList}>Fechar Lista</button>
          </div>
        )}
      </div>
    </div>
  );
}