# Projeto de exemplo para práticas com Docker

Com base na apresentação de Docker no nosso grupo de estudos temos este reposítório com o objetivo de colocar em prática o que aprendemos.

### Tarefas:

#### Simple-app
1. Crie uma imagem Docker para executar o serviço `simple-app`.

1. Execute esta imagem localmente e faça um request para o serviço no endpoint `/` e obtenha a respotsta `Hello from NodeJS App`.

1. Passe uma variável de ambiente chamada `USERNAME` para o container Docker e veja o que acontece com a resposta do serviço. 

1. Crie uma imagem para a execução dos testes do projeto.

1. Execute a imagem de testes e obtenha o arquivo com os resultados dos testes.

#### Redis-app
1. Crie uma imagem Docker para executar o serviço `redis-app`.

1. Crie um arquivo docker compose para subir o serviço com uma imagem do banco de dados redis

1. Utilize os scripts `get-key.sh <chave>` e `set-key.sh <chave>` para acessar a aplicação e se comunicar com o banco

1. Configure para não perder os dados do redis após o container ser parado. O Redis armazena o dump dos seus dados na pasta `/data`
