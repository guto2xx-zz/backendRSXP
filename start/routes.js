'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource("alunos", "AlunoController")
  .apiOnly()
  .middleware("auth");
  
Route.resource("empresas", "EmpresaController")
  .apiOnly()
  .middleware("auth");

Route.resource("eventos", "EventoController")
.apiOnly()
.middleware("auth");

Route.resource("inscricoes", "InscricaoController")
.apiOnly()
.middleware("auth");