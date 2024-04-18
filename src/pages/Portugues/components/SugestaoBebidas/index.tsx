import { useRef, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,  Cell, Tooltip } from 'recharts'; // Certifique-se de importar os componentes necessários


interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Atendimento',
    items: [
      'Drinks que estavam sendo preparados tinham um desproporção entre a quantidade de destilado para a quantidade de energético.',
      'Atendentes muito lentos, não pareciam estar felizes ou bem remunerados. Bares cheios, bebidas feitas muito forte e lentidão para entregar um drink.',
      'No começo ficou confuso de entender que todas as bebidas podiam ser pegas em todos os bares.',
      'Aumentar a quantidade de espaços para entregar bebidas, tinha noites com muita fila. Poderiam incluir para os drinks frutas vermelhas natural (em Pipa no ano que fui tinha e achei delicioso)',
      'Colocar mais bar principalmente no dia 31 estava muito lotado',
      'Treinar os funcionários',
      'Colocar mais um ponto de vodka e gym',
      'Evitar filas',
      'Melhorar atendimento dos bares no beach club. Poucos funcionários para muita gente comprando bebida',
      'COLOCAR SAL E LIMÃO PARA TEQUILA OU UMA BARRACA DE TEQUILA',
      'Algumas vezes demorou',
      'Picos de muita fila',
      'Mais atendentes, copo mais resistente',
      'Atendimento lento, pouca gente nos bares',
      'Garçons volante passando pela pista seria ainda mais perfeito!',
      'Ter pessoas que falem inglês',
      'Máquinas de Absolut muito boas porém atendimento no bar demorado',
      'Copos melhores, atendimento mais rápido',
      'Sim! Tava mto dificil pegar bebida no bar',
      'Fornecimento de água em lugares estratégicos, mais próximos ao palco etc',
      'Aumentar a quantidade de bares ou pessoas servindo',
      'Poucos bares disponíveis , muita fila',
      'Mais atendentes',
      'Mais atendentes',
      'Mais atendentes nos bares. Drinks mais elaborados nas próximas edições',
      'Podia ter mais opções pelo valor da festa, e mais atendentes no bar',
      'Menos gelo nas bebidas',
      'Mais atendentes',
      'Todas muito boas, mas deveria servir chopp de heineken perto da pista e não tão longe.',
      'Cerveja gelada..',
      'mais maquinas de drinks',
      'Para o preço que pagamos, acho o atendimento muitas vezes demorado e',
      'Poderia ter mais um local para o Chandon poscionado do lado oposto à estande deles para facilitar e no dia 31 necessário mais atendimento, esse ano foi bem mais complicado para pegar bebida nesse dia.',
      'Bar com uma espera maior que o ano anterior e bebida muito aguada',
      'Fila pra pegar bebida',
      'Mais pessoas para fazerem drinks, que às vezes demoravam para sair.',
      'Os bares dos pontos estratégicos deveriam concentrar mais funcionários, muitas vezes tinham filas',
      'Ruim',
      'Bares volantes',
      'Colocar mais funcionários nos bares e mais ativações como a da Absolut! Foi lacre',
      'Acho poderia ter mais bares, no dia da virada foi um pouco ruim e demorou bastante para pegar bebida',
      'Alguns atendentes eram um pouco lentos',
      'Mais bar',
      'Ter um bar mais centralizado',
      'Deveria ter bares mais perto do palco, tinha bebidas que tinha que ir longe para buscar',
      'No bar da Heineken estava demorando bastante, foi visível que a divisão e localização das bebidas não estava bem distribuída',
    ]
  },
  {
    name: 'Elogios',
    items: [
      'Aperol esse ano foi TUDO! Tem de continuar!',
      'Tudo funcionou muito bem',
      'mantenha',
      'Bebida excelente',
      'Tudo perfeito',
      'Continuar maravilhoso da forma que estava',
      'Tudo absolutamente impecável.',
      'Atendimento incrível, todos muito atenciosos e amorosos',
      'Ambos estavam perfeito.',
      'Tudo perfeito',
      'Tudo excelente',
      'Extremamente bom',
      'Os vinhos na latinha foi a melhor invenção que já vi e fiquei apaixonada, o problema é que toda vez tinha q sair do camarote pra ir buscar, nunca podiam trazer junto com o combo. Mesmo a festa sendo open bar.. inclusive se puderem me mandar a marca fico feliz',
      'Tudo perfeito no bar, impecável',
      'Atendimento excelente. atendentes muito simpáticos e prestativos',
      'As bebidas estavam ótimas, geladinhas e o atendimento rápido.',
      'amei o bar da absolut',
      'Máquinas de Absolut muito boas porém atendimento no bar demorado',
      'Tudo muito bom',
      'Tudo perfeito',
      'Não, estava maravilhoso',
      'Tudo perfeito',
      'Perfeito.',
      'Perfeito.',
      'tudo perfeito! amei, rapidez e qualidade!',
      'Atendimento excelente e estrutura impecável!',
      'Perfeito, não tenho',
      'Me senti totalmente satisfeito com as opções',
      'foi tudo otimo',
      'Tudo perfeito',
      'Tudo impecavel',
    ]
  },
  {
    name: 'Tipo',
    items: [
        'Xeque Matte e Mikes - não tinha',
        'Café com licor',
        'Mais drinks',
        'Algumas bebidas não alcoolicas como chá (feel good) entre outros seria uma boa.',
        'Deveriam colocar algum suco',
        'Mais drinks tipo caipirinha',
        'Itens de Zero açucar, mais opções',
        'Água com gás',
        'Tequila',
        'Drinks sem alcool',
        'Bebidas Diageo e sugestão de drinks simples e montados, como Negroni por exemplo',
        'Caipiroscas',
        'Nas festas de noite precisava de mais variedade',
        'Faltou shots como licor 43',
        'Chope',
        'Bebidas muito infantis.. vodka com redbull?? Podia ter mais drink',
        'Falta shots. Balena, 43.',
        'Mais opções de RedBull e misturas',
        'mais tipos de drink e drinks mais elaborados',
        'mais opções para drinks, além de tônica e energético',
        'Faltaram opções de drinks mais elaborados ao invés de apenas misturas de refrigerante ou energético com os destilados.',
        'Faltou licor',
        'Caipifrutas preparadas na hora',
        'Opção de Caipiroska',
        'Só faltou shot de licor 43 kkk',
        'Sucos naturais de frutas da estação',
        'A noite talvez incluir Caipiroskas',
        'Drinks',
        'Mais atendentes nos bares. Drinks mais elaborados nas próximas edições',
        'Podia ter mais opções pelo valor da festa, e mais atendentes no bar',
        'Poderiam colocar moscow mule e drinks elaborados na festa noturna',
        'Acho que pelo o preço, as bebidas poderiam ser mais selecionadas ou ter mais opções',
        'tudo incrível',
        'mais maquinas de drinks',
        'Mais variedades de sucos',
        'Poderia ter Skol Beats; e alguma outra bebida que fosse de shot',
        'BAR DRINKS DIVERSIDADE',
        'Tudo ótimo, poderia ter Moscow mule',
        'Skol beats seria uma opção na carta',
        'Faltou agua com gás !!!',
        'Coloquem drinks. Pelo menos caipirinha!!!',
        'Ótimo!! Mais tequila',
        'Bar de drinks',
        'cosmopolitan',
        'Eu n bebo álcool, poderia ter opções de drink sem álcool',
    ]
  },
  {
    name: 'Marca',
    items: [
        'mudar a marca do whisky',
        'bebidas premium',
        'Ciroc',
        'Trocar a marca da água de coco !',
        'Ballena',
        'Pouca variação de cervejas',
        'colocaria corona e mais freezer',
        'Bebidas de anos anteriores foram mlrs e os copos poderiam ser de plásticos',
        'Mudar a marca do whisky e tirar agua de papelao',
        'Acredito que poderia ter um upgrade no openbar, whisky mais top',
        'Oferecer uma marca de tônica melhor. E reforçar o atendimento no dia da virada.',
        'A edição anterior era melhor. Achei que seria Gold Label e tanqueray. Mas não era…',
        'O espumante poderia ter sido francês ao menos na hora da virada',
        'Melhorar bebidas TANQUERAY no mínimo',
        'Acho que pelo o preço, as bebidas poderiam ser mais selecionadas ou ter mais opções',
        'pelo preço, deveriam ter bebidas melhores, como gin melhor',
        'Para o nível do evento a marca da vodka e do gin poderia ser superior',
        'Acho que as bebidas oferecidas poderiam ser de uma qualidade um pouco superior visto que o preço do réveillon é alto. Entretanto, considero o Reveillon Carneiros o maior do Brasil.',
    ]
  },
  {
    name: 'Outros',
    items: [
        'aquele copo de papel ficou bem ruim',
        'Agua n deveria precisar pegar fila. Era p ter geladeiras de agua',
        'Sim! No Moution como já falei anteriormente. Passei mais de uma hora esperando um vinho, falei com três garçons e nenhum trouxe. Depois descobrimos que só poderia pedir o vinho quem estava hospedado em algum lugar. Me senti envergonhada por passar mais de horas com a mesa vazia sem nada pra beber, e indo atrás dos garçons, achei a festa incrível mas nessa questão do bar não gostei .',
        'deixar agua disponível em stands como foi disponibilizado red bull',
        'Apenas que os copos de papel eram muito ruins... era preciso já pegar vários porque ele desmontava rápido. Vi algumas ações de copos feito de plástico reciclado retirado dos oceanos em outras festas, o que me parece uma alternativa bacana para não incentivar o consumo de plástico virgem e combinar com uma boa experiência com as bebidas.',
        'Por favor nunca tirem o open bar de Chandon :)',
        'Não gosto de água em lata.',
        'comida - tem q ter uma area de comida kasher',
        'estou tentando solicitar o estorno do convite da festa do beach club do dia 02/01',
        'Trocar os copos de isopor, usar de plástico mais rígido.',
        'Nada a ver ter que comprar um cartão e ficar recarregando',
        'Copos melhores, atendimento mais rápido',
        'Colocar apenas copos de plástico, os de papel derretiam na mão',
        'Copo de papel não é agradável pra beber',
        'Mais barata',
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} ref={categoryButtonsRef}> {/* Referência para o elemento contendo os botões */}
      <h2>Sugestão sobre o atendimento do bar ou tipos de bebida</h2>
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