import express from "express";
import conectaNaDataBase from "./config/dbconnect.js";
import routes from "./routes/index.js";
//import livro from "./models/Livro.js"; Não é mais utilizado porque estamo usando as rotas

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
routes(app); /* Esse app é a instância do express*/

//app.use(express.json()); Não é mais responsabilidade daqui e sim das rotas

//app.get("/", (req, res) => { Não é mais responsabilidade daqui e sim das rotas
//    res.status(200).send("Curso de Node.js"); Não é mais responsabilidade daqui e sim das rotas
//}); Não é mais responsabilidade daqui e sim das rotas

//app.get("/livros", async (req,res) => {
//    const listaLivros = await livro.find({});
//    res.status(200).json(listaLivros);
//});

//app.get("/livros/:id", (req,res) => { Não é mais responsabilidade daqui e sim das rotas
//    const index = buscaLivro(req.params.id); Não é mais responsabilidade daqui e sim das rotas
//   res.status(200).json(livros[index]); Não é mais responsabilidade daqui e sim das rotas
//}); Não é mais responsabilidade daqui e sim das rotas

//app.put("/livros/:id", (req,res) => { Não é mais responsabilidade daqui e sim das rotas
//    const index = buscaLivro(req.params.id); Não é mais responsabilidade daqui e sim das rotas
//    livros[index].titulo = req.body.titulo; Não é mais responsabilidade daqui e sim das rotas
//    res.status(200).json(livros); Não é mais responsabilidade daqui e sim das rotas
//}); Não é mais responsabilidade daqui e sim das rotas

//app.post("/livros", (req,res) => { Não é mais responsabilidade daqui e sim das rotas
//    livros.push(req.body); Não é mais responsabilidade daqui e sim das rotas
//    res.status(201).send("Livro Cadastrado com sucesso!"); Não é mais responsabilidade daqui e sim das rotas
//}); Não é mais responsabilidade daqui e sim das rotas

//app.delete("/livros/:id", (req,res) => { Não é mais responsabilidade daqui e sim das rotas
//    const index = buscaLivro(req.params.id); Não é mais responsabilidade daqui e sim das rotas
//    livros.splice(index, 1); Não é mais responsabilidade daqui e sim das rotas
//    res.status(200).send("Livro removido com sucesso!"); Não é mais responsabilidade daqui e sim das rotas
//}); Não é mais responsabilidade daqui e sim das rotas

export default app;

