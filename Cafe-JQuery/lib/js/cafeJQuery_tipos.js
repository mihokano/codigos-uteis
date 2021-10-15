var idLinha = 0;

$(document).ready(function () 
{
    $('.tabs').tabs();
    $("#add").click(addTipo);
    buscarTipoProdutos();
});

function buscarTipoProdutos() 
{
    $.get("lib/json/tiposProdutos.json", function (json) 
    {
        lerJSON(json)
    }, "json");
}

function lerJSON(json) 
{
    var jsonDOC = json;
    for (var i = 0; i < jsonDOC.length; i++) 
    {
        var id = jsonDOC[i].id;
        var descricao = jsonDOC[i].descricao;
        escreverDadosTabela(id, descricao);
    }
}

function addTipo() 
{
    var idTipo = $("#idTipo").val();
    var descricao = $("#descricao").val();
    if ((idTipo) && (descricao)) 
    {
        escreverDadosTabela(idTipo, descricao);
        $("#idTipo").val("");
        $("#descricao").val("");
    } else 
    {
        //exibirMensagem("Você precisa informar o nome e o celular para adicionar o contato!");
        alert("Você precisa informar o id e a descrição do tipo do produto!");
    }
}

function removerTipo(idRemover) 
{
    $("#" + idRemover).remove();
}

function escreverDadosTabela(idTipo, descricao) 
{
    idLinha++;
    var html = '<tr id="linha' + idLinha + '">';
    html += '<td>' + idTipo + '</td>';
    html += '<td>' + descricao + '</td>';
    html += '<td>';
    html += '<button class="btn waves-effect waves-light amber accent-4 " type="button" id="del"\n\
                       name="del" onclick="removerTipo(\'linha' + idLinha + '\')">';
    html += '<i class="material-icons center">delete</i></button></td>';
    html += '</tr>';
    $("#corpoTabela").append(html);
}