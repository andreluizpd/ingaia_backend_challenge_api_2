# Teste Backend - API 2

Essa API é utilizada para receber a quantidade de metros quadrados e calcular o valor do imóvel.

O calculo é realizado pegando o preço na API de [preço do metro quadrado](https://github.com/andreluizpd/ingaia_backend_challenge) e multiplicado pelo valor passado pelo usuário, considerando as limitações impostas, valor necessita ser entre 10 e 10.0000.

A aplicação online está rodando neste link: [APP](https://ingaia-api-2.herokuapp.com/)

O método mais simples de testar a aplicação é pelo browser um exemplo é [https://ingaia-api-2.herokuapp.com/api/v1/propertyCalc/400](https://ingaia-api-2.herokuapp.com/api/v1/propertyCalc/400)
Neste exemplo o imóvel calculado tem 400 metros quadrados e seu valor é retornado ao acessar a API.

Está sendo utilizado o serviço de CI/CD do Travis CI, assim, após o envio de código ao github o mesmo é testado e caso passe é realizado o build no heroku automaticamente.

### Tecnologias

No projeto foram utilizadas as seguintes tecnologias

- Node
- Express
- Typescript
- Jest
- Docker

Para CI/CD

- Travis

Para Host da API

- Heroku

## Instalação

Criação do arquivo .env:

    cp .env.example .env

Instalação das dependências:

    npm install

## Rodando o aplicativo

Para rodas o aplicativo com o docker é bem simples, basta realizar os seguintes passos:

Criação do arquivo .env:

    cp .env.example .env

Build do Container docker:

    docker build -t ingaia-backend-challenge-api2 .

Rodando o Container docker:

    docker run -d -p 7000:7000 ingaia-backend-challenge-api2

## Rodando os testes

Para rodar os testes da aplicação pode ser usado o seguinte comando:

    npm run test:unit

# REST API

Abaixo temos a descrição da API criada.

## Pegar preço por metro quadrado

### Request

`GET /api/v1/propertyCalc/:sqrMeter`

:sqrMeter - Refere-se ao valor de metros quadrados passados para o cálculo do valor do imóvel
Necessita ser entre 10 e 10.000

### Response

```JSON
    {
      "data": {
        "pricePerSqrMeter": 2,
        "calculatedPricePerSquareMeter": 800
      }
    }
```
