# CASHMEBACK 🤑
## _Software para revendedores controlarem seus lucros_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Software desenvolvido como teste front-end, o aplicativo consiste em um sistema para controle dos lucros de revendedores, onde estes podem criar uma conta, fazer login autenticado, cadastrar suas vendas e obter informações de todas suas vendas bem como seus lucros estimados e acumulados.

- Nome do aplicativo e interface criados por mim.
- Interface amigavel seguindo conceitos de UI/UX e interface totalmente responsiva.
- Fake API implementada com JSON-SERVER com hash de senha e autenticação JWT.
- Utilização de Javascript para desenvolvimento
- Rotas privadas controladas via session JWT.
- Controle dos estados via ContextAPI.

## Fotos da aplicação na pasta IMAGES

![](/images/img1.PNG)
![](/images/img2.PNG)
![](/images/img3.PNG)
![](/images/img4.PNG)
![](/images/img5.PNG)

## Requisitos do Teste

- [x] Tela de cadastro de um novo revendedor;
- [x] Tela de login para informar e-mail e senha;
- [x] Tela de cadastro de compras; 
- [x] Tela de listagem das compras cadastradas exibindo as informações; 
- [x] Tela para exibir o valor de cashback acumulado até o momento; 

## Requisitos do Teste

- [x] Utilize um destes frameworks. UTILIZADO REACT 
- [x] Você pode utilizar um framework de UI. UTILIZADO CHAKRA UI.
- [x] Design Responsivo .
- [x] Integração com uma API 'fake'. API MOCKADO LOCAL HOST COM JSON SERVER
- [x] Respeitar boas práticas de código e arquitetura.
- [x] Teste Unitário. UTILIZADO JEST, REACT TESTING


## Obs: 
 #### As informações de cashback, cashback acumulado e status da compra serão fornecidos por uma API 3ª, porém para que o sistema pudesse ficar mais dinamico implementei no backend essas informações de forma estática. As informações estão preenchidas com os seguintes valores fixos:
 - CASHBACK: 15%
 - VALOR DE CASHBACK: Calculado automático
 - STATUS DA COMPRA: APROVADA.

 Este estado pode rapidamente ser alterado no sistema visto que isto está acoplado apenas na fake api.

## Instalação da aplicação
### Clone o repositório e entre na pasta
Execute
```sh
yarn 
yarn start
yarn fake-api
```
 Aplicação front-end será executada na porta 3000 e o backend fake será executado na porta 3333;

## FAKE API RESOURCES
- /auth/login | POST | Recebe email e senha do usuário valida e faz a autenticação retornando token JWT.
- /users | POST | Recebe dados do usuário valida e faz a criação de um novo usuário o retornando.
- /sales | GET | *TOKEN NECESSÁRIO* | Recebe o ID do usuário via query params e retorna a lista de vendas para aquele usuário. 
- /sales | POST | *TOKEN NECESSÁRIO* | Recebe o ID do usuário via query params, os dados da compra pelo corpo da requisição valida, cria uma nova venda retorna a lista de vendas para aquele usuário. 

## FAKE API INITAL 
- O SISTEMA ESTÁ COM UM USUARIO FAKE INICIAL PARA TESTE E COM VENDAS FICTICIAS. 
- email: admin@admin.com
- senha: admin

## TESTES UNITARIOS
- Testes unitários executadas nos components e todos suites de testes OK.
    Execute yarn test