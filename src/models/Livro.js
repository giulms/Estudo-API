import mongoose from "mongoose";

const  livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editoria: { type: String },
    preco: { type: Number },
    paginas: { type: Number}
}, {versionKey: False});

const livro = mongoose.model("livros", livroSchema);

export default livro;