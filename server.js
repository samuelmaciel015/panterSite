const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage()
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "public",
            "inicio.html"
        )
    );
});

app.get("/servico", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "public",
            "servico.html"
        )
    );
});

app.get("/cursos", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "public",
            "cursos.html"
        )
    );
});

app.get("/matricule-se", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "public",
            "matricule-se.html"
        )
    );
});

app.get("/sucesso", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "public",
            "sucesso.html"
        )
    );
});

app.post(
"/enviar",
upload.array("arquivos", 10),

async (req, res) => {

try {

const transporter =
nodemailer.createTransport({

service: "gmail",

auth: {
user: "enviar.files.samuel@gmail.com",
pass: "ccgvswzjnvvubxvv"
}

});

await transporter.sendMail({

from: "enviar.files.samuel@gmail.com",

replyTo: req.body.email,

to: "contato@panteraviation.com.br",

subject: `Inscrição recebida - ${req.body.nome}`,

text:
`
Nome Completo: ${req.body.nome}
Curso AVSEC: ${req.body.curso}

DADOS PESSOAIS
Data de Nascimento: ${req.body.dia}/${req.body.mes}/${req.body.ano}
Naturalidade: ${req.body.naturalidade}
Nacionalidade: ${req.body.nacionalidade}
Nome do Pai: ${req.body.pai}
Nome da Mãe: ${req.body.mae}
RG: ${req.body.rg}   Órgão Expedidor: ${req.body.expedidor}/${req.body.uf}
CPF: ${req.body.cpf}
Trabalha na aviação? ${req.body.aviacao} 
Trabalha com Segurança AVSEC? ${req.body.seguranca}
Nome da empresa em que trabalha: ${req.body.empresa}
Escolaridade: ${req.body.escolaridade}

CONTATOS
Logradouro: ${req.body.logradouro}, ${req.body.numero}
Bairro: ${req.body.bairro}
Cidade: ${req.body.cidade}   UF: ${req.body.estado}
CEP: ${req.body.cep}
Telefone: ${req.body.telefone}
E-mail: ${req.body.email}
`,

attachments: req.files
? req.files.map(file => ({
    filename: file.originalname,
    content: file.buffer
}))
: []

});

res.redirect("/sucesso");

} catch (erro) {

console.error(erro);

res.status(500).json({
success: false
});

}

});

app.listen(3000, () => {
console.log(
"http://localhost:3000"
);
});