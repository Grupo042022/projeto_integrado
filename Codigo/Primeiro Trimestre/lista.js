function DeleteItem(){
    this.parentElement.remove()
}

function EditItem(){
    item_lista = this.parentElement
    texto_item_lista  = item_lista.innerText.replace("DeleteEdit", "")
    input_element = document.querySelector('[data-form-input]')
    input_element.value = texto_item_lista
    
    const botao_submit = document.querySelector('[button-submit]')
    botao_submit.className = 'd-none'

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.remove('d-none')

}

function CriarBotaoEdit(){
    const botao_edit =  document.createElement('button')
    botao_edit.classList.add("btn", "btn-warning")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
    botao_edit.addEventListener("click", EditItem);

    return botao_edit
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}

function Edit(){
    
    texto_adicionado = input_element.value
    item_lista.innerHTML = texto_adicionado

    item_lista.appendChild(CriarBotaoDelete())
    item_lista.appendChild(CriarBotaoEdit())

    const botao_submit = document.querySelector('[button-submit]')
    botao_submit.classList.remove('d-none')
    botao_submit.classList.add('btn', 'btn-dark')

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.add('d-none')

    input_element.value = '';

}


function verificar() {
    valor_input = document.getElementById('numero').value
    try {
        if (valor_input == '') { throw 'Informe um valor.' }
    }
    catch (erro) {
        document.getElementById('msg').innerText = "Erro: " + erro;
    }
    finally {
        console.log('Serei executado sempre')
    }
}
