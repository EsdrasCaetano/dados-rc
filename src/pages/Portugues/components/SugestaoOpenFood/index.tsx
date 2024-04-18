import { useRef, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,  Cell, Tooltip } from 'recharts'; // Certifique-se de importar os componentes necessários


interface Category {
  name: string;
  items: string[];
}

const categories: Category[] = [
  {
    name: 'Estrutura',
    items: [
      'Mais lugares para sentar',
      'mais local para sentar',
      'mais mesas e lugares para sentar',
      'Faltaram mesas pra sentar e comer direto',
      'Precisa de mais mesas',
      'Falta de espaço pra sentar',
      'Mais locais para sentar para comer, pois comemos em pé. Desconfortável',
      'Meu deus que comida boa! Sugiro mais lugares para sentar, maior quantidade de mesas, pois na hora de pico, não tinha lugar para todos sentarem e comer.',
      'Aumentar a área de mesas e cadeiras',
      'Área para sentar era pequena, todos os dias tínhamos mta dificuldade para conseguirmos sentar',
      'Mais espaço para sentar',
      'mais variação de menu, mais mesas e cadeiras',
      'Mais mesas e cadeiras',
      'Pouca variedade, dando a impressão que não estava suportando a quantidade de pessoas no dia da virada, bem como foi decaindo do primeiro ao último dia.',
      'Ele é espetacular! parabéns! esse ano só foi mais dificil de sentar para comer nos últimos dias, mesmo chegando cedo na festa.',
      'faltaram opções que conversem mais entre si; uma parte mais de massas, outra com frios; uma parte mais de fast food como pizzas artesanais e hambúrgueres vegetarianos seria ótimo',
      'Mais mesas',
      'Ampliar a quantidade de mesas'
    ]
  },
  {
    name: 'Sobremesa',
    items: [
      'Maior variedade entre os dias, mais opções de sobremesa',
      'Faltou sobremesa!',
      'Faltou sobremesa',
      'Não vi mesa de sobremesas. Tinha?',
      'Melhorar as opcoes de sobremesa',
      'Sobremesas melhores e mais risotos',
      'Mais opções de sobremesa e café da manhã todos os dias',
      'Poderiam incluir um picolé ou sorvete',
      'Achei que faltou mais opções de doce para sobremesa',
      'Mais sobremesas disponíveis',
      'Pouca opção de doces',
      'Estava maravilhoso, na parte de doces, poderia ter mais opções',
      'Ano passado tinha muitas opções de ano deixou a desejar. Principalmente no ano novo? Poucas sobremesas',
      'Perfeita as comidas e serviço! Só colocaria um pouquinho mais de opção de doce ou fruta/sorvete. A cocada de todos os dias estava INCRÍVEL!! E o café também. 🫶🏼',
      'Faltou sobremesas, tortas, sorvete,docinhos, açaí , e barracas pela festa de picole por exemplo.',
      'Mais opções de sobremesas',
      'SOBREMESAAAA mas tava perfeito',
      'Picolé e sorvete!',
      'Variar sobremesas'
    ]
  },
  {
    name: 'Cardápio | Variedade ',
    items: [
        'Colocar comida vegana e coisas com whey proteina',
        'Café da manhã',
        'Carne vermelha',
        'opções mais proteicas',
        'A parte de snacks e lanchinhos (salgados) praticamente era a mesma os 5 dias. Acredito que o pior foi não ter opções de comida matinais, que poderiam virar da 05am até final da festa com opções de sucos, paes, comidas do tipo café',
        'Mudar o cardápio durante os dias.',
        'Maior variedade entre os dias, mais opções de sobremesa',
        'Estava MUITO bom, muito bom mesmo. Mas achei que a variedade das comidas (de comer de garfo e faca) não eram tantas. No primeiro dia eu vi que não gostava de vários pratos e se repetiu durante todos os dias. E achei que faltaram sobremesas. Mas assim o CAMRÃO EMPANADO - meu deus do céu o que é aquilo? Nunca comi algo tão bom. Ah e o atendimento do pessoal que estava no buffet era muito bom, as meninas muito queridas, simpáticas e solícitas.',
        'Servir café da manhã (Se serviu eu não vi)',
        'Mais opções de proteínas, teve muitos pães e torradas, tortas',
        'Alterar as variedades do dia ☺️',
        'Ceviche de caju',
        'deveriam variar mais as opções de comida entre os dias',
        'haver troca de buffet para cafe da manha e oferecer mais opções de doces e ate ter picole ou sorvete.',
        'Mais japa',
        'Mais opções de sobremesa e café da manhã todos os dias',
        'Variar os pratos, foram muitos repetidos todos os dias',
        'Sushi',
        'Mais opções',
        'Faltou comida japonesa',
        'COLOCAR PEITO DE FRANGO',
        'SUSHI',
        'Mais proteína',
        'Mais frutos do mar e qualidade dos pratos',
        'Mais coisas frias… calor da porra',
        'sushi',
        'tem q ter uma area de comida kasher',
        'Comidas mais tipicas do local e que o publico conheça mais, a maioria não conhecia ou nao dava vontade de comer…',
        'Mais diversidade de um dia para o outro',
        'Mais comidas regionias de Pernambuco.',
        'Acai',
        'Acai',
        'Açai',
        'Muito boa a variedade, contudo poderia colocar mais opções de proteínas.',
        'Mais opções de proteína',
        'Mais opções de proteína',
        'Acrescentar mais opções de proteínas.',
        'Variedade ruim. Faltou um japa',
        'colocaria mais opcao de proteina, carne e frango sozinhos.',
        'japones',
        'Poderiam ter proteínas quentes',
        'Mais variedade',
        'mais variação de menu, mais mesas e cadeiras',
        'Poderiam variar um pouco mais o cardapio entre os dias',
        'Variedade de comidas não muda ao longo dos dias. Poucas opções vegetarianas / veganas',
        'Mais comidas veganas',
        'Acrescentar mais opções de proteínas.',
        'Pouca variedade, dando a impressão que não estava suportando a quantidade de pessoas no dia da virada, bem como foi decaindo do primeiro ao último dia.',
        'Poderia variar o cardápio, todos os dias a mesma coisa ficou enjoativo, e no dia da virada poderia ter sido algo mais especial',
        'Burguers e Pizzas',
        'Mais opção de coisa saudável! Legume e proteínas',
        'Melhorar, poderia ter mais snacks',
        'faltaram opções que conversem mais entre si; uma parte mais de massas, outra com frios; uma parte mais de fast food como pizzas artesanais e hambúrgueres vegetarianos seria ótimo',
        'Comida japonesa',
        'Comida japonesa nao vi nenhum dia.',
        'Melhorar o café da manhã',
        'Comida japonesa',
        'Café da manhã simples sem opções.',
        'Hambúrguer!!!',
        'Ter mais opções de proteína',
        'Coisas mais práticas, hambúrguer, pizza (fora o bufê principal)',
        'Pouca para n dizer nenhum opção vegetariana',
        'Varanda burguer',
    ]
  },
  {
    name: 'Elogios',
    items: [
        'Funcionou bem',
        'MARAVILHOSO',
        'Não, tava uma delícia',
        'EU AMOO nao perdia um dia dessa comida maravilhosa 💙💙💙',
        'Continuar perfeito como foi',
        'Tudo absolutamente impecável.',
        'Não, tudo maravilhoso',
        'Buffet deles é muito incrível. Cada ano que passa se supera. Tinha até sobremesa',
        'Tudo perfeito',
        'gostei de tudo',
        'Ótimo',
        'Perfeito',
        'Comida maravilhosa',
        'Maravilhoso o Ceviche de Camarão :)',
        'Excelente',
        'Maravilhoso',
        'perfeito',
        'Manter o nível',
        'O buffet estava impecável',
        'Tudo Perfeito',
        'Sensacional',
        'So elogios.',
        'Perfeito',
        'TUDO PERFEITO!',
        'Melhor comida',
        'comida perfeita',
        'maravilhoso',
        'Mais pura nos carrinhos',
        'Deixa ele mais tempo até o fim da festa',
        'Muita qualidade e oferta bem variada',
        'Simplesmente perfeito',
        'o melhor open food que tem! comidas quentes e deliciosas!',
        'Simplesmente perfeito',
        '10/ 10',
        'Simplesmente perfeito',
        'Comparado com 2021, achei esse ano (dia 02) muito melhor!',
        'tudo perfeito',
        'IMPECAVEL',
    ]
  },
  {
    name: 'Outros',
    items: [
        'Apesar de muito saborosa, todos os dias relatos e eu mesma passei mal após comer no evento. Além de outras amigas e amigos. Algo estranho.',
        'Permanecia até o final de cada evento onde está sendo oferecido',
        'Por favor, não fechem antes de terminar a festa. Muito importante',
        'Deveria ter um lugar para limpar a boca, algum stand tipo Listerine',
        'Péssimo Buffet',
        'Estava ok',
        'As comidas não estavam boas como as dos outros anos',
        'Acabava cedo',
        'Achei nos outros anos melhores',
        'Manter o funcionamento até o final',
        'Ir até mais tarde ou dar opções no final da festa.',
        'No meio da festa não tinha mais proteína no dia 31',
        'Finalizou muito cedo',
        'estou tentando solicitar o estorno do convite da festa do beach club do dia 02/01',
        'Podia ficar disponivel ate mais tarde! As 5h recolhiam e muitas vezes a festa tava rolando com a melhor atracao',
        'antes das 6 ja estavam fechando',
        'Fasano igual a 4 anos atrás',
        'Poderia ficar disponível até 05:30, o café da manhã poderia ser melhor!',
        'Fechando muito cedo. Deixar aberto até o final da festa',
    ]
  }
];

export function SugestaoOpenFood() {
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
      <h2>Sugestão sobre o open food</h2>
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