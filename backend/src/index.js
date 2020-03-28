const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3333);

/**
 * Rotas / Recursos
 */

 /**
  * METODOS HTTP
  * 
  * C - POST: Criar uma informação no back-end
  * R - GET: Buscar uma informação no back-end
  * U - PUT: Alterar uma informação no back-end
  * D - DELETE: Deletar uma informação no back-end
  */

 /**
  * TIPOS DE PARAMETROS
  * 
  * QUERY PARAMS: Parametros nomeados enviados na rota após "?" (filtros e paginação)
  * ROUTE PARAMS: Parametros utilizados para identificar recursos
  * REQUEST BODY: 
  */

/**
 * SQL: MySQL, SQLite, PostgresSQL, Oracle, MS SQL Server
 * noSQL: MongoDB, ChouchDB, etc
 */




