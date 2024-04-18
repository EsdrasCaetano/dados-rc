import { useRef, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,  Cell, Tooltip } from 'recharts'; // Certifique-se de importar os componentes necessários


interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Alimentação',
    items: [
      'deveriam ter opções veganas e vegetarianas.',
      'Buffet festas permanência até final dos eventos',
      'Poke achei mt ruim',
      'No final a alimentação já não tinha todas as opções.',
      'O poke esse ano estava pior que ano passado e a loja de conveniência fechava cedo e tinha poucas opções',
      'Restaurantes precisam melhorar a comida e o tempo de atendimento',
      'Voltar com a agua de coco liberada',
      'Aumentar estrutura de bares e restaurantes',
      'Deveria ter mais opções vegetarianas',
      'O cardápio do the poke precisa ter mais opções',
      'Algum restaurante mais sofisticado',
      'Acredito que deveria ter mais opções de comida/restaurantes',
      'Clareza na comunicação e no trartamento dos clientes',
      'Mais opções de comida vegetariana e vegana',
      'Colocar mais variedades de comidas',
      'MAIS RESTAURANTES',
      'Mais ambiente para almoçar e jantar',
      'Pizza ruim',
      'Picolé e sorvete!',
      'mais opções de comida talvez',
      'Colocar hambúrguer',
      'Melhorar as opções de comida, sou vegetariana quase n tinha opção',
    ]
  },
  {
    name: 'Atendimento',
    items: [
        'Mais agilidade no atendimento',
        'Entrega devagar',
        'No réveillon agua era p ter facil acesso e n precisar ir p p bar enfrentar fila p pegar agua',
        'Muita fila na bebida',
        'Mais agilidade na Carneiros STORE',
        'Retirada do buffer antes de terminar',
        'Que seja mais rápidos',
        'EM RELAÇÃO AO MERCADO, PODERIA SER MAIS BEM EQUIPADO, COM MAIOR VARIEDADE DE PRODUTOS',
        'As vezes que fomos tentar comer , os parceiros não estavam preparados para o atendimento. Desde então não fomos mais',
        'Precisamos de mais variedade',
        'Bar no Villa Motoun lotado demais. Demora uns 45min 1 drink.',
        'Melhorar a dinamica e organização do serviço do beach club',
        'Não deram opção para solucionar o problema',
        'Salão de beleza com atraso de 2 horas',
        'Serviço de delivery',
        'maravilhoso - na proxima sem face id, comojudeu isso foi um pouco perrengue.',
        'Mais opções de entrega para quem esta fora do local',
        'O sistema de confirmação da compra do ingresso é péssimo. Deu um trabalhão confirmar e perdi muito tempo',
        'Agilidade nos horários agendados',
        'não gostei do reconhecimento facial, achei chato, e pra resolver e comprar/vender ingresso eh bem mais complicado que as outras festas',
        'A loja foi massa! O salão,marquei horário no dia da virada para fazer escova, cheguei lá estavam mega atrasados!!! Tive que voltar e me virar 😭. Central de atendimento nao tinha horário que atendiam. Minha amiga perdeu uma bolsa. Ficamos um tempão no dia seguinte aguardando alguém chegar. Se soubéssemos que era 12h, tinha ido no horário. Mas depois que chegaram, fomos bem atiradas e a bolsa foi encontrada.',
        'Clareza na comunicação e no trartamento dos clientes',
        'Facilitar teanfrrencia de ingresso quando decidimos não ir porque são muitos dias de festa, nem sempre temos disposição',
        'Melhorar no atendimento, resgatei pela segunda vez para ser respondido.',
        'Melhoria no tempo de preparo dos alimentos',
        'Atendimento demorado',
        'O mouton precisa melhorar muito o atendimento, principalmente no restaurante',
        'Uma forma mais fácil de entrar na praça de alimentação depois que o show começa',
        'Melhorar atendimento na loja de roupas',
    ]
  },
  {
    name: 'Estética',
    items: [
      'Salão para cabelo e maquiagem',
      'Salão de beleza',
      'Salão de beleza com atraso de 2 horas',
      'Botar salão de beleza da região de recife.',
    ]
  },
  {
    name: 'Informações',
    items: [
        'Aumentar a propaganda, facilitar o conhecimento das pessoas sobre o que é oferecido e como usufruir', 
        'Só que pedimos um vinho para três , demoro uma hora ou mais e o vinho não tinha vindo, pedi pra cancelar. Depois descobrimos que só quem estava hospedado em algum lugar poderia pedir o vinho. Me senti envergonhada por pedir várias vezes e não levarem pra mim, poderiam ter pelo menos avisado para não passar esse constragimento.',
        'Não encontrei a Carneiros Store',
        'Ter o mínimo de informações possíveis para conseguirmos chegar no evento. Foi ridículo no Ingresse ter a localização errada e não co seguirmos achar o local da festa e quase perdermos o show',
        'Melhor as informações fornecidas pelos funcionários, eles não sabiam informar sobre as atividades rituals',
        'Colocar horários certos',
    ]
  },
  {
    name: 'Outros',
    items: [
        'Só gostaria de saber o reembolso do black cofee , ainda não fizeram', 
        'Venda casada de cartão dentro da festa. Ou pago para ter o cartão ou não consumo? Não poder sair até a carneiro store e voltar para a festa. Falta total de informação sobre onde seria o hotel com o show da tarde. Esse item bem precário.',
        'Preços menos extorsivos para transporte. Andar 3 minutos de táxi custou a média de 50 reais .',
        'Diminuir o preço',
        'Fazer revista nas pessoas no mouton , teve uma ameaça de um cara armado na festa',
        'Melhorar o achados e perdidos.',
        'PerServiços mais acessíveis financeiramente',
        'estou tentando solicitar o estorno do convite da festa do beach club do dia 02/01',
        'Recreação infantil',
        'colocaria um acesso separado para vans taxi e motorista para evitar transito',
        'Estava com um valor muito elevado',
        'Poderiam deixar atravessar o evento para quem chegou do lado praia mas estava acompanhado de alguem que precisava resolver temas de convite do outro lado',
        'Senti falta de uma bebida mais leve bebida mais óbvia como Fanta/sukita, pois pra quem não bebe energético e não conhece as outras bebidas fica complicado',
        'Oferecer a festa noturna em mais de um ambiente',
        'Festa até as 7:00',
        'Melhorar o banheiro',
        'Tudo muito caro, exploração somente por estar no mouton',
        'As pessoas que estão no Beach Club poderiam ter livre acesso (entrar e sair do BC para comer na Villa Mouton, por exemplo)',
        'Serviços relacionado ao evento tudo muito bom, somente a logística para a festa (transporte) que na cidade é um pouco ruim, mas é possível conseguir alguns taxistas ou pessoas que fazem uber por fora.',
        'Algum serviço de recuperação pós estragos nas festas ...',
        'Péssimo pós venda, tive um grave problema e até hoj e não me responderam no sac, inclusive fui pessoense e não me atenderam',
        'Não colocaria terapia de injetaveis da maneira como foi “vendida”',
    ]
  }
];

export function SugestaoServicos() {
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
      <h2>Sugestão sobre os serviços oferecidos</h2>
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