'use strict'

const Inscricao = use("App/Models/Inscricao");


class InscricaoController {
  async index ({ request, response, view }) {
    const inscricao = Inscricao.query()
    .with("aluno")
    .fetch();

    return inscricao;
  }

  async store ({ request, response }) {
    const data = request.only([
      "evento_id",
      "aluno_id"
    ]);

    const inscricao = await Inscricao.create(data);

    return inscricao;
  }

  async destroy ({ params, request, response }) {
    const inscricao = await Inscricao.findOrFail(params.id);

    await inscricao.delete();
  }
}

module.exports = InscricaoController
