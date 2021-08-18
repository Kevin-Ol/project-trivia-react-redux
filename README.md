# Projeto Trivia
![trivia](https://user-images.githubusercontent.com/82068881/129907775-c6de7724-79f5-4840-8c72-8824c3687509.png)

***
Você pode acessar o site no ar [aqui](https://kevin-ol.github.io/project-trivia-react-redux/).

Projeto feito como critério avaliativo na escola de programação **Trybe**.

Foram utilizadas as tecnologias HTML, SCSS, Javascript juntamente com as biblioteca React.JS e Redux.

O objetivo do projeto foi aprimorar softskills de trabalho em grupo, focando em colaboração, comunicação, e aplicação das metodologias ágeis Scrum e Kanban,
usando a biblioteca Redux para gerenciar o estado global da aplicação.

Foi criado um jogo de perguntas e respostas, o qual possui conexão com a página **Gravatar** para receber a imagem do usuário de acordo com o email cadastrado. 
As perguntas e respostas são requisitadas após o login do usuário através de uma consulta à **API Open Trivia Database** e exibidas uma a uma na tela. O jogador 
tem até 30 segundos para responder, e a pontuação é somada caso a resposta seja correta, levando em consideração a dificuldade da pergunta e o tempo de resposta. 
Ao responder as 5 perguntas do jogo, é exibida uma tela de feedback dos resultados, e as opções de ver ranking dos jogadores que é gravado no Local Storage do 
navegador ou de jogar novamente. Na tela inicial há também uma opção que leva à tela de configurações, para que seja possível personalizar as perguntas que serão 
exibidas.

***
Os requisitos que compõem projeto são:

:white_check_mark: Criar página de login que:
- Tenha campos para inserir nome e login, e faça sua verificação;
- Tenha um botão que inicia o jogo que permanece desabilitado enquanto os campos são verificados;
- Tenha um botão que leve à página de configurações;

:white_check_mark: Criar tela de jogo que:
- Contenha Header com as informações da pessoa jogadora;
- Exibe uma pergunta de cada vez com apenas uma reposta correta;
- Criar estilo para diferenciar a alternativa correta e incorretas ao clicar em uma resposta;
- Criar timer de 30 segundos que caso seja zerado, exibida a resposta;
- Criar placar de acordo com tempo de resposta e dificuldade da pergunta;
- Exibir botão para ir pra próxima pergunta após a pergunta atual ser respondida;
- Exibir um total de 5 perguntas;

:white_check_mark: Criar página de feedback que:
- Contenha Header com as informações da pessoa jogadora;
- Exiba mensagem personalizada de acordo com a quantidade de acertos;
- Exiba a quantidade de acertos e pontuação final;
- Contenha botão para ir à tela de ranking;
- Contenha botão para jogar novamente;

:white_check_mark: Criar página de ranking que:
- Exiba o ranking de jogadores em ordem descrescente;
- Contenha botão para jogar novamente;

:white_check_mark: Criar página de configurações que:
- Permite a pessoa usuária modificar o tema das perguntas;
- Permite a pessoa usuária modificar a dificuldade das perguntas;
- Permite a pessoa usuária modificar os tipos de respostas das perguntas;
