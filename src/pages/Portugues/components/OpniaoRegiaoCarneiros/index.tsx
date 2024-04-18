import { useRef, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,  Cell, Tooltip } from 'recharts'; // Certifique-se de importar os componentes necessários


interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Elogio',
    items: [
      'deveriam ter opções veganas e vegetarianas.',
      'Lugar mágico',
      'Praia maravilhosa porém sem estrutura na cidade.',
      'explêndida',
      'Maravilhoso',
      'Local perfeito para o Reveillon',
      'Falta um centrinho, uma estrutura um pouco mais consolidada… mas as praias e o lugar da festa são excelentes',
      'Um paraíso, apenas o transporte que as vezes é dificil de encontrar.',
      'Paraiso na Terra',
      'Local super bem organizado',
      'Lugar perfeito! Eu amo tanto esse lugar e acho muito incrível os projetos sociais de carneiros, acho que deveriam divulgar mais a parte social que o evento traz que é incrível!',
      'Não pois fiquei feliz em estar com minha família em Carneiros',
      'Muito linda',
      'Fantástica, ilha paradisiaca.',
      'Carneiros representa a essência do Brasil para o mundo! ♥️',
      'Foi tudo ótimo, a  ÚNICA observação seria a retirada do buffer antes de terminar a festa. Isso é muitooooooo importante',
      'Perfeito',
      'Tudo perfeito, porém todos os restaurantes são muitos demorados',
      'Cidade incrível',
      'Maravilhosa',
      'Foi tudo excelente !!!! Voltaremos',
      'Espetacular. Tenho apartamento na região, pois a região é um verdadeiro paraíso.',
      'Lugar mais mágico do nosso brasil, só quem vive o reveillon de carneiros entende ✨',
      'Espetacular! Atmosfera surreal',
      'Perfeita',
      'Praia linda, lugar totalmente agradável',
      'Lindo',
      'Melhor lugar pro melhor reveillon, sem dúvidas.',
      'Lugar maravilhoso',
      'Praias lindas. As estradas não estavam boas no começo do evento, mas foram feitas melhorias durante. Ajudou bastante.',
      'maravilhoso',
      'Fiquei muito impressionada com as belezas naturais da região e com a infraestrutura e ainda mais pelo fato de perceber que a região está pleno desenvolvimento',
      'Linda e acessível a várias outras lindas praias!',
      'Incrivel',
      'tudo perfeito!',
      'Elogio aos taxistas que estavam sempre prontos para nos atender. <3',
      'Muito bom',
      'Melhor réveillon sem dúvida ! Super experiência',
      'Paradisíaco, encantadora.',
      'O Réveillon Carneiros é o melhor em quesito estrutura e organização, além de reunir atrações incríveis, pessoas bonitas e boas energias.',
      'Lugar perfeito',
      'Lugar lindo! só elogios.',
      'SIMPLESMENTE PERFEITO, PARABENS PELA ORGANIZAÇÃO. FORAM OS DIAS MAIS FELIZES DA MINHA VIDA.',
      'Não poderia existir lugar melhor 🙏🏻🫶🏻',
      'Eu amei, acho a localização maravilhosa',
      'Paraíso',
      'tudo perfeito. faltou só atraçao do nordeste na line',
      'Maravilhosoooo o local',
      'Não vejo a hora de voltar!',
      'Lugar Perfeito, parecia um sonho',
      'Sensacional',
      'Lugar incrível com o melhor réveillon! Parabéns aos envolvidos',
      'Maravilhosa',
      'Sensacional!',
      'O lugar é mágico e lindo',
      'Tudo perfeito',
      'Lugar limpo, gostoso, acolhedor',
      'Lugar maravilhoso',
      'e o paraíso',
      'Amo Carneiros',
      'Carneiros é simplesmente um paraíso, lugar perfeito para o evento',
      'Simplesmente linda!',
      'Amo',
      'Perfeito!!!!!',
      'Foi incrível o lugar, estrutura, decoração, lineup, público, banheiros, apenas o buffet que ficou enjoativo ser a mesma coisa todos os dias, e não teve nada especial no dia da virada do ano, acredito que é a única coisa que poderia melhorar, do resto foi muito bom!',
      'Linda',
      'Lugar maravilhoso, com uma estrutura boa para receber turistas',
      'Nada a declarar, melhor reveion de todos os tempos, quero ir nos próximos anos com mais tempo.',
      'Exclusivo e confortavel',
      'Muito bom',
      'Muito bom',
      'A melhor praia do Brasil',
      'carneiros é surreal, um paraíso! minha primeira vez e eu amei tudo!',
      'Perfeito',
      'Muito boa',
      'Perfeito',
      'Sempre tive casa, praia top!',
      'Otima estrutura',
      'Perfeito em todos os sentidos, melhor Reveillon do Brasil.'
    ]
  },
  {
    name: 'Estrutura',
    items: [
        'Lugar espetacular , porém de difícil locomoção por falta de uber',
        'Região é legal, mas deixa a desejar em estrutura da cidade, restaurantes.',
        'Praia maravilhosa porém sem estrutura na cidade.',
        'Poderia melhorar os hotéis e deixar um valor mais real. Muito caro.',
        'Apenas estruturar melhor a rede de transporte Táxi, pois entendemos que não havia padrão na cobrança. Dar mais viabilidade no trajeto pela areia',
        'Falta um centrinho, uma estrutura um pouco mais consolidada… mas as praias e o lugar da festa são excelentes',
        'A região carece de muitos serviços básicos, não tem uma estrutura para receber esse porte de evento. Achei a cidade muito fraca, não tinha nada para fazer, nenhum restaurante decente, enfim. Só valeu pelo reveillon e as praias.',
        'Falta muita estrutura de transporte. O evento poderia pensar em algo assim, sei que é uma cidade pequena que no ano novo acaba recebendo um número elevado de pessoas. Seria até bacana pensar na estrutura da cidade como forma de investimento para a comunidade.',
        'Infelizmente a região sofre com falta de infra estrutura adequada para receber essa quantidade de turistas no reveillon. Nós só não passamos "fome"pq minhas amigas já conheciam a realidade e contrataram uma mulher pra fazer compras o mercado e cozinhar pra nós. Mas encontrei vários dias estrangeiros caminhando na praia que pediam local para almoçar pq estava tudo lotado. E também a comida ou lanches vendidos no ambiente do beach club eram muito caros para poder lá todos os dias. Acredito que poderiam aumentar a quantidade de restaurantes com preço mais acessível para as refeições.',
        'O banheiro do evento, muito pouco banheiro…e muito quente',
        'acho que falta estrutura de restaurante para suportar a quantidade de pessoas no período, todos estavam super lotados e cobrando 70 reais apenas para entrar.',
        'Praia linda, podia ter mais opções de restaurantes',
        'Melhoria na estrada',
        'Praia bonita, mas cidade sem estrutura. Necessário alugar uma casa muito boa para ficar nela',
        'Adorei a estrutura, só achei que poderiam ter mais opções de restaurantes na cidade',
        'Mais opções de hospedagem',
        'melhorar a estrada, muitos buracos',
        'Os alojamentos são fracos, tem falta de sitios para comer',
        'Único problema é a estrada extremamente perigosa . Por esse motivo é do line up da festa , eu não voltaria . O restante excelente',
        'Falta restaurante',
        'Região de Carneiros é linda e boa, mas se aumentar mais a festa nao vai comportar o publico com qualidade',
        'Pouca opção de hospedagem',
        'Falta infraestrutura para receber os turistas',
        'Melhorar gastronomia',
        'MELHORAR LOCAIS DE COMPRAS BEBIDAS E COMIDAS PARA AS CASAS',
        'Região muito humilde e cidade mal cuidada, contrastando com a beleza natural.',
        'Estrada é péssima, sem iluminação',
        'Poucas opções de restaurantes, beach clubs e hoteis',
        'Carneiros é incrível, o que não gosto é apenas a dificuldade na região de encontrar estabelecimentos para alimentos, e etc, próximos aos hotéis e casas de modo geral.',
        'Cidade sem estrutura para receber um evento desse porte',
        'Perfeita, faltando apenas mais opcao de locomoção como uber e mais sinalização poderia ajudar',
        'mais sinalização na entrada!',
        'O local é bom, mas não tem uma estrutura completa pra receber muitos turistas ao mesmo tempo. (Restaurantes e beach club)',
        'Local em si muito bonito, mas logística até o destino um pouco difícil (estrada ruim, etc)',
        'Difícil locomoção',
        'Única dificuldade foi em encontrar água na cidade após a virada do ano e a distância dos mercados no centro para quem estava na região próxima a festa',
        'tivemos um pequeno acidente com um amigo, e o hospital mais proximo ficava em tamandare, não tem muita estrutura em carneiros, e tudo tem que ser feito de carro',
        'Boa, mas o transporte (Uber, etc) pode melhorar',
        'Acesso ruim',
        'Carneiros é lindo. Estradas de acesso ruins',
        'Lugar maravilhoso, mas infraestrutura péssima, luz caindo no reveillon, todos os restaurantes/beach clubs que eu tentava ir pra almoçar sempre estavam "lotados" e não deixavam o carro passar, mas se você entra pela areia SEMPRE tem mesa disponível. Fiquei 1h30 aguardando pra entrar de carro no BoraBora, quando entrei, tinha umas 30 mesas vazias. Fazem hora com a cara do cliente, total falta de respeito. E não é só eles que fazem isso, TODOS fazem.',
        'Pouquíssimas opções de restaurante para os dias que não íamos às festas',
        'A estrutura da Região é muito falha. Nao tem agua, comida, e energia suficiente para todos. Fora que a qualidade dos produtos e serviços vendidos fica aquem do evento e das pessoas que o freq',
        'Poucos bares/restaurantes funcionando na paia',
        'Melhorar estradas na cidade. Estradas extremamente esburacadas',
        'Pouca estrutura de restaurantes e mercados para a quantidade de turistas',
        'Sem estrutura a cidade',
        'A infraestrutura da cidade é péssima.',
        'mais restaurentes e beach clubs',
        'Mais opções de restaurantes',
        'Dificuldade em encontrar locais para almoço / bar. Todos fecham muito cedo ( teve dias que fecharam as 14h ) além do serviço ser muito ruim. Mas sinto que fomos bem atendidos na medida do possível',
        'Região linda porém sem estrutura de praia e variedade de restaurantes',
        'Acesso a transporte ruim.',
        'Lugar mto bom, falta restaurantes e quiosques de praia',
        'A estrada é mal conservada, sem sinalização.',
        'Excelente, mas infra da cidade ainda precisa melhorar.',
        'A praia é linda, mas infelizmente falta estrutura',
        'Muito lindo. O que falta em Carneiros é um centro aonde você pode curtir fora da festa. Foi muito da mesma coisa todo os dias',
        'Falta de estacionamento',
        'Falta infraestrutura, porém foi incrível estar por lá! realmente precisa ser melhorado nesse aspecto, mas com certeza irei voltar',
        'O lugar é paradisíaco, mas a comida e os serviços oferecidos são pessimos, comida ruim e espera, atendimento pessimo',
        'Acredito que falta mais restaurantes pra suportar todos do réveillon',
        'Nao tem restaurante bom perto, poderia ser em uma cidade com mais opcoes',
        'Quem abrir uma farmácia/mercado na região vai ser dar bem ! O acesso via Recife não chega a ser supresa, mas poderia ser melhor (estradas bem ruins e mal sinalizadas)',
        'Melhorar opções de transporte e de restaurantes.',
        'Os restaurantes não comportam a necessidade dos consumidores, atendimento pessimo e muita demora para os pedidos ficarem prontos, pouca variedade de opções de comida',
        'Perto de onde fico, sendo ipojuca. Porém a estrada para chegar é ruim.'   
    ]
  },
  {
    name: 'Outros',
    items: [
        'Mao de obra muito desqualificada, difícil de ser atendido com coisas simples',
        'Aguardando reembolso do black Cofee',
        'Não fiquei hospedada em Carneiros.',
        'Preços abusivos, mas é normal da época',
        'Necessário a concientizacao dos participantes (publico ) de não jogar copos e outros na praia , especialmente pós festa saindo pela praia. Tenho costume de correr pelas manhãs , e via muita sujeira, pessoas da prata jogando na areia. Maior dedicacao da festa nesse sentido de sustentabilidade.',
        'pouca coisa pra fazer, praia linda',
        'Beach club com serviço de praia e musica para banhistas',
        'Os fogos da virada foram fraquíssimos comparados aos show que tivemos.',
        'estou tentando solicitar o estorno do convite da festa do beach club do dia 02/01',
        'Gostei muito da estrutura, mas as bandas como "Saulo", "Silva" e outras não combinaram com a festa, nem com o público. Nos dias em que não havia música eletrônica, tanto o clube quanto a festa à noite ficavam vazios!',
        'Poucas opções de restaurantes, atendimento ruim, deveria ter mais lugares de praia para as pessoas se encontrarem e curtir um local agradável',
        'Nao foi é otimo o local, seria bom no valor do ingresso colocar transporte de recife para carneiros no pacote de ingresso e talves ate volta con vans no dia 3 ou 2',
        'Preços muito elevados, especialmente do taxi',
        'TRANSFER AOS EVENTOS',
        'Não tem muito o que fazer, especialmente se ficar durante 8 dias, o foco fica nas festas mesmo',
        'A logística ainda é muito complexa na cidade e temos poucas informações sobre restaurantes, acesso à praia;',
        'um saco fechado de 10kg de pétalas de flores caiu as 5:30h da manhã na praia a menos de 1m de mim e do meu marido. Logo a produção foi retirar para esconder o que aconteceu. Muito perigoso e irresponsavel',
        'Organização ruim',
        'Muito calor na festa',

    ]
  }
];

export function OpniaoRegiaoCarneiros() {
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
      <h2>Opinião sobre a região de Carneiros</h2>
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