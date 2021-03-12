//importa os módulos http e express
const http = require("http");
const express = require("express");

//constrói um objeto express
const app = express();
app.use(express.json());

//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set("port", porta);
const server = http.createServer(app);
server.listen(3000);

let cont = 2;
let alunos = [
  {
    id: 1,
    nome: "João",
    fone: "11223344",
    email: "joao@email.com",
  },
  {
    id: 2,
    nome: "Maria",
    fone: "55221133",
    email: "maria@email.com",
  },
];

//tratamento de requisições GET
app.get("/alunos", (request, response, next) => {
    return response.status(200).json(alunos);
});

//tratamento de requisições POST
app.post("/alunos", (request, response, next) => {
    const {nome, fone, email} = request.body;
    const id = cont+= 1;
    const aluno = {
        id,
        nome,
        fone,
        email
    }
    clientes.push(aluno);
    return response.status(201).json(alunos);
});

//tratamento de requisições PUT
app.put("/alunos", (request, response, next) => {
    const {id, fone} = request.body;

    const aluno = alunos.find(aluno => aluno.id == id);

    if (!aluno){
        return response.status(400).send();
    }

    aluno.fone = fone;

    return response.staus(204).end();
});

//tratamento de requisições DELETE
app.delete("/alunos/:id", (request, response) => {
    const {id} = request.params;

    const alunoIndex = alunos.findIndex(aluno => aluno.id == id);

    if (alunoIndex < 0){
        return response.status(400).send();
    }

    clientes.splice(alunoIndex, 1);

    return response.status(200).send();
});