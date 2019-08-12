# Exame - Bexs Front-end

## Desafio

Desenvolver uma aplicação front-end de acordo com as especificações descritas nos **requisitos** utilizando a _stack_ tecnologica de sua preferencia.

- Desenvolva este Layout: https://xd.adobe.com/spec/9c4a9206-ac61-4050-796d-89c00fb79e91-ea7b
- Utilize a tecnologia de sua preferencia (ReactJs, Angular, Angularjs, Vue.js, Jquery, Bootstrap, Material, Nodejs, Java, C#, PHP, etc).

## Como executar (Desenvolvimento)

    É necessario ter instalado o nodejs (https://nodejs.org) para rodar este projeto.

1. Faça um clone do repositório

2. Entre na pasta do projeto através do cmd (ou outra ferramenta que preferir) e execute o comando `npm install` para instalar todas as dependências necessárias para rodar o projeto.

3. Execute o comando `npm start` e o projeto ira abrir no seu browser de preferência na porta 3000. Caso não abra acesse a url `http://localhost:3000`

### Estrutura do projeto

    O Projeto está dividido na seguinte estrutura:
  
- `public`: Utilizada para armazenar os arquivos estaticos do projeto. Onde se encontra o index.html.
- `src`: Contém todo o código da aplicação.    
- `components`: É onde ficam armazenados todos os componentes que podem ser utilizados pelas views.
- `services`: É responsavel pela conversa com o backend (conversas com apis)
- `views`: É onde ficam localizadas as páginas a serem exibidas.
- `app.js`: Componente raiz do projeto , porta de entrada de todos os outros.
- `index.css`: Onde ficam armazenados os estilos em comum.
- `index.js`: arquivo responsável por iniciar o react no projeto.

    Foi pensada nessa estrutura por ser simples e organizada, componentes reutilizaveis serão criados na pasta `components`, conversas com apis serão criadas na pasta `services` e criação de novas views serão feitas dentro da pasta `view`.

    Não utilizei o Router do react por ser somente uma página.

    Os Componentes e views foram criados em um padrão que facilita manutenção posterior, pois se precisar alterar algo é só entrar na pasta daquele componente/view que os arquivos responsáveis por ele já estarão disponíveis para alteração. Os serviços poderiam estar junto dessa estrutura , porém foi pensado que um serviço pode ser chamado por mais de uma view, por isso foi criada a pasta services.

  
## Como executar (BUILD)

1. Suba um servidor http na pasta build do projeto. Recomendo instalar o http-server (`npm i http-server -g`) pois é simples de utilizar.

2. Assim que o servidor estiver funcionando na pasta build, acessar o endereço http://localhost:{porta}/index


