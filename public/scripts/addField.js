document.querySelector("#add-time").addEventListener('click', cloneField) // Listener para o botão

function cloneField() { //Clonar os campos
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // clonando o campo para replicação

    const fields = newFieldContainer.querySelectorAll('input') // Seleciona o input dentro dos campos

    fields.forEach(function(field) { // Limpando os campos input
        field.value = ""
    });
    document.querySelector('#schedule-items').appendChild(newFieldContainer) // Adicionando uma nova "criança" html
}