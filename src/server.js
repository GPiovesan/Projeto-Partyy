
const proffys = [
    {
        name: "Gabriel Piovesan", 
        avatar: "https://avatars1.githubusercontent.com/u/36250417?s=460&u=ec2f1035d8f51d6fd2ea0c8c07be7941de70cde3&v=4",
        whatsapp: "12345678909",
        bio: "Entusiasta das melhores tecnologias de programação.<br><br>Apaixonado por programar coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas programações.",
        subject: "Programação",
        cost: "2.000",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Naiara Batista", 
        avatar: "https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/117099355_156483979384388_7066407683652316349_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=FcYuS2c-CbQAX9OCKeK&_nc_ht=scontent.fsjk1-1.fna&oh=05fff7c94341dfd084bbab92a298c2fe&oe=5F574CF3",
        whatsapp: "12981705509",
        bio: "Entusiasta das melhores estruturas metálicas avançadas.<br><br>Apaixonado por construir coisas e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas construções.",
        subject: "Arquitetura",
        cost: "2.500",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
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
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isEmpty = Object.keys(data).length == 0
    // se tiver dados
    if (!isEmpty) {

        data.subject = getSubject(data.subject)
        // adicionar dados a lista de proffys
        proffys.push(data)    
        return res.redirect("/study")
    }
    // se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
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
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(5500)