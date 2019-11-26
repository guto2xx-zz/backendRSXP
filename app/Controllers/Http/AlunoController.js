'use strict'

const Aluno = use("App/Models/Aluno");

class AlunoController {
  async index ({ request, response, view }) {
    const alunos = Aluno.query().fetch();

    return alunos;
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user;
    const data = request.only([
      "nome",
      "idade",
      "cpf",
      "bio",
      "avatar"
    ]);

    const aluno = await Aluno.create({ ...data, user_id: id });

    return aluno;
  }

  async show ({ params, request, response, view }) {
    const aluno = await Aluno.findBy("id", params.id);

    return aluno;
  }

  async update ({ params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id);

    const data = request.only([
      "nome",
      "idade",
      "cpf",
      "bio",
      "avatar"
    ]);

    aluno.merge(data);

    await aluno.save();

    return aluno;
  }

  async destroy ({ auth,params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id);

    if (aluno.user_id !== auth.user.id) {
      return response.status(401).send({ error: "Not authorized" });
    }

    await aluno.delete();
  }
}

module.exports = AlunoController
