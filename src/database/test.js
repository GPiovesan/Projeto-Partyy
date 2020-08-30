const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then((db) => {
    //Inserir dados

    proffyValue = {
        name: 'Gabriel Piovesan', 
        avatar: 'https://avatars1.githubusercontent.com/u/36250417?s=460&u=ec2f1035d8f51d6fd2ea0c8c07be7941de70cde3&v=4',
        whatsapp: '12345678909',
        bio: 'Entusiasta das melhores tecnologias de programação.<br><br>Apaixonado por programar coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas programações.',        
    }
    
    classValue = {
        subject: 'Programação',
        cost: '2.000',
        // o proffy id vem do banco de dados
    }

    classScheduleValue = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    //createProffy(db, {proffyValue, classValue, classScheduleValue}) 

    //Consultar dados    
})