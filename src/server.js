
const partyys = [
    {
        name_owner: "Gabriel Piovesan", 
        whatsapp: "12345678909",        
        partyy_type: "Rock",
        partyy_name: "Skina do Rock",
        partyy_photo: "https://avatars1.githubusercontent.com/u/36250417?s=460&u=ec2f1035d8f51d6fd2ea0c8c07be7941de70cde3&v=4",
        address: "Rua xyz",
        address_number: 1,
        cost: "10",
        description: "Rock'n Roll baby",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const partyy_types = [
    "Eletrônica",
    "Indie",
    "Pagode",
    "Anos 80",
    "Funk",
    "Rock",
    "Festival",
    "Forró",
    "Bar",
    "Evento",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return partyy_types[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageFindPartyy(req, res) {
    const filters = req.query
    return res.render("find-partyy.html", { partyys, filters, partyy_types, weekdays })
}

function pageMakePartyy(req, res) {
    const data = req.query
    const isEmpty = Object.keys(data).length == 0
    // se tiver dados
    if (!isEmpty) {

        data.subject = getSubject(data.subject)
        // adicionar dados a lista de partyys
        partyys.push(data)    
        return res.redirect("/make-partyy")
    }
    // se não, mostrar a pagina
    return res.render("make-partyy.html", {partyy_types, weekdays})
}

// Servidor
const express = require('express')
const server = express()

// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


/// Inicio e configuração do servidor
server
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/find-partyy",pageFindPartyy)
.get("/make-partyy", pageMakePartyy)
// start do servidor
.listen(5500)