//ponto de entrada da aplicação
require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError");

// importando o express
const express = require('express');
const routes = require('./routes');

migrationsRun();

//inicializando o express
const app = express();
app.use(express.json()); //qual padrão utilizado para receber as informações

app.use(routes);

app.use(( error, request, response, next ) => {
  //erro do cliente
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  //erro do servidor
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })

});

const PORT = 3330;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));