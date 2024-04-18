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
      'Ótima dinâmica da compra pelo aplicativo e a entrada pelo reconhecimento facial. Muito organizado e filas rápidas na entrada do evento.',
      'Foi tranquilo',
      'Processo de biometria facilitou muito a entrada e o problema de sempre andar com a pulseria de tag',
      'em alguns momentos dava erro, mas de maneira geral funcionou bem',
      'Tudo funcionou muito bem',
      'Achei interessante o BePass, mas acho que dificulta a venda do ingresso caso haja algum imprevisto',
      'Foi muito legal entrar via reconhecimento facial, rápido a entrada. Menos de 1min todos os dias. Ingresse já acostumado a plataforma que tem os melhores eventos. Fácil e seguro',
      'Super facil',
      'Gostei',
      'Bepass inovador, criativo e muito mais facilitado.',
      'Para mim funcionou perfeitamente, adorei! Muito prático e seguro.',
      'Achei maravilhoso, seguro',
      'Tudo ok',
      'Excelente o reconhecimento facial',
      'Perfeito, sem filas, ágil.',
      'Excelentes',
      'Facial excelente',
      'Super simplificado e intuitivo, muito bom!!',
      'Muito eficiente e rápido',
      'Nada; excelente',
      'Facilitou muito o acesso.',
      'Perfeito',
      'Segurança e muito eficiente',
      'Muito bom',
      'foi muito bom a rapidez para acesso ao evento!',
      'Muito bem feito, e afasta os cambistas, aprovo',
      'Processo simples e eficaz!',
      'Super rápido',
      'Primeira vez que acesso um evento dessa forma, achei incrível. Me preocupo um pouco com esse nível de "monitoramento" de dados, mas acredito que irão atender à LGPD',
      'Sou suspeita para falar por que sou da empresa, mas a minha experiencia com Bepass foi incrível e de todos os meus 20 amigos que estavam tbm, todos amaram a experiencia e a praticidade.',
      'O uso da pulseira é bem incômodo, se já tem o reconhecimento facial n teria necessidade da pulseira',
      'Incrível, super fácil',
    ]
  },
  {
    name: 'Negativa',
    items: [
      'Tive problemas com o reconhecimento',
      'Frescura e sistema mal planejado que impedia a saida para a carneiro store e voltar ao show. Com tanta tecnologia como essa porcaria do bepass não consegue reconhecer a mesma pessoa mais de uma vez? Essa tranqueira do Ingresse não informa a localização correta do evento. Comunicação horrível. Nem em português conseguem se comunicar, imagina em inglês.',
      'Bepass foi confuso, e como comprei ingresso de amigos na minha conta, isso foi confuso, não podia transferir',
      'Pelo amor de deus tirem esse reconhecimento facial... eu perdi um pacote inteiro de festas pq psssei o primeiro dia pra uma amiga e não podia desmembrar o pacote. Temos que poder fazer isso, ter esse direito.',
      'No dia do Keinemusik, vi que muitas pessoas tiveram problema com o reconhecimento facial.',
      'transferencia no dia do evento nao era permitida e poderia ser aberta',
      'Alguns dias não dava certo',
      'Comprei pela ingresse, e demorou 15 dias pra lançarem meu pacote',
      'Não reconheceu meu rosto',
      'chato nao poder vender festas avulsas',
      'comprei um pacote e tive uma emergência e voltei para SP, quis vender dois ingressos e nao consegui transferir porque eram mini pacotes.',
      'Difícil de comprar vários ingressos pela ingresse',
      'Ainda não tive retorno sobre a questão do ingresse do Blackcoffe. E Bepass, tive um dia onde o facial não funcionou e tive que esperar um tempo',
      'achei limitador a questão da bepass e o facto dos ingressos funcionarem tipo pacote e não puderem ser oferecidos/vendidos se o proprietário do ingresso não for nesse dia especifico.',
      'Horrível. O que era para facilitar só dificultou. Filas imensas, uma pessoa só resolvendo. Péssimo. Upgrade não foi feito adequadamente e não havia nenhum suporte.',
      'Tive problema com a facial , pois não estava lendo , a internet ruim tive que tentar abrir meu e-mail para mostra meu ingresso',
      'Único ponto negativo são as taxas abusivas cobradas pela plataforma, mesmo em pagamentos via pic',
      'Melhor as pulseiras',
      'Tive dificuldade no cadastro da facial na primeira vez que acessei o link. Tentei novamente em outro dia e rolou.',
      'Só que não chegou o reconhecimento facial tive que enviar email',
      'para comprar ingressos, não aceitava o cartão, falava que já havia estourado o limite de ingressos, foi chato! Be pass eu não tive problemas mas com',
      'No primeiro dia, o reconhecimento de minha namorada deu problema. mas foi resolvido apos varias tentativas e idas ao Escritorio.',
      'Fiquei frustrada pois o reembolso do Black Coffee doi negado',
      'Taxa alta da ingresse',
      'MUITO COMPLEXO DEVIDO AS TRANSFERÊNCIAS E UTILIZAÇÃO',
      'O meu reconhecimento facial só funcionou no primeiro dia',
      'Não respondem no FDS',
      'Taxas muito elevadas para aquisição dos ingressos',
      'O Bepass dificulta a venda de ingressos para terceiros no dia em que não queremos',
      'Ingresse não tem informações e complica tudo. Reconhecimento mal testado e teve problemas todos os dias',
      'Formas de pagamento limitada',
      'O sistema é muito ruim. Tive problemas para confirmar meu ingresso, perdi muito tempo. Chagaram até a cancelar meu ingresso, depois de pago e já estando lá o que gerou estresse.',
      'estou tentando solicitar o estorno do convite da festa do beach club do dia 02/01',
      'Não consegui cadastrar minha facial',
      'Não acho o bepass muito acessível',
      'Complicado / travou',
      'Ingresse e fez eu perder 4 festas ela e horrível nunca mais !',
      'ruim para revender caso aconteca algo',
      'Entrei no evento por reconhecimento e fácil e não podia comprar comida, pq não poderia voltar pro evento. Pra que colocar tecnologia se não ajuda em nada?',
      'No primeiro dia o bepass estava um pouco travado e não estava liberando as pessoas, mas depois funcionou perfeitamente!',
      'Instabilidade na bepass',
      'Reconhecimento facial em alguns dias não funcionou',
      'leitor facial dava problema as vezes',
      'muito chato esse negocio de reconhecimento facial',
      'Impossibilidade de vender ingressos do pacote e transferir em alguns momentos foi uma coisa bem ruim',
      'Desnecessário e dificulta a venda em casa de desistência',
      'Teve dias que o reconhecimento facial falhou e gerou um baita desconforto ter que ir e voltar e ir e voltar no suporte. Fora a fila que gerava. Outro ponto, muito ruim não ter a opção de passar o convite pra frente se não quiser ir um dia. Comprei pacote. Não compraria mais.',
      'Ingressos das festas individuais',
      'Sim. No eevento do dia 28 tivemos +1 hora de inconveniente para entrar no beachclub. Perdemos +1 hora de festa, equivalente a 25% do evento. O tratamento de quem estava na bilheteria nao foi o adeuado, com muita arrogancia e sem uma solucao. Dia perdido. Tambem tivemos probemas no evento do BlackCoffe',
      'QRCODE demorou muito para quem não fez reconhecimento facial.',
      'Reconhecimento facial só funcionou um dia',
      'Bepass é horrível',
      'Demorou para reconhecer o meu rosto na festa, tive que contatar a produção',
      'Até agora estou esperando meu reembolso dos 2 últimos dias de Mouton. Estou seriamente considerando não ir para Carneiros novamente se esse reembolso demorar mais.',
      'não faz sentido não poder sair e entrar do beach club',
      'na entrada não me reconheceu',
      'O reconhecimento facial deu certo no primeiro dia mas depois deu problemas nos dias seguintes',
      'Facilitar o cadastro e funcionamento, travou o sistema quando estava na fila.',
      'Não gosto da forma que nos deixam presos na não transferência',
      'Tive problemas com o reconhecimento facial, em todas as festas.',
      'O meu reconhecimento facial deu problema um dia',
      'Possibilidade de cadastrar mais de um facial, quando comprados ingressos em uma unica conta',
      'Ingresse está abusando dos juros',
      'Valor abusivo da taxa de conveniência, sem opção de compra física, sem cobrança de taxa!',
      'as taxas da ingresse são muito abusivas, o ingresso já é cara mais 15% de taxa complica muito',
      'meu reconhecimento facial nao passava em nenhuma festa, mesmo com uma nova foto tirada com a equipe na hora',
      'Site da ingresse poderia ser mais user friendly',
      'Porcaria',
      'bepass não funcionou por queda de energia',
      'Cadastrei o bepass com antecedencia, e na hora não reconheceu',
      'O terceiro dia não reconheceu e demorou pra “recadastrar”',
      'Sobre a transferência dos ingressos, que não foi possível depois de fazer a biometria facial',
      'As vezes dava erro devido a maquiagem',
      'O app nao é user friendly',
      'Opção entrar com qrcode caso a facial de problema,para n gerar transtorno de refazer a facial',
      'Se o cadastro facial ocorrer dentro do app da ingresse ou ter um link direcionador dentro do app facilitaria',
      'O meu deu erro no primeiro dia, mas nos outros tudo certo',
      'Ingresse péssimo atendimento ao cliente! Ninguém resolve nada, mudem a plataforma',
    ]

  }
];

export function ProcessoInresseBepass() {
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
      <h2>Processo da INGRESSE ou BEPASS</h2>
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