import type {Track,Topic,Project,Skill} from './model';
const J='Plano de Estudos de Programação — Java & Backend';
const E='Plano de Estudos de Inglês — Roadmap Prático e Estruturado';
const S='Plano complementar elaborado para esta central';
export const tracks:Track[]=[
 {id:'java',title:'Java Backend',short:'Java',description:'Da lógica à sua primeira API profissional.',color:'#c2f66a',main:true,source:J,stages:['Fundamentos','Java básico & Git','POO & Testes','Banco de Dados & SQL','Spring Boot','Portfólio & Carreira'],strategies:['25 min de foco + 5 min de pausa ativa; 3 a 4 blocos por dia.','Mantenha a IDE aberta: digite e modifique o código enquanto aprende.','Divida em microtarefas: criar Pessoa e Funcionario é uma tarefa concreta.','Use System.out.println e o debugger para obter feedback imediato.','Ciclo: entender (15–20%), praticar e errar (40%), investigar e corrigir (20%), mini-projeto (20%). As proporções do PDF são aproximadas.','Limite aulas teóricas a 20 minutos; registre dúvidas em um caderno rápido.','Celebre código funcionando, bugs resolvidos e publicações no GitHub; escolha projetos que despertem curiosidade.']},
 {id:'english',title:'English Roadmap',short:'English',description:'Prática real, da primeira frase à comunicação avançada.',color:'#a89aff',main:true,source:E,stages:['A1','A2','B1','B2','C1/C2'],strategies:['25 min de estudo/prática + 5 min de pausa ativa; 2 a 3 blocos por dia.','Crie frases próprias e fale em voz alta ao aprender uma estrutura.','Use microtarefas, como cinco frases com I have visited...','Grave a voz e compare pronúncia; revise a escrita com feedback.','Ciclo: entender (15–20%), produzir (40%), ajustar (20%) e consolidar em conteúdo real (20%). Proporções aproximadas do PDF.','Experimente dispositivos em inglês e podcasts durante tarefas mecânicas (6 Minute English, TED Talks).','Shadowing: escute, pause e repita o tom e o ritmo.','Faça repetição espaçada com palavras em frases completas. Priorize ser compreendido e pratique sem medo de errar.']},
 {id:'c',title:'C',short:'C',description:'Entenda memória, compilação e programação de sistemas.',color:'#79bafa',main:false,source:S,stages:['Primeiros programas','Memória & Dados','Arquivos & Projeto'],strategies:['Compile com avisos habilitados.','Desenhe a memória antes de manipular ponteiros.','Teste entradas vazias, limites e erros.']},
 {id:'lua',title:'Lua / Luau',short:'Lua / Luau',description:'Scripts, lógica de jogos e tipagem gradual.',color:'#7bdcd7',main:false,source:S,stages:['Lua essencial','Estrutura & Composição','Luau & Jogos'],strategies:['Domine Lua antes de recursos específicos de Luau.','Separe lógica do jogo e dependências da plataforma.','Teste eventos e estados em pequenos protótipos.']},
 {id:'python',title:'Python',short:'Python',description:'Automatize tarefas e transforme dados em ferramentas.',color:'#f6cd75',main:false,source:S,stages:['Linguagem','Programas confiáveis','Automação'],strategies:['Crie ambientes virtuais por projeto.','Resolva uma tarefa manual real por vez.','Teste casos pequenos antes de processar arquivos reais.']},
 {id:'algorithms',title:'Algoritmos & Estruturas de Dados',short:'Algoritmos',description:'Escolha estruturas e resolva problemas com clareza.',color:'#f49cb7',main:false,source:S,stages:['Análise & Sequências','Estruturas','Estratégias'],strategies:['Explique a solução em linguagem natural antes do código.','Compare tempo e espaço, além da resposta correta.','Revisite os problemas sem olhar a solução.']},
 {id:'cs',title:'Ciência da Computação',short:'Computação',description:'Conheça os fundamentos por trás das ferramentas.',color:'#b3c0cf',main:false,source:S,stages:['Representação & Lógica','Sistemas','Fundamentos integrados'],strategies:['Conecte conceitos abstratos a experimentos pequenos.','Faça diagramas e explique decisões em suas palavras.','Use a trilha Java para aplicar os fundamentos.']},
];
export const topics:Topic[]=[];
function stage(track:string,name:string,duration:string,objective:string,source:string,rows:string[],exercises:string[],deliverables:string[],skills:Skill[]=[]){
 const previous=topics.filter(t=>t.track===track).at(-1);
 rows.forEach((row,i)=>{const [title,detail,practice]=row.split('|');const id=`${track}-${topics.filter(t=>t.track===track).length+1}`;topics.push({id,track,stage:name,title,objective,content:detail.split(';'),exercises:[...exercises,...(practice?[`Microprática complementar: ${practice}`]:[])],deliverables,prerequisites:i?[topics.at(-1)!.id]:previous?[previous.id]:[],duration,source,skills});});
}
stage('java','Fundamentos','Etapa: 2–3 semanas · 10–15 h/semana no texto; 8–12 h na tabela','Compreender a lógica dos programas e as estruturas de controle.',J+' · pp. 1–3',[
 'Lógica e raciocínio computacional|Decomposição de problemas;Sequência de instruções|Descreva em pseudocódigo a validação de uma senha.',
 'Variáveis, constantes e tipos|Tipos primitivos;Declaração de variáveis e constantes|Represente nome, idade e saldo e explique os tipos.',
 'Operadores|Operadores aritméticos;Operadores relacionais e lógicos|Calcule uma média e decida se houve aprovação.',
 'Condicionais|if, else if, else;switch|Crie um menu de calculadora.',
 'Repetições|while;for;do-while|Repita um menu até a opção sair.',
 'Métodos e funções|Parâmetros;Retorno|Extraia as operações da calculadora para métodos.',
 'Vetores (Arrays)|Arrays básicos;Acesso por índice|Calcule a maior e a menor nota de um vetor.'
],['Calculadoras simples','Jogos de adivinhação de números','Validadores de dados'],['Exercícios de lógica e rotinas em terminal']);
stage('java','Java básico & Git','Etapa: 2 semanas · 10–15 h/semana no texto; 10–12 h na tabela','Dominar sintaxe, fluxo de execução e versionamento básico.',J+' · pp. 2–3',[
 'Sintaxe, main e JVM/JDK|Sintaxe Java;Método main;JVM e JDK|Compile e execute um programa que recebe seu nome.',
 'Strings e wrappers|Manipulação de Strings;Classes wrapper|Normalize nomes e converta uma entrada numérica.',
 'ArrayList|Coleções dinâmicas;Adicionar, consultar e remover elementos|Implemente adicionar e remover tarefas.',
 'Git & GitHub|git init, add, commit e push;.gitignore;Repositórios públicos no GitHub|Versione a lista de tarefas em pequenos commits.'
],['Lista de tarefas (To-Do list) via terminal','Manipulador de listas com Git integrado'],['Primeiros repositórios publicados no GitHub']);
stage('java','POO & Testes','Etapa: 3–4 semanas · 10–15 h/semana','Dominar os quatro pilares da POO e boas práticas de código.',J+' · pp. 2–4 · etapa atual indicada no documento',[
 'Classes e objetos|Classes;Objetos;Atributos e métodos|Crie um personagem com nome, vida e ataque.',
 'Construtores e sobrecarga|Construtores;Sobrecarga|Crie duas formas válidas de construir um personagem.',
 'Encapsulamento|Getters e setters;Modificadores de acesso|Impeça saldo inválido com atributos privados.',
 'Herança|extends;Reaproveitamento de código|Crie Pessoa e Funcionario estendendo Pessoa.',
 'Polimorfismo|Sobrescrita com @Override;Interfaces|Execute ataques distintos pela mesma interface.',
 'Abstração|Classes abstratas;Interfaces|Modele uma operação comum a tipos de conta.',
 'Exceções|try-catch;finally;Exceções customizadas|Trate uma tentativa de saque sem saldo.',
 'Coleções avançadas|List;Set;Map e HashMap|Indexe itens de estoque pelo código.',
 'Testes com JUnit 5|Introdução a testes unitários;JUnit 5 básico|Teste saque válido, saldo insuficiente e valor inválido.'
],['Construir os mini-projetos da etapa aplicando POO','Publicar no GitHub com README.md explicativo'],['Sistema de Personagens e Batalha RPG (Terminal)','Sistema Bancário Simulado','Cadastrador de Estoque','Repositórios orientados a objetos com README']);
stage('java','Banco de Dados & SQL','Etapa: 2 semanas · 10–15 h/semana no texto; 10–12 h na tabela','Armazenar e recuperar dados de forma persistente.',J+' · pp. 2–4',[
 'Modelagem relacional|Modelagem de dados;Conceitos de bancos relacionais|Modele clientes e pedidos.',
 'PostgreSQL ou MySQL|Instalação;Uso do banco escolhido|Crie um banco para seu estoque.',
 'SQL: estrutura e escrita|CREATE TABLE;INSERT;UPDATE;DELETE|Cadastre, altere e remova itens de teste.',
 'Consultas SQL|SELECT;WHERE;ORDER BY;GROUP BY|Agrupe itens por categoria e filtre estoque baixo.',
 'Relacionamentos e JOINs|PRIMARY KEY;FOREIGN KEY;JOINs|Liste pedidos com o nome do cliente.',
 'Java com JDBC|Conexão básica Java-banco usando JDBC|Leia produtos usando consulta parametrizada.'
],[],['Scripts SQL e modelo de dados relacional']);
stage('java','Spring Boot','Etapa: 5–6 semanas · 10–15 h/semana no texto; 12–15 h na tabela','Criar APIs RESTful, com persistência, segurança e documentação.',J+' · pp. 3–4',[
 'HTTP e arquitetura web|GET, POST, PUT, DELETE;Status codes|Desenhe requisições para criar e consultar tarefas.',
 'Projeto Spring Boot|Spring Initializr;Maven ou Gradle;Estrutura do projeto|Gere e execute um projeto mínimo.',
 'Injeção de dependências|Inversão de controle;@Component;@Service;@Repository|Injete um serviço no controller.',
 'REST Controllers|@RestController;@RequestMapping|Implemente endpoints de tarefas.',
 'JPA e Hibernate|@Entity;Spring Data JPA;Interfaces de repositório|Persista tarefas no banco.',
 'Exceções na API|Tratamento global;@ControllerAdvice|Retorne um erro claro para recurso inexistente.',
 'Spring Security e JWT|Autenticação;Autorização básica;JWT|Proteja uma rota e teste acesso não autorizado.',
 'OpenAPI / Swagger|Documentação da API|Documente entradas, respostas e erros.'
],['API de Gerenciamento de Tarefas','API de E-commerce simplificada','API de Rede Social/Blog'],['APIs RESTful completas conectadas ao banco de dados']);
stage('java','Portfólio & Carreira','Contínuo · 3–4 semanas de foco · 8–10 h/semana','Preparar portfólio e candidatura a oportunidades como desenvolvedor júnior.',J+' · pp. 3–4',[
 'Perfil GitHub|Pinned Repositories;Perfil formatado|Selecione repositórios que demonstrem evolução.',
 'README profissional|Arquitetura;Tecnologias;Como executar o projeto|Faça outra pessoa seguir seu README.',
 'LinkedIn|Palavras-chave;Resumo das tecnologias aprendidas|Escreva um resumo com projetos concretos.',
 'Entrevistas e algoritmos|Simulações técnicas;Desafios simples|Explique uma solução e sua complexidade em voz alta.',
 'SOLID e Clean Code|Princípios SOLID aplicados ao Java;Clean Code básico|Refatore uma classe com responsabilidades misturadas.',
 'Desafios de seleção|Testes de código;Desafios práticos|Resolva um desafio com prazo e documente decisões.'
],['Simulações de entrevistas técnicas','Resolução de desafios de algoritmos simples','Preparação para testes de código'],['LinkedIn otimizado','GitHub profissional e repositórios com README']);
stage('english','A1','Etapa: 3–4 semanas · 8–10 h/semana','Apresentar-se e usar estruturas essenciais e vocabulário cotidiano.',E+' · p. 2',[
 'Phonics e alfabeto|Sons das letras;Fonética básica|Ouça e repita a soletração do seu nome.',
 'To Be e pronomes|To Be;Pronomes pessoais;this, that, these, those|Apresente três objetos ao seu redor.',
 'Simple Present e frequência|Rotina;always, sometimes, never|Escreva cinco frases sobre sua rotina.',
 'Wh- Questions|Who, What, Where, When, Why, How|Prepare e responda seis perguntas pessoais.',
 'Vocabulário cotidiano|Números;Dias da semana;Família;Objetos;Profissões;Horários|Descreva seu dia com horários.'
],['Apresentação pessoal escrita e falada','Diário de rotina em 5 frases diárias'],['Apresentação pessoal','Diário simples em inglês'],['Listening','Speaking','Reading','Writing']);
stage('english','A2','Etapa: 4–5 semanas · 10–12 h/semana','Expressar passado, planos futuros e manter conversas simples.',E+' · p. 2',[
 'Present Continuous × Simple Present|Ações em andamento;Rotina|Compare o que faz sempre com o que está fazendo agora.',
 'Simple Past|Verbos regulares em -ed;30 verbos irregulares mais comuns|Narre três acontecimentos de ontem.',
 'Will × Going to|Previsões;Planos futuros|Escreva seus planos e previsões para a semana.',
 'Contáveis e incontáveis|many, much, a lot of;some, any|Descreva uma lista de compras.',
 'Preposições|Tempo e lugar;in, on, at|Explique onde e quando você estuda.'
],['Gravação de áudio de 2 minutos contando o final de semana','Leitura de pequenos textos adaptados'],['Áudio narrando rotinas e histórias passadas','Leitura de textos adaptados'],['Listening','Speaking','Reading','Writing']);
stage('english','B1','Etapa: 6–8 semanas · 10–12 h/semana','Compreender ideias principais e expressar opiniões e experiências.',E+' · pp. 2–3',[
 'Present Perfect × Simple Past|Experiências;Ações sem tempo determinado;Passado com tempo definido|Crie cinco frases com I have visited e compare com last year.',
 'Verbos modais|Can, Could, Should;Must, May, Might|Dê conselhos para alguém que começa a programar.',
 'Comparativos e superlativos|more than, the most;-er, -est|Compare duas ferramentas de estudo.',
 'First & Second Conditionals|Primeira condicional;Segunda condicional|Descreva planos possíveis e situações hipotéticas.',
 'Phrasal Verbs de rotina|get up;look for;turn on;give up|Crie uma história curta usando os quatro verbos.',
 'Conectivos|because, however, although;besides, therefore|Ligue ideias de um resumo usando conectivos.'
],['Resumo escrito de um artigo ou vídeo curto','Shadowing com áudios de 1 minuto'],['Resumos de artigos','Prática de shadowing'],['Listening','Speaking','Reading','Writing']);
stage('english','B2','Etapa: 6–8 semanas · 10–15 h/semana','Desenvolver fluência, compreender fala natural e escrever textos estruturados.',E+' · p. 3',[
 'Tempos verbais avançados|Past Continuous;Past Perfect;Present Perfect Continuous|Narre o contexto e a sequência de um problema técnico.',
 'Passive Voice|Voz passiva;Contextos formais e notícias|Reescreva cinco frases de uma notícia na voz passiva.',
 'Reported Speech|Discurso indireto|Resuma o que um colega disse numa reunião.',
 'Third & Mixed Conditionals|Terceira condicional;Condicionais mistas|Discuta uma decisão passada e seus efeitos atuais.',
 'Phrasal Verbs e Idioms|Expressões idiomáticas;Uso no cotidiano|Registre expressões de uma conversa em contexto.',
 'Collocations|Combinações naturais de palavras|Revise um e-mail buscando combinações naturais.'
],['Redação de e-mails formais e pareceres','Simulação de reuniões ou debates em áudio'],['E-mails formais e redações','Simulações de conversas'],['Listening','Speaking','Reading','Writing']);
stage('english','C1/C2','Contínuo · 4–6 semanas de foco · 10–12 h/semana','Refinar nuances, vocabulário corporativo e acadêmico e compreensão avançada.',E+' · pp. 3–4',[
 'Inversão e ênfase|Inversão gramatical;Rarely have I seen...|Reescreva argumentos usando ênfase de modo natural.',
 'Business & Technical English|Vocabulário de negócios;Termos da sua área|Explique a arquitetura de uma API em inglês.',
 'Cultura, sotaques e gírias|Diferenças culturais;Sotaques regionais;Linguagem informal|Compare dois áudios e anote diferenças de registro.',
 'Escrita avançada|Ensaios;Relatórios profissionais;Artigos|Escreva e revise um relatório técnico.'
],['Simulação de entrevista de emprego em inglês','Apresentação completa sobre um tema técnico'],['Entrevista simulada','Apresentação técnica completa'],['Listening','Speaking','Reading','Writing']);
// Complementary sequences are authored learning plans, not contents of the PDFs.
stage('c','Primeiros programas','Sugestão: 2–3 semanas','Criar programas de terminal e entender o ciclo de compilação.',S,[
 'Compilador e primeiro programa|Pré-processamento, compilação e ligação;main e saída padrão|Compile um Olá mundo com avisos e explique cada etapa.',
 'Tipos, entrada e operadores|int, double e char;Conversões e limites;Entrada validada|Leia dois valores, valide e calcule as quatro operações.',
 'Controle e funções|if e switch;Laços;Parâmetros e retorno|Separe uma calculadora em funções e teste divisão por zero.'
],['Testar valores válidos, zero e entradas inválidas'],['Calculadora modular de terminal']);
stage('c','Memória & Dados','Sugestão: 3–4 semanas','Manipular dados e memória com responsabilidade.',S,[
 'Arrays e strings|Índices e limites;Terminação nula;Buffers|Conte palavras de uma linha sem ultrapassar o buffer.',
 'Ponteiros|Endereço e indireção;Passagem por ponteiro;Tempo de vida|Troque dois valores e desenhe as posições de memória.',
 'Memória dinâmica|malloc, realloc e free;Falha de alocação;Vazamentos|Crie um vetor dinâmico com liberação em todos os caminhos.',
 'Structs e organização|struct e enum;Arquivos .h e .c|Modele contatos e separe interface de implementação.'
],['Revisar limites e tempo de vida de cada alocação'],['Agenda em memória com inserção e busca']);
stage('c','Arquivos & Projeto','Sugestão: 2–3 semanas','Persistir informações e diagnosticar problemas em C.',S,[
 'Arquivos e erros|fopen, leitura e escrita;Verificação de retorno|Salve e carregue a agenda, tratando arquivo inexistente.',
 'Depuração e projeto final|Debugger;Avisos do compilador;Testes de regressão|Localize um acesso inválido e registre a correção.'
],['Executar testes de arquivo vazio e dados malformados'],['Agenda persistente em C com instruções de compilação']);
stage('lua','Lua essencial','Sugestão: 2 semanas','Escrever scripts pequenos e previsíveis.',S,[
 'Sintaxe e valores|local, nil, boolean e number;Strings e operadores|Crie um placar que valida a pontuação recebida.',
 'Controle e funções|if, while e for;Escopo;Retornos múltiplos|Implemente regras de pontuação com funções pequenas.',
 'Tabelas|Sequências e mapas;pairs e ipairs;Inserção e busca|Modele um inventário com quantidades.'
],['Testar inventário vazio e item inexistente'],['Inventário de terminal em Lua']);
stage('lua','Estrutura & Composição','Sugestão: 2–3 semanas','Organizar scripts reutilizáveis.',S,[
 'Módulos e erros|require;Interfaces de módulo;pcall|Separe inventário e combate e trate falhas esperadas.',
 'Metatables e composição|__index;Metamétodos;Composição de comportamentos|Modele entidades que compartilham comportamento.',
 'Corrotinas|yield e resume;Fluxo cooperativo|Simule turnos de personagens com execução pausável.'
],['Documentar entradas e saídas dos módulos'],['Simulador de combate modular']);
stage('lua','Luau & Jogos','Sugestão: 3–4 semanas','Aplicar a base Lua à tipagem gradual e à lógica de jogos.',S,[
 'Luau e tipos|Diferenças em relação a Lua;Anotações;Unions e modo strict|Tipifique um inventário e corrija inconsistências.',
 'Estados e eventos|Máquina de estados;Eventos;Separação cliente-servidor quando aplicável|Modele início, rodada e fim de jogo.',
 'Protótipo jogável|Módulos;Validação de ações;Testes de transição|Monte uma arena de turnos e impeça ações fora da vez.'
],['Simular entradas inválidas e transições repetidas'],['Protótipo de jogo por turnos em Luau']);
stage('python','Linguagem','Sugestão: 2–3 semanas','Escrever scripts claros com as estruturas essenciais.',S,[
 'Ambiente e sintaxe|Interpretador;venv;Tipos e operadores|Crie um ambiente e um conversor de unidades.',
 'Controle e funções|Condicionais;Laços;Parâmetros e retorno|Valide entradas e extraia funções puras.',
 'Coleções e compreensão|Listas, tuplas, dicionários e sets;Compreensões|Agrupe despesas por categoria.'
],['Resolver exemplos sem copiar modelos'],['Analisador de despesas em memória']);
stage('python','Programas confiáveis','Sugestão: 2–3 semanas','Organizar, testar e persistir os dados de scripts.',S,[
 'Módulos e exceções|Imports;Exceções específicas;Context managers|Trate entradas e erros sem ocultar a causa.',
 'Arquivos e dados|pathlib;CSV e JSON;Codificação|Leia despesas de CSV e gere resumo JSON.',
 'Classes e testes|Classes;Composição;unittest|Teste totalização, arquivo vazio e valores inválidos.'
],['Testar uma operação válida e duas falhas'],['Analisador de despesas testado']);
stage('python','Automação','Sugestão: 2–3 semanas','Entregar uma ferramenta útil e repetível.',S,[
 'Ferramentas de terminal|argparse;Mensagens de erro;Códigos de saída|Adicione opções de arquivo e período ao analisador.',
 'Consumo de APIs|HTTP;JSON;Timeout e tratamento de falhas|Consuma uma API de teste sem assumir resposta válida.',
 'Projeto de automação|Configuração;Logs;Execução reproduzível|Gere relatórios de despesas com README e testes.'
],['Executar a ferramenta em um ambiente novo'],['Gerador de relatórios de despesas']);
stage('algorithms','Análise & Sequências','Sugestão: 2–3 semanas','Raciocinar sobre correção e custo de soluções.',S,[
 'Complexidade e invariantes|Big O;Tempo e espaço;Invariantes|Conte operações de duas soluções para o mesmo problema.',
 'Busca|Busca linear;Busca binária;Pré-condições|Implemente buscas e teste limites e ausência.',
 'Ordenação|Insertion sort;Merge sort;Estabilidade|Compare resultados e custo em entradas diferentes.'
],['Testar coleção vazia, um item e duplicatas'],['Comparador documentado de buscas e ordenações']);
stage('algorithms','Estruturas','Sugestão: 3–4 semanas','Escolher estruturas conforme as operações necessárias.',S,[
 'Pilhas, filas e listas|LIFO e FIFO;Listas encadeadas;Custos de operações|Valide parênteses com uma pilha e simule uma fila.',
 'Hash tables|Hash;Colisões;Conjuntos e mapas|Conte frequências e explique colisões.',
 'Árvores e heaps|Árvore de busca;Percursos;Fila de prioridade|Implemente um agendador por prioridade.',
 'Grafos|Lista de adjacência;BFS;DFS|Encontre caminhos e componentes em um mapa pequeno.'
],['Justificar a estrutura escolhida para cada operação'],['Biblioteca de estruturas com testes']);
stage('algorithms','Estratégias','Sugestão: 3–4 semanas','Resolver problemas decompondo escolhas e subproblemas.',S,[
 'Recursão e backtracking|Caso base;Árvore de chamadas;Poda|Gere combinações e explique a condição de parada.',
 'Gulosos e programação dinâmica|Escolha local;Subproblemas;Memoização|Compare uma solução gulosa e outra dinâmica para troco.',
 'Projeto integrador|Modelagem com grafos;Caminho mínimo;Análise de custo|Implemente rotas em grafo não ponderado e depois ponderado.'
],['Explicar correção, limitações e complexidade'],['Planejador de rotas com comparação de algoritmos']);
stage('cs','Representação & Lógica','Sugestão: 2–3 semanas','Entender como informação e raciocínio viram computação.',S,[
 'Representação de dados|Binário e hexadecimal;Texto e Unicode;Precisão numérica|Converta valores e observe limites de representação.',
 'Lógica e matemática discreta|Proposições;Conjuntos;Relações;Indução|Construa tabelas-verdade e prove uma propriedade simples.',
 'Arquitetura de computadores|CPU;Memória;Instruções;Cache|Desenhe o percurso de execução de um programa.'
],['Explicar cada conceito com um exemplo executável'],['Caderno de experimentos de representação e lógica']);
stage('cs','Sistemas','Sugestão: 3–4 semanas','Compreender os serviços que sustentam programas.',S,[
 'Sistemas operacionais|Processos e threads;Escalonamento;Memória virtual;Arquivos|Observe processos e compare duas tarefas concorrentes.',
 'Redes|Camadas;IP;TCP;DNS;HTTP|Descreva o caminho de uma requisição web.',
 'Bancos e transações|Modelo relacional;Índices;Transações;Consistência|Compare uma consulta e simule uma transação interrompida.'
],['Relacionar cada conceito a uma API Java'],['Mapa comentado do funcionamento de uma aplicação web']);
stage('cs','Fundamentos integrados','Sugestão: 3–4 semanas','Conectar teoria, segurança e construção de software.',S,[
 'Linguagens e execução|Parsing;Compilação e interpretação;Máquina virtual|Crie um avaliador de expressões aritméticas simples.',
 'Segurança e confiabilidade|Validação;Privilégio mínimo;Testes;Falhas parciais|Analise fronteiras de confiança de um serviço.',
 'Engenharia de software|Requisitos;Modularidade;Versionamento;Documentação|Escreva decisões arquiteturais do seu projeto Java.'
],['Documentar hipóteses e verificar com experimentos'],['Mini interpretador e relatório de arquitetura']);
export const projects:Project[]=[];
function project(track:string,title:string,difficulty:string,tech:string[],requirements:string[],deliverables:string[],source:string){projects.push({id:`project-${projects.length+1}`,track,title,difficulty,technologies:tech,requirements,practice:requirements,deliverables,source});}
project('java','Calculadora de terminal','Iniciante',['Java'],['Operadores','Condicionais','Métodos e funções'],['Operações básicas e validação de entrada'],J+' · p. 2');
project('java','Jogo de adivinhação','Iniciante',['Java'],['Condicionais','Repetições'],['Tentativas, dicas e condição de encerramento'],J+' · p. 2');
project('java','Validador de dados','Iniciante',['Java'],['Variáveis, constantes e tipos','Condicionais'],['Rotinas de validação com exemplos válidos e inválidos'],J+' · p. 2');
project('java','Lista de tarefas no terminal','Iniciante',['Java','Git'],['ArrayList','Git & GitHub'],['To-Do list versionada no GitHub'],J+' · p. 2');
project('java','Manipulador de listas','Iniciante',['Java','Git'],['ArrayList','Git & GitHub'],['Operações de lista e histórico de commits'],J+' · p. 2');
project('java','Personagens e Batalha RPG','Intermediário',['Java','JUnit 5'],['Classes e objetos','Herança','Polimorfismo','Testes com JUnit 5'],['Batalha em terminal','Repositório GitHub com README explicativo'],J+' · p. 2');
project('java','Sistema Bancário Simulado','Intermediário',['Java','JUnit 5'],['Encapsulamento','Abstração','Exceções','Testes com JUnit 5'],['Contas e operações bancárias simuladas','GitHub e README explicativo'],J+' · p. 2');
project('java','Cadastrador de Estoque','Intermediário',['Java','JUnit 5'],['Classes e objetos','Coleções avançadas','Exceções'],['Cadastro e consulta de itens','GitHub e README explicativo'],J+' · p. 2');
project('java','API de Gerenciamento de Tarefas','Intermediário',['Java','Spring Boot','SQL','JPA'],['REST Controllers','JPA e Hibernate','Exceções na API','OpenAPI / Swagger'],['API conectada ao banco','Documentação e instruções de execução'],J+' · p. 3');
project('java','API de E-commerce simplificada','Avançado',['Java','Spring Boot','SQL','JWT'],['JPA e Hibernate','Spring Security e JWT','Relacionamentos e JOINs'],['API de produtos e pedidos','Persistência e rotas protegidas'],J+' · p. 3');
project('java','API de Rede Social / Blog','Avançado',['Java','Spring Boot','SQL','JWT'],['REST Controllers','Spring Security e JWT','OpenAPI / Swagger'],['API de publicações','Persistência, segurança e documentação'],J+' · p. 3');
project('c','Agenda persistente em C','Intermediário',['C'],['Ponteiros','Structs e organização','Arquivos e erros'],['CRUD de contatos em arquivo','README de compilação e testes'],S);
project('lua','Arena por turnos','Intermediário',['Lua','Luau'],['Módulos e erros','Luau e tipos','Estados e eventos'],['Inventário, combate e estados testados'],S);
project('python','Relatórios de despesas','Intermediário',['Python','CSV','JSON'],['Arquivos e dados','Classes e testes','Ferramentas de terminal'],['Importação CSV e relatórios','Testes e instruções de uso'],S);
project('algorithms','Planejador de rotas','Intermediário',['Java ou Python','Grafos'],['Grafos','Complexidade e invariantes','Projeto integrador'],['Rotas verificadas e comparação de custo'],S);
project('cs','Mini interpretador','Intermediário',['Java ou Python'],['Linguagens e execução','Lógica e matemática discreta'],['Avaliador de expressões','Relatório de decisões e limitações'],S);
export const references=[{track:'c',name:'GNU — Manual de C',url:'https://www.gnu.org/software/c-intro-and-ref/manual/html_node/'},{track:'lua',name:'Lua — Manual oficial',url:'https://www.lua.org/manual/5.4/'},{track:'lua',name:'Luau — Introdução',url:'https://luau.org/getting-started/'},{track:'python',name:'Python — Tutorial oficial',url:'https://docs.python.org/3/tutorial/'},{track:'algorithms',name:'MIT — Introdução a algoritmos',url:'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/'},{track:'cs',name:'Harvard — CS50',url:'https://cs50.harvard.edu/x/'}];
