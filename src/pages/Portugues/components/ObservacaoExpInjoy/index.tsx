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
      'Super solicitos, mas a pousada era mais distante da festa que o que anunciado',
      'Incrível',
      'excelente',
      'Nada a reclamar. Foi tudo muito bom.',
      'Atendimento ágil, equipe super solicita a qualquer momento. Atendente BEL gratidão 🥰',
      'Tudo certo, só alguns detalhes de info que demoram para responder',
      'Excelente',
      'BOA',
      'tudo otimo, so o restaurante do hotel no beach club precisa melhorar. Restaurante do hotel nao do beach club que era muito bom.',
      'Injoy foi otima, mas tive problemas com a acomodação',
      'Foi tudo tranquilo, sem estresse',
      'Maravilhoso',
    ]
  },
  {
    name: 'Negativa',
    items: [
        'Mais claros no tipo de acomodacao',
        'péssimo, não fecho mais com eles. Suporte não resolveu o problema que tive com os ingressos, não sabem informar nada direito e quem fica lesado somos nós.',
        'Não flexivel',
        'Foi pessimo! Nossa acomodação era horrível, velha, no segundo dia tivemos problemas com os dois ar condicionado, ficamos passando calor por todos os dias, nosso apartamento era cheio de mofo, os travesseiros eram pretos de mofo, tenho asma, tive crise alérgica, assim como outros 2 ocupantes do apartamento! A todo instante pedimos ajuda á Injoy, e não obtivemos auxilio e nenhuma alternativa de melhorias… pedimos ao menos travesseiros novos, e nem isso foi atendido! A vontade é de postar nas redes sociais todas as fotos, pois é assustador! Fomos fazer comida um dia, as panelas estavam guardadas sujas, com resto de comida! Falta de higiene total! A injoy loca vom terceiros esses apartamentos, como nos foi explicado, porem o minimo é a empresa ter alguém que possa checar esses locais antes de deixar o cliente entrar! Tenho certeza que eles nem sequer analisaram o apartamento! Custou um absurdo de caro, e foi pessimo! Injoy nunca mais! Obrigada',
        'Eu tive alguns problemas no meu apto (Carneiros Beach Resort). Um dos chuveiros não estava com água quente a apesar de reportarmos o problema diversas vezes, não fomos atendidos. Também tivemos problemas com a limpeza do apto, mas após reclamação o problema foi sanado.',
        'Muito desorganizado e resort sujo',
        'Pessima experiencia',
        'Comunicação muito falha : atendentes nao entendiam perguntas simples, precisavamos de sempre +3 emails para tirar uma dúvida simples (ex: se a bicama era casal ou solteiro!), etc.',
        'Ruim',
    ]
  }
];

export function ObservacaoExpInjoy() {
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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
      <h2>Experiência Injoy</h2>
      <div style={{ width: '100%', marginTop: '20px' }} >
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