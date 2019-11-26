'use strict'

const Evento = use("App/Models/Evento");


class EventoController {
  async index ({ request, response, view }) {
    const evento = Evento.query()
    // .with("inscricoes")
    .fetch();

    return evento;
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user;
    const data = request.only([
      "empresa_id",
      "location",
      "nome",
      "bio",
      "endereço",
      "inicio",
      "fim",
      "limite_alunos"
    ]);

    const evento = await Evento.create(data);

    return evento;
  }

  async show ({ params, request, response, view }) {
    const evento = await Evento.findBy("id", params.id);

    return evento;
  }

  async update ({ params, request, response }) {
    const evento = await Evento.findOrFail(params.id);

    const data = request.only([
      "location",
      "nome",
      "bio",
      "endereço",
      "inicio",
      "fim",
      "limite_alunos"
    ]);

    evento.merge(data);

    await evento.save();

    return evento;
  }

  async destroy ({ params, request, response }) {
    const evento = await Evento.findOrFail(params.id);

    await evento.delete();
  }
}

module.exports = EventoController
