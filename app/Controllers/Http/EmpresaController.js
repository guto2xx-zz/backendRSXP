'use strict'

const Empresas = use("App/Models/Empresa");


class EmpresaController {
  async index ({ request, response, view }) {
    const empresas = Empresas.query()
    .with("eventos")
    .fetch();

    return empresas;
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user;
    const data = request.only([
      "nome_fantasia",
      "razao_social",
      "cnpj",
      "contato",
      "telefone",
      "email_contato",
      "bio",
      "avatar"
    ]);

    const empresas = await Empresas.create({ ...data, user_id: id });

    return empresas;
  }
  

  async show ({ params, request, response, view }) {
    const empresa = await Empresas.findBy("id", params.id);

    await empresa.loadMany(["eventos"]);

    return empresa;
  }

  async update ({ params, request, response }) {
    const empresa = await Empresas.findOrFail(params.id);

    const data = request.only([
      "nome_fantasia",
      "razao_social",
      "cnpj",
      "contato",
      "telefone",
      "email_contato",
      "bio",
      "avatar"
    ]);

    empresa.merge(data);

    await empresa.save();

    return empresa;
  }

  async destroy ({auth, params, request, response }) {
    const empresa = await Empresas.findOrFail(params.id);

    if (empresa.user_id !== auth.user.id) {
      return response.status(401).send({ error: "Not authorized" });
    }

    await empresa.delete();
  }
}

module.exports = EmpresaController
