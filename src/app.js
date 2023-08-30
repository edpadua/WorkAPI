import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
  ]


const professionals = [
    {
      "name": "Antônio",
      "cpf": "333.444.031-77",
      "email": "antonio@email.com",
      "password": "Se5#yu",
      "endereco": "Av. São João",
      "id": 1
    },
    {
      "name": "José Carlos",
      "cpf": "300.328.058-26",
      "email": "carlos@email.com",
      "password": "De7#yu",
      "endereco": "Rua Piracicaba",
      "id": 2
    }
  ]


  function buscaProfessional(id) {
    return professionals.findIndex(professional => professional.id == id)
  }

  app.get('/', (req, res) => {
    res.status(200).send('WorkSpace');
  }) 


  app.get('/professionals', (req, res) => {
    res.status(200).json(professionals)
  })

  app.post('/professionals', (req, res) => {
    professionals.push(req.body);
    res.status(201).send('Profissional foi cadastrado com sucesso')
  })


  app.put('/professionals/:id', (req, res) => {
    let index = buscaProfessional(req.params.id);
    professionals[index].name = req.body.name;
    res.json(professionals);
  })

  app.get('/professionals/:id', (req, res) => {
    let index = buscaProfessional(req.params.id);
    res.json(professionals[index]);
  })


  app.delete('/professionals/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaProfessional(id);
    professionals.splice(index, 1);
    res.send(`Profissional ${id} removido com sucesso`);
  })

  export default app