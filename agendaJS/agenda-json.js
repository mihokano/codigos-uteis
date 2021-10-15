var idLinha = 0;

function addContato() {
    var nome = document.getElementById("nome").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
    if ((nome) && (celular) && (email)) {
        escreverDadosTabela(nome, celular, email);
        document.getElementById("nome").value = "";
        document.getElementById("celular").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Você precisa informar o nome e o celular para adicionar o contato!");
    }
}

function removeContato(idRemover) {
    document.getElementById(idRemover).remove()
}

function escreverDadosTabela(nome, celular, email) {
    var agenda = document.getElementById("agenda").getElementsByTagName("TBODY")[0];
    idLinha++;
    var html = '<tr id="linha' + idLinha + '">';
    html += '<td>' + nome + '</td>';
    html += '<td>' + celular + '</td>';
    html += '<td>' + email + '</td>';
    html += '<td>'
    html += '<button class="btn waves-effect waves-light" type="button" id="del"\n\
                       name="del" onclick="removeContato(\'linha' + idLinha + '\')">';
    html += '<i class="material-icons center">delete</i></button></td>';
    html += '</tr>';
    agenda.insertAdjacentHTML('beforeend', html);
}

function carregarJSON() {
    var ajax = new XMLHttpRequest();
    ajax.onload = function () {
        lerJSON(this);
    }
    ajax.open("GET", "agendaContatos.json");
    ajax.send();
}

function lerJSON(json){
    
    var jsonDoc = JSON.parse(json.responseText);

    for(var i = 0; i < jsonDoc.agenda.length; i++){
        var nome = jsonDoc.agenda[i].nome;
        var celular = jsonDoc.agenda[i].celular;
        var email = jsonDoc.agenda[i].email;
        escreverDadosTabela(nome, celular, email);
    }
    
}