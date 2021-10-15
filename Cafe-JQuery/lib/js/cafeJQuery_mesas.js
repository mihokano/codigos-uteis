var idLinha = 0;

$(document).ready(function () 
{
    $('.tabs').tabs();
    $("#add").click(addMesa);
});

function addMesa() 
{
    var numero = $("#idMesa").val();
    var qtde = $("#qtdePessoas").val();
    if ((numero) && (qtde)) 
    {
        escreverDadosTabela(numero, qtde);
        $("#idMesa").val("");
        $("#qtdePessoas").val("");
    } else 
    {
        //exibirMensagem("Você precisa informar o nome e o celular para adicionar o contato!");
        alert("Você precisa informar o número e a quantidade de pessoas para a mesa!");
    }
}

function removerMesa(idRemover) 
{
    $("#" + idRemover).remove();
}

function escreverDadosTabela(numero, qtde) 
{
    idLinha++;
    var html = '<tr id="linha' + idLinha + '">';
    html += '<td>' + numero + '</td>';
    html += '<td>' + qtde + '</td>';
    html += '<td>';
    html += '<button class="btn waves-effect waves-light amber accent-4 " type="button" id="del"\n\
                       name="del" onclick="removerMesa(\'linha' + idLinha + '\')">';
    html += '<i class="material-icons center">delete</i></button></td>';
    html += '</tr>';
    $("#corpoTabela").append(html);
}

function LerJSON(json)
{
    var jsonDOC = json;
    for(var i = 0; i < jsonDOC. length; i++)
    {
        var id = jsonDOC[i].id;
        var numMesa = jsonDOC[i].numMesa;
        var qtdPessoas = jsonDOC[i].qtdPessoas;
        escreverDadosTabela(id, numMesa, qtdPessoas);
    }
}

function buscarMesa()
{
    $.get("lib/json/mesasCafe.json", function (json)
    {
        lerJSON(json)
    }, "json");
}