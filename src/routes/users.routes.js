const { Router } = require('express');

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router();


/*function myMiddleware(request, response, next){
  console.log('você passou pelo middleware');
  if(!request.body.isAdmin){
    return response.json({ message: "user unauthorized" });
  }

  next()
}*/


const usersController = new UsersController();

//método POST geralmente é usado para cadastrar algo
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes;