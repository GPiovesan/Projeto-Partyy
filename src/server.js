
const partyys = [
    {
        name_owner: "Gabriel Piovesan", 
        social_network: "https://https://www.facebook.com/profile.php?id=100000622718757",
        whatsapp: "12345678909",
        email: "bieldeluna@gmail.com",
        thematic: "Rock",
        address: "Rua xyz",
        address_number: 1,
        cost: "10",
        description: "Rock'n Roll baby",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const partyyTypes = [
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
    return partyyTypes[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageFindPartyy(req, res) {
    const filters = req.query
    return res.render("find-partyy.html", { partyys, filters, partyyTypes, weekdays })
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
    return res.render("make-partyy.html", {partyyTypes, weekdays})
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