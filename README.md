```markdown
# Sua API

## Descrição
Este é um projeto inicial para criar uma API utilizando Express e Sequelize.

## Iniciando o Projeto
Para iniciar o projeto, você pode usar o seguinte comando para inicializar o `package.json`:
```
npm init -y
```

## Scripts
No arquivo `package.json`, crie um script para iniciar o servidor usando nodemon e aponte para o arquivo principal. Isso garantirá que o servidor seja atualizado automaticamente a cada alteração do arquivo.
```json
"scripts": {
  "start": "nodemon app.js"
}
```

## Estrutura de Pastas Recomendada
```
- /src
  - /config
    - dbConfig.js
    - environments.js
    - .env
  - /controllers
    - controladorProduto.js
    - controladorSupermercado.js
  - /models
    - modeloProduto.js
    - modeloSupermercado.js
  - /routes
    - rotasProduto.js
    - rotasSupermercado.js
- app.js
- package.json
- readme.md
```

# Exemplo de arquivo .env

### Variáveis de ambiente para o ambiente de desenvolvimento

NODE_ENV=development
PORT=3000

### Variáveis de ambiente para o banco de dados

DB_HOST=seu-host
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha
DB_NAME=seu-banco-de-dados


## Arquivo app.js
```javascript
// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Funções do seu projeto');
  res.send({ status: "ok "});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

## Como Usar
1. Clone este repositório (`git clone https://github.com/SeuProjeto`).
2. Execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar o servidor.
4. Acesse `http://localhost:3000` em seu navegador para verificar se o servidor está rodando.

### API de Produtos

#### Criar um Produto

Endpoint:
```
POST /api/produtos
```

Descrição:
Este endpoint é usado para criar um novo produto.

Parâmetros:
- `nome` (string, obrigatório): Nome do produto.
- `preco` (float, obrigatório): Preço do produto.
- `idSupermercado` (string, obrigatório): ID do Supermercado.

Exemplo de solicitação:
```json
{
  "nome": "Arroz",
  "preco": 5.99,
  "idSupermercado": 1
}
```

#### Obter todos os Produtos

Endpoint:
```
GET /api/produtos
```

Descrição:
Este endpoint é usado para obter todos os produtos cadastrados.

#### Obter um Produto específico

Endpoint:
```
GET /api/produtos/:produtoId
```

Descrição:
Este endpoint é usado para obter informações sobre um produto específico.

Parâmetros:
- `produtoId` (string, obrigatório): ID do produto.

### API de Supermercados

#### Criar um Supermercado

Endpoint:
```
POST /api/supermercados
```

Descrição:
Este endpoint é usado para criar um novo supermercado.

Parâmetros:
- `nome` (string, obrigatório): Nome do supermercado.
- `localizacao` (string, obrigatório): Localização do supermercado.

Exemplo de solicitação:
```json
{
  "nome": "Supermercado ABC",
  "localizacao": "Rua XYZ, 123"
}
```

#### Obter todos os Supermercados

Endpoint:
```
GET /api/supermercados
```

Descrição:
Este endpoint é usado para obter todos os supermercados cadastrados.

#### Obter um Supermercado específico

Endpoint:
```
GET /api/supermercados/:supermercadoId
```

Descrição:
Este endpoint é usado para obter informações sobre um supermercado específico.

Parâmetros:
- `supermercadoId` (string, obrigatório): ID do supermercado.

#### Obter todos os Produtos de um Supermercado

Endpoint:
```
GET /api/supermercados/:supermercadoId/produtos
```

Descrição:
Este endpoint é usado para obter todos os produtos disponíveis em um supermercado específico.

Parâmetros:
- `supermercadoId` (string, obrigatório): ID do supermercado.

## Contribuindo
Sinta-se à vontade para contribuir com melhorias neste projeto. Basta seguir estes passos:
1. Clone este repositório (`git clone https://github.com/Phaullo/prog-web`).
2. Crie um branch para sua feature (`git checkout -b feature/SuaFeature`).
3. Faça commit de suas alterações (`git commit -am 'Adicionando nova feature'`).
4. Faça push para o branch (`git push origin feature/SuaFeature`).
5. Crie um novo Pull Request.

## Licença
```

Este arquivo `readme.md` fornece instruções claras sobre como iniciar e contribuir para o projeto, bem como uma visão geral da estrutura de pastas recomendada e exemplos de como usar o arquivo `app.js`. Certifique-se de ajustar conforme necessário para atender às necessidades específicas do seu projeto.