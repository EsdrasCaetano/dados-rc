import { useRef, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,  Cell, Tooltip } from 'recharts'; // Certifique-se de importar os componentes necessários


interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Positiva',
    items: [
     'Yes, the place is really Nice. I think that Reveillon carneiros need to make an effort to bring more Djs like Keinemsuik and also extend the days of party until 6,7 of january',
     'Brazil is the perfect place to celebrate NYE, but Reveillon Carneiros definitely brought it to another level. Line-up, organization, structure, quality, safety, people, everything nota 10. The countdown itself however was disappointing, no music, some minimum fire works far in the sea, this could be way better.',
     'Sim, o line up estava fenomenal, mas os horários dos DJs poderiam ter sido montados de uma melhor forma!',
     'I had an amazing time! Thank you',
     'Please bring Keinemusik every year!!',
     'Very expensive, but very good 😎',
     'Need better parking and bathroom imporvements! Everything else is amazing!',
     `This was the best party that I've ever been to (beating out Camarote Salvador), so thank you for putting on such an amazing event!`,
    ]
  },
  {
    name: 'Negativa',
    items: [
      'super expensive but not worth for it',
      'I ask already for refund of black coffe at Villa mouton beach because I get inside of the party and I left when u said the black coffe will not play here!',
    ]

  }
];

export function ConsideracoesFinais() {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} ref={categoryButtonsRef}> {/* Referência para o elemento contendo os botões */}      <h2>Sugestão sobre o open food</h2>
      <h2>Considerações Finais</h2>
      <div style={{ width: '50%', marginTop: '20px' }}>
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