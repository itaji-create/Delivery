# Boas vindas ao repositório do projeto App de Delivery!

<details>
  <summary>
    <strong>Detalhes do desenvolvimento</strong>
  </summary><br>

   Essa aplicação será responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 🍻

 Características do aplicativo:

  - Acesso via login: clientes, pessoas vendedoras e administradores do sistema tem acesso ao aplicativo via login, porém para funções diferentes: (1) Cliente, faz um pedido; (2) Vendedor, que aprova, prepara e entrega; (3) Administrador, que gerencia quem usa o aplicativo;

  - Fazer a comunicação entre usuários: após adicionar produtos ao carrinho o cliente poder finalizar a compra, então o cada vendedor tera acesso as suas respectivas vendas para aprovar, preparar e enviar ao seu cliente. Após o pedido ser despachado pelo vendedor o cliente poderá mudar o status do pedido para "Entregue".
  
</details>

<details>
  <summary>
    <strong>Scripts relevantes do <code>package.json</code> principal</strong>
  </summary><br>

  **Esses scripts devem ser realizados na raiz do projeto**:

  - `npm start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Também prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;

  - `npm stop`: Para e deleta as aplicações rodando no `pm2`;

  - `npm run dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo `watch`);

  - `npm run dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);

  - `npm run db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;

  - `npm run db:reset:debug`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local. Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);


  - `npm test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);

  - `npm run test:dev <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`); 

  - `npm run test:dev:open <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`), exemplo `npm test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`. Esse teste deve abrir uma janela mostrando o comportamento das páginas;

  - `npm run test:dev:report "<nomes-dos-arquivos>"`: Roda todos os testes (ou uma parte deles caso `"<nomes-dos-arquivos>"` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`). Esse teste devolve um output em texto com o resultado de todos os testes. Os `logs` são gerados em `./__tests__/reports`.

</details>

<details>
  <summary>
    <strong>Banco de dados</strong>
  </summary><br>

  Neste projeto é utilizado o ORM `Sequelize`, que fará interface com o `MySQL`, logo é necessário que o Workbench esteja rodando.

  ## Sequelize
  
  Caso necessite restaurar o bando de dados utilize o comando `npm run db:reset`

</details>

<details>
  <summary>
    <strong>Iniciando o projeto</strong>
  </summary><br>

 - O projeto só instala as dependências com a versão 16 do `node` para evitar conflitos de versão.

- Você deve configurar o arquivo de variáveis de ambiente `.env` dentro da pasta `./back-end`, conforme exemplo em `.env.example`.

- Inicie o projeto pela raiz, utilizando o comando `npm i`. Após isso, é possível fazer a instalação de ambos os aplicativos (back e front) através da raiz do projeto, utilizando o comando `npm run dev:prestart` (esse comando também restaurará o banco de dados, caso o `.env` esteja configurado corretamente).

</details>

<summary>
  <strong>👷 Estruturação do projeto</strong>
</summary><br>

**Responsabilidade de cada fluxo:

  - **Fluxo Comum**:
    - **Fazer login** e **registrar novo usuário** no sistema.
    - Tela de Login;
        * Na página de login ocorrerá erro caso:
            1. Seja digitado um email inexistente no database.
            2. A senha esteja incorreta.
    - Tela de Registro;
        * Na página de cadastro ocorrerá erro caso:
            1. Nome completo com número de caracteres menor que `12`.
            2. Email incompleto, fora de um padrão comum: `<email>@<domínioPrincipal>.<domínioGenérico>`;
            3. Senha com número de caracteres menor que `7`.

  - **Fluxo do Cliente**:
     **Gerar uma nova venda**, **Consultar pedidos feitos anteriormente** e **Acessar detalhes de cada pedido**.
    - Tela de Produtos;
        - **Adicionar e remover produtos no carrinho**;
    - Tela de Checkout;
        - **Alterar dados do pedido, como a quantidade de produtos, o vendedor responsável e endereço de entrega**;
    - Tela de Pedidos;
        - **Adicionar e remover produtos do carrinho**;
    - Tela de Detalhes do Pedido;
        - **Acessar detalhes do pedido e mudar para "Entregue" o status desse pedido, caso o vendedor tenha classificado anteriormente o pedido como "Em Trânsito"**

  - **Fluxo do Vendedor**:
     
    - Tela de Pedidos;
        - **Listar pedidos relacionados a seus respectivos vendedores**
    - Tela de Detalhes do Pedido;
        - **Acessar detalhes de cada pedido e mudar de "Pendente" para "Preparando" e "Em Trânsito", o status desses pedidos**

  - **Fluxo do Administrador**: 
    - Tela de gerenciamento de usuários;
      - **Realizar o cadastro de clientes e vendedores, também possibilita sua remoção**
    