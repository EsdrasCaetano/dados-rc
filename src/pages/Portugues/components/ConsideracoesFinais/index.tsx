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
      'Festa incrível, público alinhado, excelente atendimento e estrutura! Espero voltar neste ano!',
      'Combinação de luzes e cenário do hotel do show da tarde estão de parabéns.',
      'Evento foi incrível com um mega estrutura, organização impecável, open food e open bar nota 10! ',
      'Apenas elogios lugar maravilhoso',
      'O festival é maravilhoso e recomendo para todos os meus amigos que curtem esse tipo de música. Ainda sim, acho desnecessário colocar axé e funk no evento a noite considerando que todos os outros festivais de cidades vizinhas já oferecem esse tipo de música. O diferencial de Carneiros é o line up de artistas de música eletrônica e é por isso que o público escolhe esse evento. Acho que deveriam focar nisso.',
      'Foi tudo incrível... apenas a questão do ingresso que acho que deve ser mudada',
      'Incrível e voltarei mais vezes!',
      'só manter',
      'Simplesmente perfeito! Melhor réveillon da vida!',
      'Grata pela experiência',
      'EXCELENTE!!!',
      'Eu já fui em vários e retornei, acredito ser atualmente o melhor do BR. A festa do dia 2 foi espetacular, continuem assim.',
      'Evento sensacional.',
      'Experiencia inesquecivel. Voltarei.',
      'Tudo maravilhoso! Line incrivel',
      'Foi um evento muito bacana - indiquei para várias pessoas. A única coisa que eu encarecidamente peço, PELO AMOR DE DEUUUUS, NÃO coloquem labaredas de fogo, show pirotécnico. É um calor absurdo! Me sentia um frango dentro de um forno quando ficava na front.',
      'Eu amei minha experiência, foi o melhor reveillon do Nordeste que eu já curti. Mas infelizmente eu não curto esse eletrônico pesado que tocou algumas noites. Mas fechei o reveillon pq tinnham falado que a estrutura do evento era muito boa e não decepcionou, foi maravilhosa. Mas acredito que se inncluisem outras opções de cantores poderia agregar muito mais pessoas ao reveillon. Na minha região de Sorriso-MT curtimos mais sertanejo e por isso, esse público acaba não frequentando o reveillon de vocês. Mas penso que poderia ser organizado uma estratégia para a line up melhorar ainda mais. Parabéns pelo maravilhoso evento, vocês me surpreenderam.',
      'Gostei muito da festa',
      'Vivo os melhores dias do ano em Carneiros! Cada ano melhora e eu tenho muito orgulho desse time! Vocês arrasam! Minha sugestão é nao deixem de explorar o dia 02/01! Foi incrível!',
      'vocês são mais que evento, vocês trazem experiência em todos os sentidos! parabéns!',
      'Família amou',
      'Achei o réveillon excelente',
      'Eu amei o Reveillon e pretendo voltar,infelizmente nao sou tao fa de elede eletronico entao para mim poderiam misturar mais no mesmo dia artistas diferentes mas que nao destoassem tanto do publico. Dennis encaixou bem e ate o Saulo animou. Talvez no mesmo dia ter um pouco de cada para atrair mais gente como eu.',
      'Tudo impecável',
      'Tudo perfeito',
      'Carneiros é um sonho ! Gratidão por essa experiência 🤍 Do Brasil para o mundo ✨',
      'Melhor da minha vida',
      'Poderia ter um pouco mais de mix de artista, fugir um pouco de quase 100% eletronico. Mas muito bom.',
      'Foi uma agradável experiência. Eu incluiria toda noite um show com brasilidades para não ficar só no eletrônico q enjoa principalmente nos dias de ressaca. No mais, parabéns pelo evento impecável!',
      'Tudo fantástico! Estrutura, Público, Praias... Para ficar perfeito faltava apenas um pagodinho (gosto pessoal kkkk)',
      'Foi tudo muito bom, embora eu e meu grupo tenhamos encontrado a casa que alugamos pela INJOY suja (contratamos uma faxineira) e também o upgrade que foi pago e não foi feito. Compramos o combo da noite com a INJOY e o de dia pela organização. Quando fizemos o upgrade, não houve o upgrade das nossas festas de dia, embora tivéssemos pagado para tal.Aguardo contato do SAC para o reembolso.',
      'Foi incrível! Ansiosa pelos próximos',
      'Só agradecer por ter sido meu melhor réveillon da minha vida e quero ir no próximo',
      'Obrigado pela experiência. Foi muito incrível.',
      'Tudo incrível, arrasem na line que voltarei esse ano <3',
      'Simplesmente perfeito',
      'Melhor réveillon do Brasil disparado, uma situação que não gostei foi de não poder comprar combo no beach club e não avisaram antes que tinha como comprar bangalô e mesas para as festas noturnas',
      'Parabéns aos organizadores. Evento extraordinário com uma experiência incrível.',
      'No mais a magia do réveillon foi perfeito, e se puder colocar mais cantores nacionais!',
      'O melhor reveillon do mundo! A experiência mais incrível e inesquecível do nosso ano, esperamos o ano inteiro por essa semana, e esse ano meu casamento será lá, no reveillon',
      'Esse é o meu terceiro ano e vejo uma evolução muito grande na estrutura, serviços e atrações. Meu único feedback é quanto a sequência das atrações e a escolha das mesmas. Vou dar um exemplo no dia do Anotr a pista ficou praticamente parada até o Baskhar entrar. No Beach club no dia da Blondish e Jéssica branca, pra mim foi um dos melhores. No dia do réveillon colocar o 440 depois do bob moses foi tipo jogar um balde de água fria na pista. Porém no dia do Keinemusik a sequência das atrações foi perfeita, mesmo se não tivesse o Black coffee',
      'overall muito bem organizado, staff de bar impecavel',
      'Amei o evento',
      'Apenas agradecer por todos serviços prestados com maestria! Gratidão e até 2025!',
      'Melhor reveillon disparado!',
      'Festa linda, muito bem organizada. O set do Keinemusik foi sensacional',
      'Tudo maravilhoso, não tem como melhorar',
      'Maravilhoso',
      'Evento super organizado',
      'Melhor ano novo da vida, não conheço uma pessoa que foi e não disse o mesmo. Vocês estão de parabéns em todos quesitos',
      'Meu melhor reveillon da vida, obrigada por tudo! Decoração das festas, limpeza nos banheiros, espaço, comida e bebida tudo excelente. Sem falar na segurança! Vocês sao demais ❤️',
      'Evento impecável! Obrigada',
      'Achei ruim a experiência do upgrade de pacote e poderiam ter atrações melhores. De resto foi excelente',
      'Equipe muito bem treinada e educada. Passei por uma situação que um dos colaboradores, que estava recolhendo os pratos no buffet, e imediatamente outras pessoas do time veio contornar pedindo desculpas e se disponibilizando para ajudar',
      'Eu sonhava com o Reveillon de Carneiros há anos e fui pela primiera vez esse ano. Confesso que estava com expectativas altíssimas e todas foram superadas!!! É com certeza o melhor Reveillon do mundo!! vocês tem uma fã aqui! hahahaha',
      'Para minha primeira vez em um reveillon no nordeste, foi apenas maravilhoso ! Escolhi certo ! Line de eletrônico impecável ! Que continue assim cada vez mais ! Obrigada e espero voltar !!',
      'Agradecer ao Henrique e ao Diego Gallrdo',
      'Vou no proximo ano novamente.',
      'Simplesmente agora a régua subiu. Espero ansiosamente que não caia o nível do Line up desse ano',
      'Obrigado',
      'Foi otimo, mas nao teve nada surpreendente em relação a 2023. Pra quem vai todo ano, achei repeticao.',
      'Festa incrível, alto nivel musical, continuem assim',
      'ano q vem tamo d volta! a vida e fodaaa!',
      'Excelente estrutura e evento!',
      'Elogios tambem porque foi um dos melhores reveillons que fui ate agora, e o melhor do Brasil!',
      'Tudo perfeito',
      'foi perfeito',
      'Publico massa, festa bonita, som foda, DJs fodas. Velocidade do bar e copos de papel',
      'Sem dúvidas alguns dos melhores dias da minha vida foram lá, desde o taxi até o fim da festa a experiencia foi mágica. Acredito que tenha tido problema no som em alguns momentos, principalmente no dia do WhoMadeWho. O som do dia 31/12 não me agradou muito, achei a musica parada demais, o melhor momento foi a apresentação do Bob Moses mas antes e depois disso percebia a pista bem desanimada... Mas esse é o unico ponto a melhorar, line da virada do ano deveria ser mais animado. Acho também que o Vintage Culture deveria ter tido uma data na festa noturna, e não somente no beach club.',
      'Top / melhor de todos',
      'Eu até me emociono ao falar desta experiência. Foi singular. Meu sincero agradecimento a toda a produção e equipe do reveillon Carneiros, foi incrivel e estava tudo mais do que perfeito! Obrigada <3',
      'Excelente evento',
      'Evento excelente, em todos os aspectos. Só poderia melhorar em relação ao estacionamento, ou não cobrar o valor do estacionamento ou cobrar e ser um lugar digno de estacionar.',
      'O réveillon de carneiros e maravilhoso',
      'amei tudo',
      'Estrutura impecável. O melhor line up já montado em todas as edições (esse padrão deve ser mantido). Sugiro apenas que o serviço de bares seja reforçado no dia da virada. Foi complicado ser atendido durante todo o evento do dia 31/12.',
      'Foi incrível, obrigada ! Vcs arrasam muito ! Que venha o próximo',
      'Muito bom',
      'Melhor ano novo de todos',
      'Organização impecável do evento. Colaboradores eficientes e super prestativos. Limpeza e manutenção do ambiente merecem destaque. Tudo excepcional.',
      'Gostei muito da estrutura, mas as bandas como "Saulo", "Silva" e outras não combinaram com a festa, nem com o público. Nos dias em que não havia música eletrônica, tanto o clube quanto a festa à noite ficavam vazios!',
      'AUMMA CREW EM TODO LUGAR POR FAVOR!!',
      'Melhor Réveillon! Tudo muito bem organizado, lindo, zero perrengues. Pretendo voltar !',
      'Organização do evento excelente nota 10 tudo perfeito!',
      'No dia do Keinemusik achei que o som poderia estar um pouco mais alto, mas foi excelente! Ótima organização, banheiro impecáveis tanto masc quanto fem, buffet excelente, espaço excelente... Apenas a consideração para aumentar a quantidade de bares ou de atendentes :)',
      'Evento maravilhoso! Melhor do nordeste. Diferencial do evento música eletrônica',
      'Foi o melhor Réveillon da minha vida! eu amei',
      'Achei o publico muito bom, eu nao aumentaria o Reveillon. Aumenta o preco em 20 a 30% foco nos gringos e convidar mais influenciadoras. Eu convidaria umas de fora do pais tmb pra incentivar mais o publico internacional. A operacao de botar credito no Cartao do Beach club era amuito lenta.',
      'Evento perfeito',
      'Achei muito interessante a organização. Muito boa. Line impecavel apesar de desnecessario Saulo naquele contexto.',
      'Absolutamente incrível e impecável 🤌🏻👏🏻',
      'Melhor ano novo da vida! Só sugiro que haja a possibilidade de transferência de ingressos próximo ano',
      'Apenas elogiar toda a produção pelo evento',
      'Espaço, estrutura e serviço incríveis',
      'Foi maravilhoso e magico, fui especialmente por ter sido o unico que contratou Keinemusik e me surpreendeu toda a experiencia!',
      'Agradecimento por oferecer essa experiência incrível, só quem vive sabe o quanto é mágico. Aceito convite para o próximo ano, pois gastei tudo que tinha e não tinha pra ir hahaha Obrigada Carneiros <3',
      'Incrível!',
      'Só agradecer a todos envolvidos pela experiência. Até breve',
      'Experiência incrível! Recomendo 🙏🏻',
      'Muito bom, porém tem esses pontos a melhorar e acho que tem que focar mais em música eletrônica, colocar música brasileira, mas não só brasileira, por ex banda Eva, etc',
      'Organização perfeita',
      'Mantenham essas lines insanas que estarei de novo no próximo ano!',
      'Prestadores de serviços extra entre capacitados e educados! Obrigada por essa experiência incrível',
      'Foi mágico!  Uma experiência pra vida, espero muito ter a oportunidade de viver esse réveillon no futuro!',
      'Melhor reveillon da vida, em que pese a ausência de diversidade. Vi poucas pessoas pretas e LGBTs.',
      'Muito boa toda a estrutura. Mantendo luneup, open bar e open food de qualidade e somente organizando um pouco melhor estacionamento, irei novamente.',
      'Tudo perfeito! Impecável.',
      'Incível!Super recomendo',
      'De forma geral o evento foi sensacional!',
      'O show de drones foi incrível, precisa ter todos os anos, pois encanta as pessoas',
      'Evento simplesmente perfeito!',
      'Foi massa, aguardo confirmação Natiruts novamente para ir.',
      'Organização impecável do evento. Colaboradores eficientes e super prestativos. Limpeza e manutenção do ambiente merecem destaque. Tudo excepcional.',
      'parabens!',
      'No geral, perfeito demais.',
      'Evento inesquecível, equipe incrível e se melhorar estraga hahaha!!',
      'Sem duvidas o melhor Reveillon. Porém as atrações da virada são sempre desanimadas. Zé do roque e Denis nao combinam com carneiros.',
      'Foi perfeito! O melhor réveillon da minha vida! Muito obriga! Só gente bonita!',
      'Agradecer a todos envolvidos, as pessoas que estão por trás disso tudo e fizeram acontecer! Incrível',
      'Fui na edição passada e a 2024 superou as expectativas, apenas o dia 31 foi dificil bebida e banheiro feminino, mas de resto festa igual não há. parabéns!',
      'Achei que poderiam ter devolvido o valor do ingresso do Black Coffee. Mas, vocês estão de parabéns em relação a tudo, foi perfeito.',
      'As festas, estrutura tudo indiscutivelmente perfeitos. A minha única sugestão seria em relaçao ao transtorno que me causou o reconhecimento facial. Tive problemas todos os dias, mas em especial na festa do dia 31 (Reveillon) meu reconhecimento não fuciounou, o que me fez ficar esperando por mais de 10 minutos na porta, e ninguém me deu nenhuma solução. Fizeram a atualização da foto, e tinha que aguardar subir no sistema, pediram pra abrir a entrada no site da Ingresse sé a internet não era das melhores, o que me fez ficar ali plantada por um bom tempo... questionei o moço da portaria que tbm dizia que teria que aguardar. Por fim consegui entrar no site da Ingresse e abrir minha entrada. Fiquei bem chateada com isso... No mais a todas as festas estavam impecáveis.',
      'Melhor réveillon do Brasil! Produção e qualidade de alimento e bebidas é muito acima da média.',
      'Achei a line impecável, atendimento excelente, comida excelente e uma vibe absurda. Senti falta de ter mais de um local de festas pois todos os dias no mesmo lugar causa uma impressão que estamos todo dia na mesma festa.',
      'Tudo perfeito, foi uma experiência ótima!! Obrigada',
      'experiência incrível, voltaria novamente',
      'Foi surreal de bom, tudo! Se pudesse pedir algo, se é que cabe, seria mais áreas de sombras, nada mais',
      'Terceiro ano em carneiros, atraçoes internacionais mto boas, vintage culture mto bom, porem os djs de brasilidades horriveis a maioria nao sabia nem tocar, o maga por exemplo. O Mouton está com preços de exploração pelo que oferece, as festas são boas lá porem sempre atrasam e isso impede do pessoal comprar os ingressos da tarde!!! A base da festa deve ser musica eletrônica, show do dennisnpor exemplo, muita gente ja havia ido embora quando dennis entrou, pois os dj anteriores eram horriveis, colocando mpb e outros estilos sem ligacao, nao sabiam tocar!!! O maga principalmente, horrivel!!! Para uma festa que tem nome e tamanho deveriam repensar sobre os djs de brasilidades!!',
      'Parabéns, foi incrível!',
      'A terceira vez que vou e vejo uma melhora a cada ano. Não tenho o que reclamar.',
      'incrivel',
      'Foi o melhor evento de todos os tempos',
      'melhor reveillon da minha vida! nunca fui a maior fã de eletrônica, mas carneiros mudou minha opinião. nunca estive tao feliz, dancei sem parar, sorri e comemorei a vida! queria que todo mundo pudesse viver o receillon de carneiros pelo menos uma vez. desejo passar todos meus finais de ano contando carneirinhos agora. foi surreal! inexplicável!',
      'Continue investindo na boa eletrônica. O som no dia da virada deixou a desejar, tirando isso. Muito bom! Voltarei',
      'Agradecimento a estrutura do evento, surreal!',
      'Tudo perfeito !!!',
      'Apenas agradecer por terem feito o melhor ano novo da qual eu pude presenciar, com certeza final do ano estou novamente para o réveillon de carneiros! apenas memórias boas ❤️ Show do keinemusik foi insano',
      'O evento melhorou muito comparado com o que eu fui há dois anos atrás. Eu não gostei da demora pra liberação da lineup, e do fato de que não foi informado que ingressos avulsos e mini combos seriam disponibilizados.',
      'Amei tudo! O show de sage Act e MauL surpreenderam BASTANTE.',
      'Simplesmente perfeito e com certeza voltarei todo ano',
      'De todos os réveillons do nordeste, carneiros sem dúvidas é o melhor',
      'O melhor reveillon de todos!',
      'Só elogios! Fui em 2021 os 5 dias e somente dia 02 em 2024, pretendo voltar sempre que possível. Tiveram algumas falhas de som, mas não atrapalharam a experiência',
      'Mt bom,bem frequentado,organizado…',
      'Obrigado por tudo!',
      'Experiência sem igual',
      'Unico ponto que não tivemos muito informação sobre a festa particular do Vintage, que acredito que foi mais reservada para parceiros, patrocinadores e influenciadores. Para ficar no mesmo barco era algo bem limitado e não tive a oportunidade de conhecer e nem de saber maiores informações. Demais, só tenho que agradecer por ter passado a melhor experiencia e réveillon. Vocês são fora da curva, parabens pelo evento incrível e obrigada pela parceria.',
      'Melhor dia da minha vida. Tragam keinemusik novamente',
      'Evento grandioso e muito bem estruturado, tem shows para todos os gostos e muitos pontos positivos voltaria com ctz. Poderia haver um cuidado maior com o sol pois quando amanheceu foi bem sofrido 😅',
      'Continuem com o trabalho incrível e melhorando todo ano. Ano q vem tem mais',
      'Melhor ano que ja fui',
    ]
  },
  {
    name: 'Negativa',
    items: [
      'Comunicação, informação e bepass precisa ser reconstruído. Péssimos.',
      'No dia do ano novo, os banheiros ficaram bem entupidos e sujos, o que não condiz com o preço do pacote',
      'A grande oportunidade foi no serviço dos banheiros. Tanto no feminino quanto no masculino, no meio da noite estavam muito sujos. Poucos funcionários para tantos banheiros, em alguns momentos estavam bem noj entos, e a descarga estava entupida!',
      'Acho que o Beach Club pode melhorar, serviço. De restos são pequenos ajustes que vão sendo aprimorados',
      'Vocês não perfuntam sobre a própria producão de vocês, organização e divulgação. Primeiro de tudo foi um desrespeito tremendo e isso pq estava em uma grupo de 14 pessoas que tem a mesma opinição, ao te divulgado diversos nomes que não fariam parte do pacote de 5 festas. Me refiro as festas extras do dia 2 e anteriores, com Keine, Vintage, Black. É claro que houve intenção de enganar o cliente para que comprassem pacotes pré divulgação do line-up diário. A decepção é geral! É nitido que injoy e demais organizadores tiveram a proposta de lucrar mais, vendendo essas festa prevista. O mesmo vale para dilvulgar  esses nomes para festas que deveriam ser compradas separadas para o Mouton, sendo que no line-up pré divisão, nunca foi deixado claro pela organização do evento em seu instagram. Outro ponto é sobre o canal de comunicação e relacionamento com vocês Bloquear comentários em suas redes é a prova de que "não aceitamos reclamações e não sabemos lidar de maneira profissional com elas. Logo não vamos deixar contaminar nos comentária sobre possiveis reclamações". Foi a prova de que vocês sabiam da. "Pilantragem"que fizeram com a organização de artistas VS. dia. Colocar Dennis DJ, em uma line-up que foi vendido de maneira a ser mais vertente entre Eletrônico e Brasilidades Modena, foi um maneira de aproveitar o circuito Nordeste que alguns artistas fazem rodando entre estados.',
      'Se possível, tirar axé e funk do line principal (a noite). Melhorar o line do dia do Réveillon.',
      'Mais seguranças, um monte de gente subiu no palco na nossa frente pulando um lugar que não era permitido. Rolou uma briga e uns caras passaram por mim, me empurraram e eu quase me machuquei. Não havia nenhum segurança por perto.',
      'Preço bastante alto para o que oferece',
      'Sugiro colocar mais mesas para o buffet, reclamação: as privadas do banheiro ficavam em um degrau é isso atrapalha muito a utilização por mulheres!',
      'O pacote feminino poderia ser mais acessível.',
      'terem aqueles ventiladores com vapor de agua para refrescar pois faz muito calor!',
      'Melhorar line up pois senão vai ficar cada vez mais vazio e Buffet péssimo! O lugar é perfeito e a estrutura tb',
      'Frustrante o black coffee não ter aparecido no beach club. comprei apenas por ele estar no line. Assim que recebemos a informação que ele não iria, saimos e fomos para o evento pricipal.',
      'Somente colocar pelo menos uma festa com DJ que tocam Brazilian bass (conforte falado anteriormente). Esse som de loja de roupa de shoppings ( sem ofensa ) entendo que a classe A curta, mas não todos. Essas músicas são muito paradas, e a demora para sair o line up das festas é muito ruim. Primeiro comprei no escuro sem saber quem iria tocar , quando abriu o line não conhecia ninguém .  investido em tudo . A sinalização de festas na pista foi bem ruim pq pelo endereço que estava no site o Waze jogava para outro canto. Nós perdemos',
      'Adoro o reveillon de Carneiros e ja é meu segundo ano, mas esse ano no primeiro dia , no dia 26 a tarde teve um acontecimento que ate relatei ao Felipe. O gerente que colocaram la na parte da tarde, se nao me engano chama Artur, ele nao tem condiçoes alguma e nem capacitaçao para ser gerente de voces e se relacionar com seus clientes. Primeiramente no primeiro dia, nao sei quem deu a ideia absurda de nao se vender a tarde combos aos clientes. Graças ao Felipe isso foi resolvido apos a confusao do primeiro dia. Esse gerente Artur pegou meu combo que paguei 1.500 e colocou dentro de uma sacala de plastico e colocou na recepçao e disse que eu estava impedido de bebe-lo e somente poderia retirar ele no final. Eu nunca vi um tratamento desses, em nenhum lugar que ja fui na minha vida e muito menos esperava um tratamento desses aos clientes em Carneiros. Entao fica aqui minha indignaçao a esse cidadão que se dizia gerente do Mutton na parte da tarde. Lamentavel e para mim nao serve nem para ser gerente de boteco beira de estrada.',
      'Falta atividades durante o dia, sendo que o som só começa a tocar no Beach Club as 16hs sendo poucas atrações boas.',
      'Reclamaçao sobre achados e perdidos. Não recebi nenhum feedback até agora, mesmo tendo preenchido o forms. descaso total, mesmo que uma resposta negativa dizendo que não acharam.',
      'SOM MUITO PESADO',
      'Precisam melhorar os banheiros femininos, mais espelhos, mais limpeza e papel. Também não entendi o degrau para o sanitário, visto que obrigava o usuário a sentar-se para utilizar. Ainda era pouco o número de banheiros funcionando para a quantidade de mulheres nas festas mais lotadas.',
      'Cancelamento do black coffee no mounton. Havia comprado somente por ele.',
      'Achei ruim a experiência do upgrade de pacote e poderiam ter atrações melhores. De resto foi excelente',
      'Informar melhor sobre os locais da festa. No instagram nao informa nada. Qual o endereço exato? Qual o km? Porque as informacoes ficam muito vagas. E a localizacao é fundamental para a escolha da hospedagem',
      'péssimo, apenas, o sistema ingresse',
      'so a sinalizacao para entrada',
      'estou tentando solicitar o estorno do convite da festa do beach club do dia 02/01',
      'Sugiro transfer entre mouton e night club',
      'Sugiro aumentar o line up de funk',
      'esse ano deixaram a desejar nas bandas, a decoração do ano passado estava sensacional e foram poucos banheiros, na virada do ano estavam super lotados e impossível de ir',
      'Sai de São Paulo para poder estar no evento, gastei com passagem, hospedagem, ingresso e só tive decepção. Na ingresse a localização do evento estava errada. Andamos uma parte do caminho a pé, tivemos que pegar um uber, voltar pra buscar o carro... nao tinha uma única placa de sinalização na cidade. Depois quando chegamos no evento, estávamos atrasados e entramos direto. Quando fui tentar comer um lanche, não podia mais sair. Achei td péssimo e não voltaria e nem indicaria pra ninguém essa experiência.',
      'O estacionamento deixou MUITO a desejar. Não condiz com o preço do ingresso e não deveriamos pagar tao caro pela estadia de um motorista. É o minimo que a festa pode nos oferecer… um lugar pro nosso carro ficar',
      'Sinalização do local, área sem iluminação, a entrada com sinalização precária.',
      'Os banheiros poderiam ser melhores, no meu ponto de vista é a única coisa que deixa a desejar. Principalmente nas festas noturnas.',
      'colocar atrações diferenciadas, um palco maior, estacionamento melhor, facilidade pra vender/trocar ingresso',
      'Melhorar a line da festa a noite. Os DJs do começo eram ruins',
      'Os horários do Beach Club foram péssimos! Legal seria curtir a vibe de fim de tarde. Estava marcado para das 15h as 22h e tinha dia que 15h30 nem aberto estava. Legal seria curtir fim de tarde, voltar e arrumar para a festa à noite. Teve dia que o Beach club acabou mais de 22h. Novamente, o legal do Beach Club eh a vibe do dia. Não recomendo e se voltarmos, a turma toda não compra Beach Club. O que eh uma pena.',
      'Maior diversidade de ritmos, possibilidade de vender ingresso do combo, melhorar o palco, mais possibilidades de transporte (van), mais atendentes nos bares, nao deixar faltar bebida/gelo,',
      'Achei um absurdo aumentarem o valor do BeachClub no dia que o Nattan iria tocar e depois baixaram o preço quando ele cancelou. Resumindo, paguei 2200 (1 masc e 1 fem) para um show que no dia estava sendo vendido por 1600. Paguei mais caro pra ver um show que queria, e acabei sendo obrigado a ir ver um show que eu não queria nem por esse valor de 1600 e que estava sendo vendido mais barato rs. LOUCURA TOTAL. O mínimo que deveriam fazer é reembolsar a diferença de 600 reais.',
      'viaj ei de muito longe e trouxe amigos da Bolivia, que gastaram MUITO dinheiro no evento, com reserva de mesas, casas intermediadas pelo grupo etc. Foi, e esta sendo vergonhoso a forma como eles estao sendo tratados, com dinheiro a receber nos cartoes, e com diversos problemas nas entradas dos eventos. O evento foi top, tudo muito bom. Mas o tratamento humano, com meus colegas que vieram de fora, foi MUITO ruim. Estamos aguardando respostas. Obrigado',
      'Melhorar line up, melhorar ruas ao redor do evento (todas com buracos enormes)',
      'Deveriam permitir comentários entre pessoas no instagram, melhorar a comunicação (ex: caso Black Coffee), e permitir venda entre pessoas de 1 dia do combo.',
      'Acho que poderiam melhorar a line, em todos os dias era uns artistas muito desabonados, só melhorava no final…',
      'poucos banheiros masculinos no evento ! falta de mais sofás ou qualquer coisa para poder sentar e descansar',
      'Melhorar  schedule dos artistas. Tocava um dj ruim seguido de um muito top seguido de um fraco algumas noites.',
      'Valor abusivo da taxa de conveniência, sem opção de compra física, sem cobrança de taxa! As festas que não foram open bar, o custo do ingresso muito elevado, com valores das bebidas elevadas. Pelo preço do ingresso, deveria ser OPEN BAR! A concorrente é muito mais agressiva nisso.',
      'um saco fechado de 10kg de pétalas de flores caiu as 5:30h da manhã na praia a menos de 1m de mim e do meu marido. Logo a produção foi retirar para esconder o que aconteceu. Muito perigoso e irresponsavel',
      'No ultimo dia a troca do black coffee pro evento da noite sem liberação das pessoas que compraram o somento o evento da tarde foi desrespeitoso! No meu caso e de varias outras pessoas q estavam comigo, ficamos mais dois dias apenas para assistir ao black coffee. O mínimo esperado era a liberação de quem nao entrou no evento a tarde que tivesse livre acesso ao evento noturno.',
      'Falta organização do pessoal entrada todo pessoal mal instruído',
      'Mais pra fazer durante o dia. O sistema no Mouton de por dinheiro no cartão foi TERRÍVEL',
      'Sou grande fã de música eletrônica, porém em vários dias tocaram por muito tempo músicas que não era eletrônico. Entendo a vibe brasiliadades, mas vi muitas reclamações sobre o som morno durante horas de evento.',
      'Tava muito calor na festa',
      'Especialmente no dia do réveillon, não havia sinalização no estacionamento',
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} ref={categoryButtonsRef}> {/* Referência para o elemento contendo os botões */}
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