import { useRef, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,  Cell, Tooltip } from 'recharts'; // Certifique-se de importar os componentes necessários


interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Elogios',
    items: [
      'Having the Moet stand at Villa Mouton was amazing :)',
    ]
  },
  {
    name: 'Tipo',
    items: [
      'Baer Mate nas próximas edicoes e se possível um bar de drinks (é dificil de operacionalizar, eu sei)',
      'tequilla, more non alcoholic option but not redbull',
    ]
  },
  {
    name: 'Marca',
    items: [
      'Better tequila brand',
      'Better Tequila. Jose Cuervo is really bad',
    ]
  },
  {
    name: 'Outros',
    items: [
      'More choices… at least no waiting time so that was good',
      'No more redbull cup, is the worst I ever had',
    ]
  }
];

export function SugestaoBarBebidas() {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} ref={categoryButtonsRef}> {/* Referência para o elemento contendo os botões */}      <h2>Sugestão sobre o atendimento do bar ou tipos de bebida</h2>
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